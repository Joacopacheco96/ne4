const {Pool} = require("pg");

const config = { 
    host: '127.0.0.1',
    port:'5432',
    user:'postgres',
    password:'Estilosulo96',
    database:'proyectoNE4'
    };

const pool = new Pool(config)

module.exports = pool
