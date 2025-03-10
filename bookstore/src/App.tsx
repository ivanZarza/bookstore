import styles from './App.module.css'
import Header from './components/Header'
import BooksPage from './pages/BooksPage'
import Footer from './components/Footer'


function App() {


  return (

    <>
      <main className={styles.main} >
        <Header />
        <BooksPage />
        <Footer />
      </main>
    </>
  )
}

export default App
