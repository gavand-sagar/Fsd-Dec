import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Gallery from "./Gallery.js";
import PageNotFound from "./PageNotFound.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
