require('dotenv').config();
const jwt = require('jsonwebtoken');
const { pool } = require('../database');

const claveJWT = process.env.claveJWT

async function verificarToken(req, res, next) {
  const token = req.cookies.autentificacion;
  if (!token) {
    return res.status(401).json({ ok: false, message: 'No hay token' });
  }
  try {
    const decoded = jwt.verify(token, claveJWT);
    const sql = 'SELECT * FROM user WHERE id_user = ?';
    const user = await pool.query(sql, [decoded.id]);
    if (user.length === 0) {
      res.clearCookie('autentificacion', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      });
      return res.status(401).json({ ok: false, message: 'Usuario del token no existe' });
    }
    if (user[0][0].email !== decoded.email) {
      res.clearCookie('autentificacion', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      });
      return res.status(401).json({ ok: false, message: 'Verificacion del token negativa' });
    }
    req.user = user[0][0];
    next();
  } catch (error) {
    res.clearCookie('autentificacion', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    });
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ ok: false, message: 'Token expirado' });
    }
    return res.status(401).json({ ok: false, message: 'Token no valido' });
  }
}

module.exports = verificarToken;