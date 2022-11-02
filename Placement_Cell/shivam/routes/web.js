const User = require('../app/models/user')
const passport = require('passport')
function initRoutes(app) {

    // app.get('/', (req, res) => {
    //     res.send("<button><a href='/auth'>Login With Google</a></button>")
    // });
    // ************************************  SIGN IN SETUP  *********************************//
    app.get('/signin', function (req, res) {
        res.render('signin')

    });

    app.post("/signin", (req, res, next) => {
        const { username, password } = req.body

        if (!username || !password) {
            req.flash('error', 'All fields are required')
            return res.redirect('/signin')

        }
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                req.flash('error', info.message)
                return next(err)
            }
            if (!user) {
                req.flash('error', info.message)
                return res.redirect('/signin')
            }
            req.logIn(user, (err) => {
                if (err) {
                    req.flash('error', info.message)
                    return next(err)
                }

                return res.redirect('/home');
            })
        })(req, res, next)
    }
    );

    app.get("/home", isLoggedIn, function (req, res) {
        res.render("home");
    });
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect("/signin");
    }

    // **************************************************   SIGNUP  SETUP  ****************************//
    app.get('/', function (req, res) {
        res.render('signup');

    });


    app.post('/', (req, resp) => {
        const { username, email, password } = req.body
        console.log(req.body);
        if (!username || !email || !password) {
            req.flash('error', 'All fields are required')
            req.flash('username', username)
            req.flash('email', email)
            return resp.redirect('/')
        }
        //   Check if email exists 
        User.exists({ email: email }, (err, result) => {
            if (result) {
                req.flash('error', 'Email already taken')
                req.flash('username', username)
                req.flash('email', email)
                return resp.redirect('/')
            }
        });
        User.register({
            username: req.body.username,
            email: req.body.email
        }, req.body.password, function (err) {
            if (err) {
                req.flash('error', 'something went to wrong')
                return resp.redirect('/')
            } else {
                return resp.redirect('/signin')
            }
        });

    });


    // *****************************************   RESET PASSWORD SETUP  *************************//
    app.get('/reset', function (req, res) {
        res.render('reset');

    });
    app.post('/reset', function (req, res) {
        User.findByUsername(req.body.username, (err, user) => {
            if (err) {
                res.send(err);
            } else {
                user.changePassword(req.body.oldpassword,
                    req.body.newpassword, function (err) {
                        if (err) {
                            res.send(err);
                        } else {
                            return res.redirect('/signin')
                        }
                    });
            }
        });
    });


    app.post('/logout', (req, resp, next) => {
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            return resp.redirect('/')
        });
    })
 
}
module.exports = initRoutes

