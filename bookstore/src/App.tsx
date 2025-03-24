import Header from './components/Header'
import BooksPage from './pages/BookPage'
import Footer from './components/Footer'


function App() {


  return <>
    <Header  />
    <main className='grow '>
      <BooksPage />
    </main>
    <Footer />
  </>
}

export default App
