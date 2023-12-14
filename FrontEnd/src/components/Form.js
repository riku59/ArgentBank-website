import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { setToken, signIn } from "../actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile, setDataUser } from "../actions/profile.action";

const Form = () => {
  const navigate = useNavigate();
  const [errorLog, setErrorLog] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

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
      const token = response.token;

      dispatch(setToken(token));
      navigate("/User");

      const userProfile = await getUserProfile(token); // données de profil de l'utilisateur
      const { firstName, lastName, userName } = userProfile;

      localStorage.setItem("token", token);
      dispatch(setDataUser(firstName, lastName, userName));
    } catch (error) {
      console.log(error);
      setErrorLog("E-mail ou mot de passe incorrect");
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
          <label htmlFor="username">Adresse e-mail</label>
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
            {errorLog && <div className="error-message">{errorLog}</div>}
            <button type="submit">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
