import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import About from './pages/About' 
import BooksPage from './pages/BooksPage'
import { Routes, Route } from "react-router-dom";



function App() {


  return <>
  <div className='flex min-h-screen flex-col justify-between'>
    <Header  />
    <main className='grow '>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookPage" element={<BooksPage />} />
      </Routes>
    </main>
    <Footer />
    </div>
  </>
}

export default App
