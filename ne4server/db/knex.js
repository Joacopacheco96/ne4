const knex = require("knex")({
    client:'pg',
    connection: {
        host: '127.0.0.1',
        port:'5432',
        user:'postgres',
        password:'4884',
        database:'postgres'
    }
});
module.exports=knex;