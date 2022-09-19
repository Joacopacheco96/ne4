const router = require("express").Router();
const pool = require("../db/db.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  TOKEN_SECRET,
  verifyToken,
} = require("../middlewares/jwt-verification");

//get*users token valid
router.get("/", verifyToken, async (req, res, next) => {
  const queryUsers = await pool.query("SELECT * FROM users");
  const users = queryUsers.rows;
  res.json({ error: null, data: users }).status(200);
  next();
});

//Register
router.post("/register", async (req, res) => {
  const newUser = req.body.user;
  const salt = await bcrypt.genSalt(10);
  const passwordCrypted = await bcrypt.hash(newUser.password, salt);
  const query =await pool.query("INSERT INTO users (name, mail, password) VALUES ($1, $2, $3)",[newUser.name,newUser.mail,passwordCrypted])
  if(query.rowCount==1){
  res.json({ error: null, data: "SUCCESSFUL REGISTER!", createdUser: newUser }).status(200);}
  else{res.json({ error: true, data: "UNSUCCESSFUL REGISTER!", createdUser: null }).status(500);}
});

//Login
router.post("/login",async (req, res) => {
  const User = req.body.user;
    const queryUser = await pool.query("SELECT * FROM users  WHERE mail = $1",[User.mail]);
    selectedUser=queryUser.rows[0];
    const validPassword = await bcrypt.compare(User.password, selectedUser.password);
    //const validPassword = true;
  if (validPassword == true) {
    // Crear el token
    const token = jwt.sign(
      {
        nombre: User.nombre,
        mail: User.mail,
      },
      TOKEN_SECRET
    );

    res
      .json({ error: null, data: "SUCCESSFUL LOGIN!", token })
      .status(200);
  } else {
    res
      .json({ error: "Usuario o password ivalido.", data: "UNSUCCESSFUL LOGIN!" })
      .status(200);
  }
});

router.get("/:id", (req, res) => {});

module.exports = router;
