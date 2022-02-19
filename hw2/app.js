const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

let users = []

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));



app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/users', (req, res) => {
    const {age, city} = req.query;
    if (age || city) {
        let newUsers = [...users]
        if (city) {
            newUsers = newUsers.filter(user => user.city === city)
        }
        if (age) {
            newUsers = newUsers.filter(user => user.age === age)
        }
        res.render('users', {users: newUsers});
    }
    res.render('users', {users});
})

app.get('/users/:id', ({params: {id}}, res) => {
    const normalId = Number(id);
    const user = users.find(user => user.id === normalId);
    if (user) {
        res.render('user', {user})
        return;
    }
    res.render('notFound');

})

app.get('/signin', (req, res) => {
    res.render('signin');
})

app.get('/error', (req, res) => {
    res.render('error');
})

app.get('/deleteUser/:id', ({params:{id}}, res) => {
    const normalId = Number(id);
    users = users.filter(user => user.id !== normalId);
    res.redirect('/users');
})

app.post('/signin', (req, res) => {
    const {email, password} = req.body;
    if (users.length) {
        users.forEach(user => {
            if (((user.email === email) && (user.password === password))) {
                res.redirect(`/users/${user.id}`)
            }
        })
    }
    res.render('notFound');
})

app.post('/login', (req, res) => {
    for (const user of users) {
        if (user.email === req.body.email) {
            res.redirect('/error')
            return;
        }
    }
    users.push({...req.body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('/users');
})

app.use((req, res) => {
    res.render('notFound')
})

app.listen(5200, () => {
    console.log('Server has started on port http://localhost:5200');
})