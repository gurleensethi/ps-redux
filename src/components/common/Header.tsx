import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const Header: FunctionComponent = (props) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/courses">Courses</NavLink>
    </nav>
  );
};

export default Header;
