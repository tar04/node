const users = require("../db/users");

function isUserExist(req, res, next) {
    const {email, password} = req.body;

    const validUser = users.some(user => ((user.email === email) && (user.password === password)));

    try {
        if (users.length) {
            if (!validUser) {
                throw new Error('User doesn\'t exist');
            }

        }
        next();

    } catch (e) {
        res.status(400).send(e.message);
    }
}

module.exports = isUserExist;