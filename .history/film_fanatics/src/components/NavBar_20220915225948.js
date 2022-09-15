import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink className = "navlink" exact to="/">Movies  </NavLink>
      <NavLink className = "navlink" to="/login">Login  </NavLink>
      <NavLink className = "navlink" to="/search">Search  </NavLink>
      <NavLink className = "navlink" to="/profile">Profile  </NavLink>
      <NavLink className="navlink"  to="/editmovie">EditMovie</NavLink>
      <N
    </nav>  
  </div>)
}

export default NavBar;
