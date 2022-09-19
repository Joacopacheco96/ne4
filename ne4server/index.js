const express = require('express');
const cors = require('cors');

const figuritas = require('./controllers/figuritas.js');
const users = require('./controllers/users.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', users);
app.use('/figuritas', figuritas);


app.listen(3001, function () {
    console.log('App corriendo en el puerto 3001');
});