import mongoose from 'mongoose';
mongoose.plugin(require('./plugins/commonAttribute'));

const fs = require('fs');

let files = fs.readdirSync(__dirname + '/schemas');

let js_files = files.filter((f) => {
    return f.endsWith('.js');
},files);

module.exports = {};

for (let f of js_files) {
    console.log(`import mongodb schemes from files ${f}...`);
    let name = f.substring(0,f.length - 3);
    let m = require(__dirname + '/schemas/' + f);
    module.exports[name] = m;
}


