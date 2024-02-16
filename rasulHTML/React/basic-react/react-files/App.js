import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import AddFruit from "./AddFruit";
import "./App.css";
import MyDataContext from "./dataContext";
import FormsPractice from "./FormsPractice";
import Gallery from "./Gallery";
import Home from "./Home";
import Login from "./Login";
import MultipleInputs from "./MultipleInputs";
import PageNotFound from "./PageNotFound";
import Privacy from "./Privacy";
import Protected from "./Protected";
import ShowFruit from "./ShowFruit";

function App() {
  const [someValue, setSomeValue] = useState("Sagar");
  const [allFruits,setAllFruits] = useState([])

  return (
    <div>
      <MyDataContext.Provider
        value={{ someValue: someValue, setSomeValue: setSomeValue,allFruits:allFruits,setAllFruits:setAllFruits }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>

            <Route
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <Protected>
                  <About />
                </Protected>
              }
            ></Route>
            <Route
              path="/privacy"
              element={
                <Protected>
                  <Privacy />
                </Protected>
              }
            ></Route>
            <Route
              path="/gallery"
              element={
                <Protected>
                  <Gallery />
                </Protected>
              }
            ></Route>
            <Route path="/add-a-fruit" element={<AddFruit/>}></Route>
            <Route path='/show-fruits' element={<ShowFruit/>}></Route>
            <Route path="/form-practice" element={<FormsPractice />}></Route>
            <Route path="/MultipleInputs" element={<MultipleInputs />}></Route>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            ></Route>
            <Route path="/*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </MyDataContext.Provider>
    </div>
  );
}

export default App;
