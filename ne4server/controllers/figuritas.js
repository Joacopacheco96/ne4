const router = require('express').Router();

router.get('/', (req,res,next) => {    
    const r = knex
    .columns("id","nombre","categoria","url","tengo","repetida")
    .select()
    .from("figuritas")
    .then((resultados) =>{
        res.json(resultados)
        next();
    })
    });

module.exports=router;