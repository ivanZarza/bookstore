const { pool } = require('../database');


const getbooks = async (req, res) => {
  let { id_book } = req.query;
  let id_user = req.user.id_user;
  console.log('id_user', id_user, 'id_book', id_book);
  try {
    let sql, result;
    if (id_user == null) {
      return res.status(401).json({ ok: false, message: 'Inicia sesion' });
    }

    if (id_user && id_book) {
      sql = 'SELECT * FROM book WHERE id_book = ? AND id_user = ?';
      [result] = await pool.query(sql, [id_book, id_user]);
      if (result.length === 0) {
        return res.status(404).json({ ok: false, message: 'No se encontro el libro' });
      }
      return res.status(200).json({ ok: true, message: 'Exito!!', data: result });
    }

    if (id_user && !id_book) {
      sql = 'SELECT * FROM book WHERE id_user = ?';
      [result] = await pool.query(sql, [id_user]);
      return res.status(200).json({ ok: true, message: 'Exito!!', data: result });
    }

    // Si solo hay id_book pero no id_user (caso raro porque usas auth)
    if (id_book && !id_user) {
      sql = 'SELECT * FROM book WHERE id_book = ?';
      [result] = await pool.query(sql, [id_book]);
      return res.status(200).json({ ok: true, message: 'Exito!!', data: result });
    }

    // Si no hay parámetros válidos
    return res.status(400).json({ ok: false, message: 'Parámetros insuficientes' });

  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const postbooks = async (req, res) => {
  console.log(req.body);
  let { id_user, title, type, author, price, photo } = req.body.book;
  console.log('id_user', id_user
              ,'title', title
              ,'type', type
              ,'author', author
              ,'price', price
              ,'photo', photo
  );
  if (!id_user || !title || !type || !author || !price || !photo) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
    return;
  }


  try {
    let sql = 'INSERT INTO book (id_user, title, type, author, price, photo) VALUES (?, ?, ?, ?, ?, ?)';
    let [result] = await pool.query(sql, [id_user, title, type, author, price, photo]);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

const putbooks = async (req, res) => {
  console.log(req.body);
  let {
    id_book,
    id_user,
    title,
    type,
    author,
    price,
    photo
  } = req.body.book;

  if (!id_book || !id_user) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
    return; 
  }

  try {
    let sql = 'UPDATE book SET title = ?, type = ?, author = ?, price = ?, photo = ? WHERE id_book = ? AND id_user = ?';
    let [result] = await pool.query(sql, [title, type, author, price, photo, id_book, id_user]);

    res.status(200).json({ ok: true, message: 'Libro actualizado con éxito', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

const deletebooks = async (req, res) => {
  const { id_book, id_user } = req.body;
  if (!id_book || !id_user) {
    res.status(400).json({ ok: false, message: 'Faltan datos' });
  }
  try {
    let sql = 'DELETE FROM book WHERE id_book = ? AND id_user = ?';
    let [result] = await pool.query(sql, [id_book, id_user]);
    res.status(200).json({ ok: true, message: 'Exito!!', data: result });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getbooks, postbooks, putbooks, deletebooks };