const {Pool} = require("pg");

const config = { 
    host: '127.0.0.1',
    port:'5432',
    user:'postgres',
    password:'4884',
    database:'postgres'
    };

const pool = new Pool(config)

module.exports = pool
