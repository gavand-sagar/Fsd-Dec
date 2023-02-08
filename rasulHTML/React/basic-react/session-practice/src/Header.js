import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  const [user,setUser] = useState('')

  useEffect(()=>{
    
    if(localStorage.getItem('status') != 'true'){
      navigate('/login')
    }else {
      setUser(localStorage.getItem('user'))
    }

  },[])

  function logout() {
    localStorage.setItem('status', 'false')
    navigate('/login')
  }
  
  return (
    <div>
      <h1>Welcome To {user}</h1>

      <Link to={"/login"}>
        <Button variant="contained">Login</Button>
      </Link>
      <Link to={"/login1"}>
        <Button variant="contained">Login1</Button>
      </Link>
      <Link to={"/login2"}>
        <Button variant="contained">Login2</Button>
      </Link>
      <Button onClick={logout} variant="contained">Logout</Button>
      <br/>
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
      <hr />
    </div>
  );
}
