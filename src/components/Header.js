import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="nav-links">
          <Link to="/">Home </Link>
          <Link to="/characters">Characters </Link>
        </div>
      </nav>
    </header>
  );
}
