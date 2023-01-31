import "./App.css";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button className="black-button" onClick={() => setActive(true)}>
        Home {active}
      </button>
      <button className="black-button" onClick={() => setActive(true)}>
        New Post {active}
      </button>
    </div>
  );
}
