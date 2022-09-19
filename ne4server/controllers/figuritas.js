const router = require("express").Router();
const knex =require('../db/knex');
const pool = require("../db/db.js");

router.get("/", (req, res, next) => {
knex
    .columns("id", "name", "category", "url", "have", "repeat")
    .select()
    .from("figuritas")
    .then((resultados) => {
      res.json(resultados);
      next();
    });
});

//where tengo==true
router.get("/tengo", (req, res, next) => {
  const r = knex
    .columns("id", "name", "category", "url", "have", "repeat")
    .select()
    .from("figuritas")
    .where("have", true)
    .then((resultados) => {
      res.json(resultados);
      next();
    });
});

//where tengo==false
router.get("/notengo", (req, res, next) => {
  const r = knex
    .columns("id", "name", "category", "url", "have", "repeat")
    .select()
    .from("figuritas")
    .where("have", false)
    .then((resultados) => {
      res.json(resultados).status(200);
      next();
    });
});

//where repetidas
router.get("/repetidas", (req, res, next) => {
  const r = knex
    .columns("id", "name", "category", "url", "have", "repeat")
    .select()
    .from("figuritas")
    .where("repeat", ">", 0)
    .then((resultados) => {
      res.json(resultados).status(200);
      next();
    });
});

// modificar have column
router.post('/repetidas',async (req,res,next) => {
  const figuritaToChange=req.body.figurita;
    const query=await pool.query('UPDATE figuritas SET "have"=NOT have WHERE id=$1',[figuritaToChange.id]);
    const updatedRows=query.rowCount;
    if (updatedRows==1){
    res.json({updated : "success"}).status(200);}
    else{res.json({updated : "ERROR"}).status(400);}
    next();
});

module.exports = router;
