import { Routes, Route, NavLink } from "react-router-dom";
import About from "../pages/About"
import BooksPage from "../pages/BooksPage";


function HomePage() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookPage" element={<BooksPage />} />
      </Routes>
    </div>
  );
}

export default HomePage;