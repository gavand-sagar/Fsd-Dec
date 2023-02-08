import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const[username,setUsername] = useState('')
  const navigate = useNavigate();

  useEffect(()=>{
    setUsername(localStorage.getItem('username'));

    if(localStorage.getItem('status') != 'true' ){
          // login
          navigate('/login')
          
     }
  },[])


  function logout(){
    localStorage.setItem('status','false')
    navigate('/login')
  }

  return (
    <div>
      <h1>Welcome To {username}'s Blog</h1>
      <Link to={"/home"}>
        <Button variant="contained"
        >Home
        </Button>
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
      <Link to={"/form-practice"}>
        <Button variant="contained">FormsPractice</Button>
      </Link>
      <Button variant="contained" onClick={logout}>Logout</Button>
      <hr />
    </div>
  );
}
