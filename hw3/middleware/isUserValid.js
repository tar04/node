const users = require("../db/users");

function isUserValid(req, res, next) {
    const {firstName, lastName, email, password, age, city} = req.body;
    const foundedEmail = users.find(user => user.email === email);

    try {

        if (!firstName || !lastName || !email || !password || !age || !city) {
            throw new Error('All fields are required');
        }

        if (!email.includes('@')) {
            throw new Error('Email is not valid');
        }

        if (foundedEmail) {
            res.redirect('/error');
            return;
        }

        next();
    } catch (e) {
        res.status(400).send(e.message);
    }

}

module.exports=isUserValid;