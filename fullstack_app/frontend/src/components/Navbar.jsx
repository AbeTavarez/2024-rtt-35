import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>Project Manager</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}
