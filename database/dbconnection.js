const mongoose = require('mongoose')
const config=require('config')
const host = config.get('dbhost');
const port = config.get('dbport');
const db = config.get('dbname');
module.exports = function () {
    mongoose.connect(`mongodb://${host}:${port}/${db}`,
        { useNewUrlParser: true },
        (err) => {
            console.log(err || 'connected to db successfully');
        });
};