import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;