const { pool } = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const claveJWT = process.env.claveJWT;

const postLogin = async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body, {
    email: !email,
    password: !password
  });
  if (!email || !password) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
    return;
  }

  try {
    let sql = 'Select password from user where email = ?';
    let [usuarioRequerido] = await pool.query(sql, [email]);

    if (usuarioRequerido.length === 0) {
      res.status(400).json({ ok: false, message: 'Usuario no existe' });
      return;
    }

    let passwordHaseado = usuarioRequerido[0].password;
    console.log('linea 23 de la ruta login JWT Secret:', claveJWT);
    const isMatch = await bcrypt.compare(password, passwordHaseado);
    if (!isMatch) {
      return res.status(400).json({ ok: false, message: 'Contraseña incorrecta' });
    }

    let datosUsuario = 'SELECT id_user, name, last_name, email, photo FROM user WHERE email = ?';
    let [result] = await pool.query(datosUsuario, [email]);
    let id = result[0].id_user;
    let user = result[0];


    let token = jwt.sign({ id, email }, claveJWT, { expiresIn: '1h' });

    req.session.id_user = user.id_user;
    req.session.email = user.email;
    req.session.name = user.name;
    req.session.last_name = user.last_name;
    req.session.photo = user.photo;

    res.cookie('autentificacion', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 60 * 60 * 1000
    });

    return res.status(200).json({ ok: true, message: 'Éxito!!', data: result });
  } catch (error) {
    console.log('Error en el login:', error);
    return res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { postLogin };