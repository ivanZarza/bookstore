require('dotenv').config();
const jwt = require('jsonwebtoken');
const { pool } = require('../database');

const claveJWT = process.env.claveJWT

async function verificarToken(req, res, next) {
  const token = req.cookies.autentificacion;
  console.log(token);
  if (!token) {
        console.log('linea 12 middleware No hay token');
    return res.status(401).json({ ok: false, message: 'No hay token' });
  }
  try {
    const decoded = jwt.verify(token, claveJWT);
    const sql = 'SELECT * FROM user WHERE id_user = ?';
    const user = await pool.query(sql, [decoded.id]);
console.log('linea 18 middleware token', user[0][0]);
console.log('linea 19 middleware token', decoded);
console.log('linea 20 middleware token', decoded.id);

    if (user.length === 0) {
      res.clearCookie('autentificacion', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      });
            console.log('linea 26 middleware No existe el usuario');
      return res.status(401).json({ ok: false, message: 'Usuario del token no existe' });
    }

    if (user[0][0].email !== decoded.email) {
      res.clearCookie('autentificacion', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      });
      console.log('linea 33', user[0][0].email, decoded.email);
      return res.status(401).json({ ok: false, message: 'Verificacion del token negativa' });
    }

    req.user = user[0][0];
    console.log('linea 40 middleware token', req.user);
    next();

  } catch (error) {
    res.clearCookie('autentificacion', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    });
        console.log('linea 50 middleware token no valido');
    return res.status(401).json({ ok: false, message: 'Token no valido' });
  }
}

module.exports = verificarToken;