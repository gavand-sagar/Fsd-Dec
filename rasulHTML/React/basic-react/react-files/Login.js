import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  const navigate = useNavigate()

    
  const [username,setUsername ] = useState('')
  const [password,setPassword ] = useState('')

  function doLogin(){
    if(username == "Sagar" && password == "123"){
        ///
        localStorage.setItem('status','true')
        localStorage.setItem('username',username)
        navigate('/home')
        ///

    }else{
      localStorage.setItem('status','false')
      localStorage.setItem('username','')
        alert('Invalid')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}></input>
      <input placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
      <button onClick={doLogin}>Login</button>
    </div>
  );
}
