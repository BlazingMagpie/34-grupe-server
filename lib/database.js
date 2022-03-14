import sqlite3 from 'sqlite3';
import { promisify } from 'util';

const database = {};

database.init = () => {
    database.connection = new sqlite3.Database('database');
    database.run = (sql, values) => { return new Promise((resolve, reject) => {
        database.connection.run(sql, values, (err) => {
            if(err) reject(err);
            resolve();
        });
    })};
}

export { database };