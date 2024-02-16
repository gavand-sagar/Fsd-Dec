import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validity, setValidity] = useState("");

  function login() {
    fetch(
      `http://localhost:3001/check-user?username=${username}&password=${password}`
    )
      .then((res) => res.json())
      .then((response) => {
        setValidity(response.status);
        if (validity == "Valid") {
          alert("Valid");
          navigate("/home");
        } else {
          alert("Invalid");
        }
      });
  }
  return (
    <div>
      <Header />
      <div className="bottom-container login-main-wrapper">
        <div className="login-wrapper">
          <h2>Sign In</h2>
          <TextField
            className="login-box"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <TextField
            className="login-box"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button className="login-button" variant="contained" onClick={login}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
