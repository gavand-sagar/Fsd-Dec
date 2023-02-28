import React, { useEffect, useState } from "react";
import Header from "/Header.js";

export default function ThoughtsList() {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/thoughts`)
      .then((res) => res.json())
      .then((response) => {
        setThoughts(response);
      });
  }, []);

  return (
    <div>
      <Header />
      {thoughts.map((x) => (
        <fieldset>
          <h3>{x.title}</h3>
          <p>by {x.author}</p>
          <p>{x.description}</p>
        </fieldset>
      ))}
    </div>
  );
}
