import React from 'react'
import { Link } from 'react-router-dom';
import "./NavLink.css"

function NavLink({link, active, children}) {
    return (
      <li className="nav__link">
        <Link to={link} className={active ? "active" : null}>
          {children}
        </Link>
      </li>
    );
}

export default NavLink
