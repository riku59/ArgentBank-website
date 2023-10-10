import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footers from "../components/Footers";

const NoPage = () => {
  return (
    <div className="error">
      <NavBar />

      <h2>404</h2>
      <div className="bg-error">
        <h3>Désolé, page introuvable</h3>
        <h4>La page que vous avez demandée est introuvable.</h4>

        <button>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </button>
      </div>
      <Footers />
    </div>
  );
};

export default NoPage;
