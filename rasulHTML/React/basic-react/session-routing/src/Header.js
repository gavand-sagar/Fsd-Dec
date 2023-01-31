import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1>Welcome To My Blog</h1>

      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <Link to={"/about"}>
        <button>About</button>
      </Link>
      <Link to={"/Privacy"}>
        <button>Privacy</button>
      </Link>
      <Link to={"/Gallery"}>
        <button>Gallery</button>
      </Link>

      <hr />
    </div>
  );
}
