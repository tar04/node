const fs = require("fs");
const path = require("path");

//1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх
// в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
//як можна це обійти, але поки зробіть так

/*fs.writeFile(path.join(__dirname,'file1.txt'),'Hello everyone!',(err)=>{
    if (err){
        throw err;
    }
    fs.readFile(path.join(__dirname,'file1.txt'),'utf-8',(err,data)=>{
        if (err){
            throw err;
        }
        fs.writeFile(path.join(__dirname,'file2.txt'),data,(err)=>{
            if (err){
                throw err;
            }
        })
    })
})*/

//2. Створіть файл ( можете вручну ) заповніть його якимись даними
//Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться. Також вийде callback hell

/*fs.readFile(path.join(__dirname,'file.txt'),'utf-8',(err,data) => {
    if (err){
        throw err;
    }
    fs.mkdir(path.join(__dirname,'files'),(err =>{
        if (err){
            throw err;
        }
        fs.writeFile(path.join(__dirname,'files','file2.txt'),data,(err)=>{
            if (err){
                throw err;
            }
            fs.unlink(path.join(__dirname,'file.txt'),err=>{
                if (err){
                    throw err;
                }
            })
        })
    }))
});*/

//3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
//і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать -
// це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх
// перейменувати і додати до назви префікс _new

//Створення папок

/*fs.mkdir(path.join(__dirname, 'data'), err => {
    if (err) {
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'data', 'data2'), err => {
        if (err) {
            throw err;
        }
        fs.mkdir(path.join(__dirname, 'data', 'data3'), err => {
            if (err) {
                throw err;
            }
            fs.writeFile(path.join(__dirname, 'data', 'data2', 'info.txt'), 'sun is shining', err => {
                if (err) {
                    throw err;
                }
                fs.writeFile(path.join(__dirname, 'data', 'data2', 'info2.txt'), 'hello world', err => {
                    if (err) {
                        throw err;
                    }
                    fs.writeFile(path.join(__dirname, 'data', 'data3', 'file.txt'), 'hey everyone', err => {
                        if (err) {
                            throw err;
                        }
                    })
                })
            })
        })
    })
})*/

//Основна функція

/*function renameOrClear(directory) {
    fs.readdir(path.join(directory), (err, data) => {
        if (err) {
            throw err;
        }
        data.forEach(eachFolder => {
            fs.stat(path.resolve(directory, eachFolder), (err, stats) => {
                if (stats.isDirectory()) {
                    fs.rename(path.resolve(directory, eachFolder), path.resolve(directory, '_new' + eachFolder), err => {
                        renameOrClear(path.resolve(directory, '_new' + eachFolder));
                        if (err) {
                            throw err;
                        }
                    })
                } else if (stats.isFile()) {
                    fs.truncate(path.resolve(directory, eachFolder), err => {
                        if (err) {
                            throw err;
                        }
                    })
                }
            })
        })
    })
}

renameOrClear('data');*/
