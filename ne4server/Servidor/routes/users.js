const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, verifyToken } = require('../middlewares/jwt-verification');

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoibWFpbEBtYWlsLmNvbSIsImlhdCI6MTY2MzI4NTE4OX0.h1EIDWmay0Fsb8S2RKhVSEDXSwp9jfLEE9_nQXUJ6jQ

const users = [
    {
        nombre: "gilberto",
        apellido: "gil",
        mail: "mail2@mail.com",
        password: "$2b$10$6qGhGOv3gyP97pJGay1/UuaSRj/d3JWmPQB58eXGuuSBbzKrrbEBC"
    }, 
    {
        nombre: "ramon",
        apellido: "rodriguez",
        mail: "mail34@mail.com",
        passwor: "$2b$10$di939M6zsTtNL5YRy2ecxO9H8L55AmYKWTHr6FhOuJ.IqvCTpfLs2"
    },
    {
        nombre: "tadeo",
        apellido: "gil",
        mail: "mail4234@mail.com",
        password: "$2b$10$q2c1RNmfhc0M030vmXZm1.t.wgnwDIj4QN1mfCLguT77mpSkMZIKC"
    }
]



// router.use(function (req, res, next) {
//     console.log('Hora:', Date.now());
//     debugger;
//     next();
//   });
  

router.get('/',verifyToken , (req, res, next ) => {
    console.log(req.user)
    res.json({ error: null, data: users, user: req.user }).status(200);

});


router.get('/:id', (req, res) => {

})


//Register
router.post('/register', async (req, res) => {
    const newUser = req.body.user;
    console.log(newUser);

    const salt = await bcrypt.genSalt(10);
    console.log('Salt', salt);
    const password = await bcrypt.hash(newUser.password, salt);
    console.log(newUser.password, password);
    res.json({ error: null, data: 'SUCCESSFUL REGISTER!'}).status(200);

})

//Login
router.post('/login', async (req, res) => {
    const User = req.body.user;

    //validacion a mi db de si existe este user (por mail)
    //is pasa: buscar la contraseña guardada y compararla con la contraseña encriptada del usuario

    const validPassword = await bcrypt.compare(User.password, '$2b$10$6qGhGOv3gyP97pJGay1/UuaSRj/d3JWmPQB58eXGuuSBbzKrrbEBC');
  

    if(validPassword == true){
        
        
        // Crear el token 
        const token = jwt.sign({
            nombre: User.nombre,
            mail: User.mail
        }, TOKEN_SECRET);
        

        
        res.json({ error: null, data: 'SUCCESSFUL LOGIN!',User ,token}).status(200);

    } else {
        res.json({ error: 'La contraseña está mal.', data: 'UNSUCCESSFUL LOGIN!'}).status(200);

    }


})



router.put('/:id', (req, res) => {
  
})



module.exports = router;