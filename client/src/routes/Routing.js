import {BrowserRoutes, Routes, Route} from "react-router-dom";

import AdminLogin from "../screens/auth/AdminLogin";

const Routing = () => {
  return(
    <BrowserRoutes>
    <Routes>
        <Route path="auth">
            <Route path="admin-login" element={<AdminLogin/>}/>
        </Route>
    </Routes>
    </BrowserRoutes>
  )
}

export default Routing;