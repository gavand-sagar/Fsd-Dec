import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin.js";
import Home from "./Home.js";
import NewPost from "./NewPost.js";
import PageNotFound from "./PageNotFound.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
