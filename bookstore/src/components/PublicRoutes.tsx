import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

import { Route } from "react-router-dom"

function PublicRoutes() {

  const user = null

  return <>

    { !user && <Route path="/login" element={<LoginPage />} />}
    { !user && <Route path="/register" element={< RegisterPage />} />}

  </>
}

export default PublicRoutes