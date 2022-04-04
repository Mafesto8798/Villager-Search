import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container">
      <div className="clouds-container"></div>
      <nav>
        <Link className="nav-links" to="/home">
          <h1>Home</h1>
        </Link>
        <Link className="nav-links" to="/contact">
          <h1>Contact</h1>
        </Link>
      </nav>
    </div>
  );
}
