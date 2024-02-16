import { useEffect, useState } from "react";
import Header from "./Header";
import SidebarHome from "./SidebarHome";

export default function Home() {
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
      <div className="bottom-container">
        <SidebarHome />
        <div className="blogpost">
          {thoughts.map((x) => (
            <div className="post-container">
              <h2>{x.title}</h2>
              <p className="stamp">
                by <span className="name">{x.author}</span> |{" "}
                <span className="name">{x.category}</span> |
              </p>
              <p className="post">{x.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
