import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <img src="./argentBankLogo.png" alt="" />
      </NavLink>
      <div className="login">
        <FontAwesomeIcon icon={faUserCircle} />
        <NavLink to="/login">Sign In</NavLink>
      </div>
    </div>
  );
};

export default NavBar;