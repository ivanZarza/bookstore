const { pool } = require('../database');

const postLogout = async (req, res) => {
  res.clearCookie('autentificacion', {
    httpOnly: true,
    secure: false, // Cambia a true si estás usando HTTPS
    sameSite: 'lax'
  });
  console.log('linea 13 logout', req.cookies.autentificacion);
  return res.status(200).json({ ok: true, message: 'Sesión cerrada correctamente' });
};

module.exports = { postLogout };