import React from "react";

const Informations = ({ image, title, text }) => {
  return (
    <div className="feature-item">
      <img src={image} alt={image} className="imgInfo" />
      <h3 className="feature-title"> {title}</h3>
      <p className="feature-text"> {text}</p>
    </div>
  );
};

export default Informations;
