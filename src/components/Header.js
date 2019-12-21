import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="nav-links">
          <Link to= "/" style={{ textDecoration: 'none', color: '#000000' }}> Home </Link> |
          <Link to= "/characters" style={{ textDecoration: 'none', color: '#000000' }}> Characters </Link>
        </div>
      </nav>
    </header>
  );
}
