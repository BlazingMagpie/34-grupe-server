import mysql from 'mysql2';

const database = {};

database.init = () => {
    database.connection = mysql.createConnection({
        host: 'localhost',
        user: 'mano',
        password: 'asdf',
        database: 'projektas'
    })
}

database.query = (sql, callback) => {
    database.connection.query(sql, callback);
}

database.execute = (sql, values, callback) => {
    database.connection.execute(sql, values, callback);
}

export { database };