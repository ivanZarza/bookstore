import styles from'./BooksPage.module.css'
import BookItem from '../components/BookItem'
function BooksPage() {
  return (
    <>
    <section className={styles.section}>
    <BookItem />
    </section>
    </>
  )
}

export default BooksPage

