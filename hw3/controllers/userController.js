let users = require('../db/users');

class userController {
    renderUsers(req, res) {
        console.log(users)
        const {age, city} = req.query;
        if (age || city) {
            let newUsers = users;

            if (city) {
                newUsers = newUsers.filter(user => user.city === city);
            }

            if (age) {
                newUsers = newUsers.filter(user => user.age === age);
            }

            res.render('users', {users: newUsers});
            return;
        }
        res.render('users', {users});
    }

    getUserById({params: {id}}, res) {
        const normalId = Number(id);
        const user = users.find(user => user.id === normalId);

        if (user) {
            res.render('user', {user});
            return;
        }

        res.render('notFound');
    }

    deleteUserById({params: {id}}, res) {
        const normalId = Number(id);
        users = users.filter(user => user.id !== normalId);
        res.redirect('/users');
    }
}

module.exports = new userController();