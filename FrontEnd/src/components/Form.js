import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "../actions/auth.action";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <FontAwesomeIcon className="icon-form" icon={faUserCircle} />
          <h1 className="form-title">Sign In</h1>
        </div>
        <div className="form-body">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div>{formData.email}</div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
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
      </form>
    </div>
  );
};

export default Form;
