import { useState } from "react";
import About from "./About";
import "./App.css";
import Gallery from "./Gallery";
import Home from "./Home.js";
import Privacy from "./Privacy";

function App() {
  const [pageName, setPageName] = useState("home");

  return (
    <div>
      <button onClick={() => setPageName("home")}>Home</button>
      <button onClick={() => setPageName("about")}>About</button>
      <button onClick={() => setPageName("privacy")}>Privacy</button>
      <button onClick={() => setPageName("gallery")}>Gallery</button>
      <hr></hr>

      {pageName === "home" ? <Home /> : <></>}
      {pageName === "about" ? <About /> : <></>}
      {pageName === "privacy" ? <Privacy /> : <></>}
      {pageName === "gallery" ? <Gallery /> : <></>}
    </div>
  );
}

export default App;
