import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AccessControl from "./AccessControl";

export default function Header() {
  return (
    <div className="top-container">
      <div className="navbar">
        <h1>TinyThoughts</h1>

        <div>
          <Link to={"/home"} className="link">
            <Button variant="container">Home</Button>
          </Link>
          <Link to={"/newpost"} className="link">
            <Button variant="container">New Post</Button>
          </Link>
        </div>

        <AccessControl />
      </div>
    </div>
  );
}
