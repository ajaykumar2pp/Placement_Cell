// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;

// passport.serializeUser((user , done) => {
// 	done(null , user);
// })
// passport.deserializeUser(function(user, done) {
// 	done(null, user);
// });

// passport.use(new GoogleStrategy({
// 	clientID:"31366552284-bo92c1jgiii4eqtlubldbirs03l930i9.apps.googleusercontent.com", // Your Credentials here.
// 	clientSecret:"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", // Your Credentials here.
// 	callbackURL:"http://localhost:4000/register",
// 	passReqToCallback:true
// },
// function(request, accessToken, refreshToken, profile, done) {
// 	return done(null, profile);
// }
// ));
// const router= require('express').Router();

// router.get('/register',(req,resp)=>{
//     resp.render("auth/register");

// })
// router.get('/reset',(req,resp)=>{
//     resp.render("auth/reset");

// })
// router.get('/login',(req,resp)=>{
//     resp.render("auth/login");

// })

// router.get('/login',authController().login);
// router.post('/login',authController().postLogin)
// router.get('/register',authController().register)
// router.post('/register',authController().postRegister)


// const authController = require("../app/controller/authController")

// app.get('./login',authController().login)
// app.post('./login',authController().postLogin)
// app.get('./register',authController().register)
// app.post('./register',authController().postRegister)
// module.exports = router;
