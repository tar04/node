let users = require('../db/users');

class loginController {
    renderLogin(req,res){
        res.render('login');
    }

    logUserIn(req,res){
        users.push({...req.body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users');
    }
}

module.exports= new loginController;