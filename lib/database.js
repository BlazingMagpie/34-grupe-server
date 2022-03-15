import sqlite3 from 'sqlite3';
import {createClient} from 'redis';

const database = {};

database.init = () => {
    database.sqlite = new sqlite3.Database('database');
    database.redis = createClient();
    database.redis.connect();

    database.run = (sql, values) => { 
        return new Promise((resolve, reject) => {
        database.sqlite.run(sql, values, function (err) {
            if(err) reject(err);
            resolve();
        });
    })};
    
    database.select = (sql, values) => { 
        return new Promise((resolve, reject) => {
        database.sqlite.all(sql, values, function (err, rows) {
            if(err) reject(err);
            resolve(rows);
        });
    })};
}

export { database };