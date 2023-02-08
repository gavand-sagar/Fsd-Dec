import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react"
import Header from "./Header";

export default function Forms() {
    const [inputType, setInputType] = useState('password');
    const [textBox, setTextBox] = useState('');
    const [category, setCategory] = useState();
    const [handleChange, setHandlechange] = useState('');

    function show() {
        setInputType("text")
    }
    return(
        <div>
            <Header />
            <div>
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={textBox} onChange={e=>setTextBox(e.target.value)} 
                    type={inputType}/>
                    <br/>
                    <br/>
                <TextField
                    minRows={5}
                    maxRows={5}
                    multiline={true}
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    value={textBox} onChange={e=>setTextBox(e.target.value)} 
                    type={inputType}/>
                    <br/>
                    <br/>
                <FormControl id="select-container">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                <br/>
                <Button id="add-button" variant="contained" onClick={show}>Add</Button>
            </div>
        </div>
    )
}