import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import SidebarNewPost from "./SidebarNewPost";

export default function CreateThought() {
  // const [authorTextBox, setAuthorTextBox] = useState("");
  const [titleTextBox, setTitleTextBox] = useState("");
  const [descriptionTextBox, setDescriptionTextBox] = useState("");
  const [categoryTextBox, setCategoryTextBox] = useState("");

  function addClick() {
    let data = {
      author: "Rasul",
      title: titleTextBox,
      description: descriptionTextBox,
      category: categoryTextBox,
    };

    //lets send this to server

    fetch("http://localhost:3001/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {});

    setCategoryTextBox("");
    setDescriptionTextBox("");
    setTitleTextBox("");
    alert("Post added!");
  }

  return (
    <div>
      <Header />
      <div className="bottom-container">
        <SidebarNewPost />
        <form>
          <div className="title-container">
            <TextField
              fullWidth
              className="input-box"
              id="filled-basic"
              variant="filled"
              label="Title"
              value={titleTextBox}
              onChange={(e) => setTitleTextBox(e.target.value)}
            />
          </div>
          <div className="description-container">
            <TextField
              fullWidth
              className="input-box"
              id="standard-multiline-flexible"
              multiline
              minRows={10}
              maxRows={10}
              label="Type in your thoughts in 200 words or less"
              variant="filled"
              value={descriptionTextBox}
              onChange={(e) => setDescriptionTextBox(e.target.value)}
            />
          </div>
          <div className="char-count-container">
            {descriptionTextBox.length} of 200 Characters
          </div>
          <div className="category-container">
            <InputLabel id="demo-simple-select-filled-label">
              Select a category
            </InputLabel>
            <Select
              fullWidth
              className="input-box"
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              label="Select a category"
              value={categoryTextBox}
              variant="filled"
              onChange={(e) => setCategoryTextBox(e.target.value)}
            >
              <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
              <MenuItem value={"React"}>React</MenuItem>
              <MenuItem value={"Node.js"}>Node.js</MenuItem>
              <MenuItem value={"React Router"}>React Router</MenuItem>
              <MenuItem value={"Redux"}>Redux</MenuItem>
              <MenuItem value={"GraphQL"}>GraphQL</MenuItem>
              <MenuItem value={"HTML5"}>HTML5</MenuItem>
              <MenuItem value={"CS3"}>CSS3</MenuItem>
              <MenuItem value={"Java"}>Java</MenuItem>
              <MenuItem value={"Python"}>Python</MenuItem>
              <MenuItem value={"Movies"}>Movies</MenuItem>
            </Select>
          </div>
          <Button id="button-add" variant="container" onClick={addClick}>
            + Add
          </Button>
        </form>
      </div>
    </div>
  );
}
