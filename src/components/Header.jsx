import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header id="header">
      <h2 class="ui block header" id="site-name">
        <Link to="/home">Gahee Choi's Portfolio</Link>
      </h2>
    </header>
  );
}