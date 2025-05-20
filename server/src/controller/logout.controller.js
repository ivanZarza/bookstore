const { pool } = require('../database');
/* const jwt = require('jsonwebtoken'); */
const bcrypt = require('bcrypt');

/* const claveJWT = process.env.claveJWT */

const postLogout = async (req, res) => {
  // Elimina la cookie del token
  res.clearCookie('autentificacion', {
    httpOnly: true,
    secure: false, // Cambia a true si estás usando HTTPS
    sameSite: 'lax'
  });
  return res.status(200).json({ ok: true, message: 'Sesión cerrada correctamente' });
};

module.exports = { postLogout };