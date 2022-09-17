const express = require('express');
const cors = require('cors');

const tareasRoute = require('./routes/tareas');
const userRoute = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());


// app.use(function (req, res, next) {
//     console.log('Hora:', Date.now());
//     debugger;
//     next();
//   });
  

app.use('/users', userRoute)
app.use('/tareas', tareasRoute)


app.listen(3000, function () {
    console.log('App corriendo en el puerto 3000');
});