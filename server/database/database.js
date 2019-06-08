let mongoose = require('mongoose');
const serverUrl = '127.0.0.1:27017';
const databaseName = 'fitness-app';

class Database {
    constructor () {
        this._connect();
    }

    _connect () {
        mongoose.connect(`mongodb://${serverUrl}/${databaseName}`)
            .then(() => {
                console.log(`Connected to ${databaseName} on ${serverUrl}`);
            })
            .catch(err => {
                console.log('Database connection error: ', err);
            })
    }
}

module.exports = new Database();
