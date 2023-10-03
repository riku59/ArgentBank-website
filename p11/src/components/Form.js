import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <div className="bg-form">
      <div className="form">
        <div className="form-header">
          <FontAwesomeIcon className="icon-form" icon={faUserCircle} />
          <h1 className="form-title">Sign In</h1>
        </div>
        <div className="form-body">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <div className="remember">
            <input type="checkbox" id="remember" name="remember" />
            <label className="remember-text" htmlFor="remember">
              Remember me
            </label>
          </div>
          <div className="form-footer">
            <button type="submit">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
