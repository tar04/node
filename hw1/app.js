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

/*fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) {
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
        if (err) {
            throw err;
        }
        fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
            if (err) {
                throw err;
            }
            onlineUsers.forEach(onlineUser => {
                fs.writeFile(path.join(__dirname, 'main', 'online', `${onlineUser.name}`), `\nNAME:${onlineUser.name}\nAGE:${onlineUser.age}\nCITY: ${onlineUser.city}\n`, (err) => {
                    if (err) {
                        throw err;
                    }
                })
            })
            inPersonUsers.forEach(inPersonUser => {
                fs.writeFile(path.join(__dirname, 'main', 'inPerson', `${inPersonUser.name}`), `\nNAME: ${inPersonUser.name}\nAGE:${inPersonUser.age}\nCITY: ${inPersonUser.city}\n`, (err) => {
                    if (err) {
                        throw err;
                    }
                })
            })
        })
    })
});*/

//Міняємо місцями файли

/*function changeUsers() {
    onlineUsers.forEach(onlineUser => {
        fs.rename(path.join(__dirname, 'main', 'online', `${onlineUser.name}`), path.join(__dirname, 'main', 'inPerson', `${onlineUser.name}`), (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
    inPersonUsers.forEach(inPersonUser => {
        fs.rename(path.join(__dirname, 'main', 'inPerson', `${inPersonUser.name}`), path.join(__dirname, 'main', 'online', `${inPersonUser.name}`), (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
}

changeUsers();*/

