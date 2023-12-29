import { Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forgot_Password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
