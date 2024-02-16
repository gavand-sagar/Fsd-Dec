import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Welcome To My Blog</h1>

      <Link to={"/login"}>
        <Button className="" variant="contained">Login</Button>
      </Link>
      <br/>
      <Link to={"/home"}>
        <Button variant="contained">Home</Button>
      </Link>
      <Link to={"/about"}>
        <Button variant="contained">About</Button>
      </Link>
      <Link to={"/privacy"}>
        <Button variant="contained">Privacy</Button>
      </Link>
      <Link to={"/gallery"}>
        <Button variant="contained">Gallery</Button>
      </Link>
      <Link to={"/forms"}>
        <Button variant="contained">Forms</Button>
      </Link>
      <Link to={"/formsP"}>
        <Button variant="contained">FormsPractice</Button>
      </Link>
      <Link to={"/multiplyOutputs"}>
        <Button variant="contained">MultiplyOutputs</Button>
      </Link>
      <Link to={"/multipleInputs"}>
        <Button variant="contained">MultipleInputs</Button>
      </Link>
      <Link to={"/calcSquare"}>
        <Button variant="contained">CalcSquare</Button>
      </Link>
      <Link to={"/tempConv"}>
        <Button variant="contained">TempConv</Button>
      </Link>
      <Link to={"/calcInterest"}>
        <Button variant="contained">CalcInterest</Button>
      </Link>
      <hr />
    </div>
  );
}
