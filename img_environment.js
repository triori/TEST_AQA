const http = require('http');
const fs = require('fs');
const imgUrl = require ('./config.json').img_src

const imgDir = require ('./config.json').img_dir

!fs.existsSync(imgDir) ? fs.mkdirSync(imgDir) : null

const file = fs.createWriteStream(`${imgDir}/example.jpeg`);
function start () {
    const request = http.get(imgUrl, response => {
        response.pipe(file);
    });
}

module.exports.start = start