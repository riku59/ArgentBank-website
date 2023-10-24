import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/profile.action";

const NavBar = () => {
  const user = useSelector((state) => state.postReducer);

  const token = user.token;
  const dispatch = useDispatch();
  const navigateToHome = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigateToHome("/");
  };

  return (
    <div className="navigation">
      <NavLink to="/">
        <img src="./argentBankLogo.png" alt="" />
      </NavLink>
      <div className="login">
        <FontAwesomeIcon icon={faUserCircle} />
        {token ? (
          <div className="whenLogin">
            <div> {user.userName}</div>
            <div className="div_signOut">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <button className="logOut" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <NavLink to="/login">Sign In</NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
