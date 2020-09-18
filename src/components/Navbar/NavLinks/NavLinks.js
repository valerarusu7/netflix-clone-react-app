import React from 'react'
import { Route } from 'react-router-dom';
import NavLink from './NavLink/NavLink';
import "./NavLinks.css"

function NavLinks() {
    return (
      <ul className="nav__links">
        <NavLink link="/home" active>
          Home
        </NavLink>
        <NavLink link="/series">Series</NavLink>
        <NavLink>Films</NavLink>
        <NavLink>Latest</NavLink>
        <NavLink>My List</NavLink>
        </ul>
    );
}

export default NavLinks
