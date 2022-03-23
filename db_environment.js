const sqlite3 = require('sqlite3').verbose();
const fs = require ('fs')
const dbDir = require ('./config.json').db_dir

!fs.existsSync(dbDir) ? fs.mkdirSync(dbDir) : null

let db = new sqlite3.Database(`${dbDir}/aqaTest.db`, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to database.');
});
function start(){
db.serialize(function () {
    db.run('CREATE TABLE IF NOT EXISTS Countries(name, population, area);');
    db.run('INSERT INTO Countries (name, population, area) VALUES ("Ukraine", 41588354, 603628), ("France", 67399000, 640679), ("USA", 328239523, 9833520), ("China", 1400050000, 9596961)')
})
db.all('SELECT * FROM Countries', [], (err, row) => row.length ? row.forEach(e => console.log(e)) : console.log('no rows'))
db.close()
}
// db.all('SELECT * FROM Countries', [], (err, row) => row.length ? row.forEach(e => console.log(e)) : console.log('no rows'))


exports.start = start