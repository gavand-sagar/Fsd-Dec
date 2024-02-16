import { TextField, Button } from "@mui/material";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

    const navigate = useNavigate()

    const [usernameBox, setUsernameBox] = useState('');
    const [passwordBox, setPasswordBox] = useState('');
    const [emailBox, setEmailBox] = useState('');

    function login() {
        if (usernameBox == "admin" && passwordBox == "123"){
            navigate("/Home")
        } else {
            alert("Invalid User")
        }

    }
    return(

        <div className="login1-main-wrapper">
            <div className="login1-wrapper">
                <div className="login1-wrapper1">
                    <TextField className="input1-box" id="filled-basic" label="name" variant="filled" value={usernameBox} onChange={e=>setUsernameBox(e.target.value)} />
                    <br/>
                    <br/>
                    <TextField type="password" className="input1-box" id="filled-basic" label="password" variant="filled" value={passwordBox} onChange={e=>setPasswordBox(e.target.value)} />
                    <br/>
                    <br/>
                    <TextField className="input1-box" id="filled-basic" label="email address" variant="filled" value={emailBox} onChange={e=>setEmailBox(e.target.value)} />
                    <br/>
                    <br/>
                    <Button id="login1-button" variant="contained" onClick={login}>create</Button>
                    <br/>
                    <br/>
                    <span className="login1-text">Already registered?</span> <Link className="login1-signin" to={"/login"}>Sign In</Link>
                </div>
            </div>
        </div>

    )
}