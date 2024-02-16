import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function AccessControl() {
  return (
    <div className="signin-container">
      <Link to={"/signin"} className="link">
        <Button variant="container">Signin</Button>
      </Link>
      <Button variant="container">Signout</Button>
    </div>
  );
}
