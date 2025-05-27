const postLogout = async (req, res) => {
/*   req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ ok: false, message: 'Error al cerrar sesión' });
    } */

    res.clearCookie('autentificacion', {
      httpOnly: true,
      secure: true, 
      sameSite: 'none'
    });

/*     res.clearCookie('session_cookie', {
      httpOnly: true,
      secure: true, 
      sameSite: 'none'
    }); */
    return res.status(200).json({ ok: true, message: 'Sesión cerrada correctamente' });
  }

module.exports = { postLogout };