import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login.js";
import Home from "./Home.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Gallery from "./Gallery.js";
import FormsPractice from "./FormsPractice.js";
import MultiplyOutputs from "./MultiplyOutputs.js";
import CalcSquare from "./CalcSquare.js";
import PageNotFound from "./PageNotFound.js";
import TempConv from "./TempConv.js";
import MultipleInputs from "./MultipleInputs.js";
import CalcInterest from "./CalcInterest.js";
import Forms from "./Forms";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/formsP" element={<FormsPractice />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/multiplyOutputs" element={<MultiplyOutputs />} />
          <Route path="/multipleInputs" element={<MultipleInputs />} />
          <Route path="/calcSquare" element={<CalcSquare />} />
          <Route path="/tempConv" element={<TempConv />} />
          <Route path="/calcInterest" element={<CalcInterest />} />
          <Route path="/" element={<Login/>} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  