const _ = require('lodash');
const express = require('express')
const next = require('next')
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const facade = require('./facade/facade');
const restclient = require('./facade/restclient');

var config = require('./config.json');
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

const db = require('./startup/db');
db();



const port = parseInt(process.env.PORT, 10) || 9000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


passport.use(new GitHubStrategy({
  clientID: environmentConfig.clientID,
  clientSecret: environmentConfig.clientSecret,
  callbackURL: environmentConfig.callbackURL
},
function(accessToken, refreshToken, profile, cb) {
  
  facade.saveOrUpdateUser(accessToken, profile);
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
  const server = express()
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(express.static('public'));
  
  server.get('/auth/github',  passport.authenticate('github'));

  
  server.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
      if(dev){
        res.redirect("/hackfreeapps/"+req.user.id);
      }else{
        res.redirect("/login/hackfreeapps/"+req.user.id);
      }
  });



  server.get('/hackfreeapps/:id', async (req, res) => {
    
    const user = await facade.getUser(req.params.id);

    if(user && user.token){
      const isValid = await restclient.checkUser(user.token)
     
      if(isValid){
        const repos =  await facade.getAllRepos();
        return app.render(req, res, '/userpage', { userdetails: user.user, repos })
      }
      else{
       res.redirect('/auth/github');
      }
    }

    res.redirect('/');
       
  })

  server.get("/", (req, res, next) => {
    return app.render(req, res, '/index', { })
  });
    
  server.get("/url", (req, res, next) => {
    res.send(["Tony","Lisa","Michael","Ginger","Food"]);
  });
 
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) { console.log(err); throw err }
    console.log(`>>>>>> Ready on http://localhost:${port}`)
  })
})