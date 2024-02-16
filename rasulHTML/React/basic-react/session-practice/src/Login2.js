import { TextField, Button, FormControl, InputLabel, Input, InputAdornment, IconButton, Avatar } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';

export default function Login() {

    const navigate = useNavigate()

    const [emailBox, setEmailBox] = useState('');
    const [passwordBox, setPasswordBox] = useState('');

    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();}

    function login() {
        if (emailBox == "admin@123.com" && passwordBox == "123"){
            navigate("/Home")
        } else {
            alert("Invalid User")
        }

    }


    return(

        <div className="login2-main-wrapper">
            <div className="login2-wrapper">
                <div className="login2-wrapper1">
                    <h1>Welcome</h1>
                    <div className="avatar">
                    <Avatar id="avatar" variant="square" src="./A-avatar.png"/>
                    </div>
                    <TextField className="input1-box" id="standard-basic" label="Email" variant="standard" value={emailBox} onChange={e=>setEmailBox(e.target.value)} />
                    <br/>
                    <br/>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            value={passwordBox} 
                            onChange={e=>setPasswordBox(e.target.value)}
                            className="input1-box"
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <Button id="login2-button" variant="contained" onClick={login}>create</Button>
                    <br/>
                    <br/>
                    <span className="login2-text">Don't have an account? </span> <Link className="login2-signup" to={"/login"}> Sign Up</Link>
                </div>
            </div>
        </div>

    )
}