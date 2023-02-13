import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const companyName = useSelector((x) => x.counter.companyName);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  function logout() {
    localStorage.setItem("status", "false");
    navigate("/login");
  }

  return (
    <div>
      <h1>Welcome To {user}'s Website</h1>

      <Link className="link" to={"/login"}>
        <Button variant="contained">Login</Button>
      </Link>
      <Link className="link" to={"/login1"}>
        <Button variant="contained">Login1</Button>
      </Link>
      <Link className="link" to={"/login2"}>
        <Button variant="contained">Login2</Button>
      </Link>
      <Button className="link" onClick={logout} variant="contained">
        Logout
      </Button>
      <br />
      <br />
      <Link className="link" to={"/home"}>
        <Button variant="contained">Home</Button>
      </Link>
      <Link className="link" to={"/about"}>
        <Button variant="contained">About</Button>
      </Link>
      <Link className="link" to={"/privacy"}>
        <Button variant="contained">Privacy</Button>
      </Link>
      <Link className="link" to={"/gallery"}>
        <Button variant="contained">Gallery</Button>
      </Link>
      <Link className="link" to={"/forms"}>
        <Button variant="contained">Forms</Button>
      </Link>
      <br />
      <br />
      <Link className="link" to={"/add-a-fruit"}>
        <Button variant="contained">Add Fruit</Button>
      </Link>
      <Link className="link" to={"/show-fruits"}>
        <Button variant="contained">Show Fruits</Button>
      </Link>
      <br />
      <Link className="link" to={"/add-a-product"}>
        <Button variant="contained">Add Products</Button>
      </Link>
      <Link className="link" to={"/show-products"}>
        <Button variant="contained">Show Products</Button>
      </Link>
      <hr />
      {companyName}
      <hr />
    </div>
  );
}
