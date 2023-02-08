import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login.js";
import Login1 from "./Login1.js";
import Login2 from "./Login2.js";
import Home from "./Home.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Gallery from "./Gallery.js";
import Forms from "./Forms";
import PageNotFound from "./PageNotFound.js";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  