import styles from './BookItem.module.css'

function BookItem() {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.titulo}>El Hobbit</h1>
        <img src="https://m.media-amazon.com/images/I/914VEoNzIPL._SL1500_.jpg" alt="Portada del libro El Hobbit" className={styles.imagen} />
        <div className={styles.primeraLinea}>
          <h4>J.R.R. Tolkien</h4>
          <p  className={styles.estilo}>Ciencia Ficción</p>
        </div>
          <div className={styles.segundaLinea}>
          <p>19.90€</p>
            <div className={styles.botones}>
            <button className={styles.btn}>Edit</button>
            <button className={styles.btn}>Elim</button>
            </div>
          </div>
      </section>
    </>
  );
}

export default BookItem;