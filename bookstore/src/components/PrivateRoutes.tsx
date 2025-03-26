import ProfilePage from "../pages/ProfilePage";
import BooksPage from "../pages/BooksPage";
import AddBook from "../pages/AddBookPage";
import EditBook from "../pages/EditBookPage";

import { Route } from "react-router-dom";

function PrivateRoutes() {
  const user = "1"

  return <>

    {user && <Route path="/profile" element={<ProfilePage />} />}
    {user && <Route path="/bookPage" element={<BooksPage />} />}
    {user && <Route path="/addbook" element={<AddBook />} />}
    {user && <Route path="/editbook" element={<EditBook />} />}


  </>
}

export default PrivateRoutes;