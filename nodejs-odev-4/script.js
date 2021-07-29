const fs = require('fs');

function create() {
    fs.writeFile('employees.json', '{ "name": "Employee 1 Name", "salary": 2000 }', 'utf8', (err) => {
        if (err) console.log(err);
        console.log('\n1-) Dosya Oluşturuldu.');
        read();
    })
}

function read() {
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) console.log(err);
        console.log('\n2-) Dosya Okundu.');
        console.log(data);
        update();
    })
}

function update() {
    fs.appendFile('employees.json', ',\n{ "age": 35, "gender": "male" }', 'utf8', (err) => {
        if (err) console.log(err);
        console.log('\n3-) Dosya Güncellendi.');
        remove();
    })
}

function remove() {
    fs.unlink('employees.json', (err) => {
        if (err) console.log(err);
        console.log('\n4-) Dosya Silindi.');
    })
}

create();