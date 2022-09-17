//imports
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
//Knex auth (cambiar a dotenv)
const knex = require("knex")({
    client:'pg',
    connection: {
        host: '127.0.0.1',
        port:'5432',
        user:'postgres',
        password:'Estilosulo96',
        database:'proyectoNE4'
    }
});

//GET KNEX
app.get('/', (req,res,next) => {    
const r = knex
.columns("id","nombre","categoria","url","tengo","repetida")
.select()
.from("figuritas")
.then((resultados) =>{
    res.json(resultados)
    next();
})
});

//where tengo==true
app.get('/tengo', (req,res,next) => {    
    const r = knex
    .columns("id","nombre","categoria","url","tengo","repetida")
    .select()
    .from("figuritas")
    .where("tengo",true)
    .then((resultados) =>{
        res.json(resultados)
        next();
    })
        
    });

//where tengo==false
app.get('/notengo', (req,res,next) => {    
    const r = knex
    .columns("id","nombre","categoria","url","tengo","repetida")
    .select()
    .from("figuritas")
    .where("tengo",false)
    .then((resultados) =>{
        res.json(resultados)
        next();
    })
});

//where repetidas
app.get('/repetidas', (req,res,next) => {    
    const r = knex
    .columns("id","nombre","categoria","url","tengo","repetida")
    .select()
    .from("figuritas")
    .where("repetida",">", 0)
    .then((resultados) =>{
        res.json(resultados)
        next();
    })
});
//modificar conseguidas==true
// app.patch('/repetidas/:id', (req,res,next) => {    
//     const r = knex
//     .update()
//     .columns("id","nombre","categoria","url","tengo","repetida")
//     .from("figuritas")
//     .where("id", req.params.id)
//     .then((resultados) =>{
//         res.json(resultados)
//         next();
//     })
// });

//listen
app.listen(3001, function(){
    console.log('Listening at port 3001')
});