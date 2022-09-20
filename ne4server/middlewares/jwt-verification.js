const jwt = require('jsonwebtoken')
const TOKEN_SECRET = 'estoesunsecreto'

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token') 

    if (!token) {
        return res.status(401).json({succes:false, error: 'Acceso denegado' })
    }

    try {
        const verified = jwt.verify(token, TOKEN_SECRET)
        req.user = verified
        req.mail = verified.mail
        next(); // continuamos
      } catch (error) {
        res.status(400).json({succes:false, error: 'El Token no es válido'})
      }

}

module.exports = {
    verifyToken,
    TOKEN_SECRET
  };