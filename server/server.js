const _ = require('lodash');
const express = require('express');
const next = require('next');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const facade = require('./facade/facade');
const restclient = require('./facade/restclient');
const PropertiesReader = require('properties-reader');
var config = PropertiesReader('./server/config.file');
const jwt = require('jsonwebtoken');
const db = require('./startup/db');
var cookieParser = require('cookie-parser');
const logger = require('./startup/logger');


try{
  db();
}catch(e){
  console.log("Error Init DB" + e);
}


const port = parseInt(process.env.PORT, 10) || 9000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


passport.use(new GitHubStrategy({
  clientID: config.get('clientID'),
  clientSecret: config.get('clientSecret'),
  callbackURL: config.get('callbackURL')
},
async function(accessToken, refreshToken, profile, cb) {
  
  let user = await facade.saveOrUpdateUser(accessToken, profile);
  await facade.updateLoggingIn(user.id, true);
  return cb(null, profile);
}
));
 
passport.serializeUser(function(user, cb) {
  
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  
  cb(null, obj);
});


app.prepare().then(() => {
  const server = express();
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(express.static('public'));
  server.use(cookieParser());
  server.use(express.json());
  server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  server.get('/auth/github',  passport.authenticate('github',{ scope: [ 'user:email','admin:repo_hook' ] }));

  
  server.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  async function(req, res) {
       
       res.redirect("/hackfreeapps/"+req.user.id);
     
  });


  server.get('/hackfreeapps/:id', async (req, res, next)=>{
    
    const user = await facade.getUser(req.params.id);
    
    if(!user.logging_in){
      try{
        
          const jwtToken = req.cookies.cookieName;
          const decoded = jwt.verify(jwtToken, config.get('jwtPrivateKey'));
          if(decoded.id !== user.id){
            res.status(403).send('Unauthorized');
          }
      }
      catch (ex) {
        res.redirect('/auth/github');
      }
    }else{
      //15 minutes, and can be accessed in http only, no javascript - XSS Avoid.
      //Using Jwt inside a cookie to avoid CSRF
      let jwtToken = jwt.sign({id:user.id},config.get("jwtPrivateKey"));
      res.cookie('cookieName',jwtToken, { maxAge: 1000 * 60 * 1, httpOnly: true });
    }
    facade.updateLoggingIn(user.id, false);
    req.user = user ;
    next();
  },async (req, res) => {
    let user = req.user;
    if(user && user.token){
      
      const isValid = await restclient.checkUser(user.token);
     
      if(isValid){
        const repos =  await facade.getAllRepos();
        return app.render(req, res, '/userpage', { token: user.token, userdetails: user.user, repos });
      }
      else{
       res.redirect('/auth/github');
      }
    }

    res.redirect('/');
       
  });

  server.get("/repository/:id", async(req,res)=>{

        
      const jwtToken = req.cookies.cookieName;
      let user = null;

      if(jwtToken){
     
        try{
          const {id} = jwt.verify(jwtToken, config.get('jwtPrivateKey'));
          user = await facade.getUser(id);
        }catch(ex){
          console.log(ex);
        }
      
      }
   
      try{
       let repoid =  req.params.id;
      const repo = await facade.findRepo(repoid);
   
      return app.render(req, res, '/repository_detail_page', { userdetails: user?user.user:null, repo });
      }catch(ex){
        console.log(ex);
      }

  });

  server.get("/", async(req, res, next) => {
    
    const jwtToken = req.cookies.cookieName;
    let user = null;

    if(jwtToken){
   
      try{
        const {id} = jwt.verify(jwtToken, config.get('jwtPrivateKey'));
        user = await facade.getUser(id);
      }catch(ex){
        console.log(ex);
      }
    
    }

    const repos =  await facade.getAllRepos();

    return app.render(req, res, '/index', { repos, userdetails: user?user.user:null });
  });

  server.get("/repos/:tech/:domain", async(req, res, next) => {
    
    const jwtToken = req.cookies.cookieName;
    let user = null;

    if(jwtToken){
   
      try{
        const {id} = jwt.verify(jwtToken, config.get('jwtPrivateKey'));
        user = await facade.getUser(id);
      }catch(ex){
        console.log(ex);
      }
    
    }

    const repos =  await facade.getReposBy(req.params.tech, req.params.domain);
    res.send(repos);

  });


  server.get("/ref", async(req, res) => {
    
  


    const refData =  await facade.getRefData();

    console.log(refData);
    res.send(refData);
   

    
  });

  server.get("/comments/:repoId", async(req, res) => {
    
  
    const comments =  await facade.getComments(req.params.repoId);

    res.send(comments);
   

    
  });

  server.post("/comments", async(req, res)=>{
    const jwtToken = req.cookies.cookieName;
    let user = null;

    if(jwtToken){
   
      try{
        const {id} = jwt.verify(jwtToken, config.get('jwtPrivateKey'));
        user = await facade.getUser(id);
      }catch(ex){
        console.log(ex);
      }
    
    }else{
      res.status(401).send('Access denied. No token provided.');
    }
    
    let comment_request = req.body;
    comment_request.comment_from = user._id;
    
    const comment = facade.createComment(comment_request);
    res.send(comment);

  });
    
  server.get("/url", (req, res, next) => {
   
    logger.info("test" + req.body);
    res.send(["Tony","Lisa","Michael","Ginger","Food"]);
  });
 
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) { console.log(err); throw err ;}
    console.log(`>>>>>> Ready on http://localhost:${port}`);
  });
}).catch((err)=>{
  console.error(err);
});