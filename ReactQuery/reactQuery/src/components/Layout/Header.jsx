import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'

function Header() {
  return (
    <header>
      <div className="navbar">
        <div>
          <NavLink to="/">ReactQuery</NavLink>
        </div>
        <div>
          <ul className="rightSideNav">
            <li>
              <NavLink className="linkStyle" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="linkStyle" to="/trad">FetchOld</NavLink>
            </li>
            <li>
              <NavLink className="linkStyle" to="/rq">FetchRQ</NavLink>
            </li>
            <li>
              <NavLink className="linkStyle"  to="/infinite">Infinite Scroll</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
