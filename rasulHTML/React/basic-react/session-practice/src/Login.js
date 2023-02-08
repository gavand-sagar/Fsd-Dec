import { TextField, Button } from "@mui/material";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Login() {

    const navigate = useNavigate()

    const [usernameBox, setUsernameBox] = useState('');
    const [passwordBox, setPasswordBox] = useState('');

    function login() {
        if (usernameBox == "admin" && passwordBox == "123"){
            localStorage.setItem('status', 'true')
            localStorage.setItem('user', usernameBox)
            navigate("/home")
        } else {
            localStorage.setItem('status', false)
            alert("Invalid User")
        }

    }
    return(

        <div className="login-main-wrapper">
            <div className="login-wrapper">
                <h2>Login</h2>
                <TextField className="input-box" id="outlined-basic" label="Username" variant="outlined" value={usernameBox} onChange={e=>setUsernameBox(e.target.value)} />
                <br/>
                <br/>
                <TextField className="input-box" id="outlined-basic" label="Password" variant="outlined" value={passwordBox} onChange={e=>setPasswordBox(e.target.value)} />
                <br/>
                <br/>
                <Button className="login-button" variant="contained" onClick={login}>Log in</Button>
            </div>
        </div>

    )
}