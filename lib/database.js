import sqlite3 from 'sqlite3';

const database = {};

database.init = () => {
    database.connection = new sqlite3.Database('database');
    database.run = (sql, values) => { 
        return new Promise((resolve, reject) => {
        database.connection.run(sql, values, function (err) {
            if(err) reject(err);
            resolve();
        });
    })};
    database.select = (sql, values) => { 
        return new Promise((resolve, reject) => {
        database.connection.all(sql, values, function (err, rows) {
            if(err) reject(err);
            resolve(rows);
        });
    })};
}

export { database };