import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyDataContext from "./dataContext";
import Login from "./Login.js";
import Login1 from "./Login1.js";
import Login2 from "./Login2.js";
import Home from "./Home.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Gallery from "./Gallery.js";
import Forms from "./Forms";
import PageNotFound from "./PageNotFound.js";
import { useState } from "react";
import AddFruit from "./AddFruit.js";
import ShowFruits from "./ShowFruits.js";
import AddProducts from "./AddProducts.js";
import ShowProducts from "./ShowProducts.js";
import Protected from "./Protected.js";

function App() {
  const [someValue, setSomeValue] = useState("");
  const [someFruit, setSomeFruit] = useState([]);

  return (
    <div>
      <MyDataContext.Provider
        value={{
          someValue: someValue,
          setSomeValue: setSomeValue,
          someFruit: someFruit,
          setSomeFruit: setSomeFruit,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login1" element={<Login1 />} />
            <Route path="/login2" element={<Login2 />} />
            <Route
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/about"
              element={
                <Protected>
                  <About />
                </Protected>
              }
            />
            <Route
              path="/privacy"
              element={
                <Protected>
                  <Privacy />
                </Protected>
              }
            />
            <Route
              path="/gallery"
              element={
                <Protected>
                  <Gallery />
                </Protected>
              }
            />
            <Route path="/forms" element={<Forms />} />
            <Route path="/add-a-fruit" element={<AddFruit />} />
            <Route path="/show-fruits" element={<ShowFruits />} />
            <Route path="/add-a-product" element={<AddProducts />} />
            <Route path="/show-products" element={<ShowProducts />} />
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </MyDataContext.Provider>
    </div>
  );
}

export default App;
