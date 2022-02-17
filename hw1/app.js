const fs = require("fs");
const path = require("path");

const onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Taras", age: 20, city: "Lviv"},
    {name: "Max", age: 22, city: "Kyiv"}
]

const inPersonUsers = [
    {name: "Katya", age: 19, city: "Rivne"},
    {name: "Bogdan", age: 20, city: "Lviv"},
    {name: "Matthew", age: 22, city: "Lviv"}
]
//Створення папок із користувачами

/*fs.mkdir(path.join(__dirname, 'data'), (err) => {
    if (err) {
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'data', 'online'), (err) => {
        if (err) {
            throw err;
        }
        fs.mkdir(path.join(__dirname, 'data', 'inPerson'), (err) => {
            if (err) {
                throw err;
            }
            onlineUsers.forEach(onlineUser => {
                fs.writeFile(path.join(__dirname, 'data', 'online', `${onlineUser.name}`), `\nNAME:${onlineUser.name}\nAGE:${onlineUser.age}\nCITY: ${onlineUser.city}\n`, (err) => {
                    if (err) {
                        throw err;
                    }
                })
            })
            inPersonUsers.forEach(inPersonUser => {
                fs.writeFile(path.join(__dirname, 'data', 'inPerson', `${inPersonUser.name}`), `\nNAME: ${inPersonUser.name}\nAGE:${inPersonUser.age}\nCITY: ${inPersonUser.city}\n`, (err) => {
                    if (err) {
                        throw err;
                    }
                })
            })
        })
    })
});*/

//Міняємо місцями файли

/*function changeUsers(oldDir, newDir) {
    fs.readdir(path.join(__dirname, 'data', oldDir), 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        data.forEach(file => {
            fs.rename(path.join(__dirname, 'data', oldDir, file), path.join(__dirname, 'data', newDir, file), (err) => {
                if (err) {
                    throw err;
                }
            })
        })
    })
}

changeUsers("inPerson", "online");
changeUsers("online", "inPerson");*/

