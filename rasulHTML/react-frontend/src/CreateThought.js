import React, { useState } from "react";

export default function CreateThought() {
  const [titleTextBox, setTitleTextBox] = useState();
  const [descriptionTextBox, setDescriptionTextBox] = useState();
  const [categoryTextBox, setCategoryTextBox] = useState();

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
  }

  return (
    <div>
      <fieldset>
        <legend>Share your thought</legend>
        <div>
          <input
            placeholder="Title"
            value={titleTextBox}
            onChange={(e) => setTitleTextBox(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Description"
            value={descriptionTextBox}
            onChange={(e) => setDescriptionTextBox(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Category"
            value={categoryTextBox}
            onChange={(e) => setCategoryTextBox(e.target.value)}
          />
        </div>
        <button onClick={addClick}>Add</button>
      </fieldset>
    </div>
  );
}
