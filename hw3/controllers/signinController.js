let users = require('../db/users');

class signinController {
    renderSignIn(req, res) {
        res.render('signin');
    }

    signUserIn({body: {email, password}}, res) {
        const user = users.find(user => ((user.email === email) && (user.password === password)))
        res.redirect(`/users/${user.id}`);
    }
}

module.exports = new signinController;