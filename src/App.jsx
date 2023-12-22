import { Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
