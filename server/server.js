const _ = require('lodash');
const express = require('express')
const next = require('next')
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var config = require('./config.json');
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];




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
  console.log(profile.id);
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
  console.log(environmentConfig);
  server.use(passport.initialize());
  server.use(passport.session());

  
  server.get('/auth/github',  passport.authenticate('github'));

  server.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
      console.log("success");
      if(dev)  res.redirect('/');
      res.redirect('/login');
  });

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/test/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})