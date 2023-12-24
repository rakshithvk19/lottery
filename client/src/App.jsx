import { Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
