import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DescriptionTransaction from "./DescriptionTransaction";

const TransactionList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transactionList">
      <div className="legendTransaction">
        <p>Date</p>
        <p>Description</p>
        <p>Amount</p>
        <p>Balance</p>
      </div>
      <div className="infoAndLogo">
        <div className="infoTransaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
        </div>
        <FontAwesomeIcon onClick={handleClick} icon={faAngleDown} />
        <div className={`showDescription {isOpen ? "showtext" : ""}`}>
          {isOpen && <DescriptionTransaction />}
        </div>
      </div>
      <div className="infoAndLogo">
        <div className="infoTransaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
        </div>
        <FontAwesomeIcon onClick={handleClick} icon={faAngleDown} />
        <div className={`showDescription {isOpen ? "showtext" : ""}`}>
          {isOpen && <DescriptionTransaction />}
        </div>
      </div>
      <div className="infoAndLogo">
        <div className="infoTransaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
        </div>
        <FontAwesomeIcon onClick={handleClick} icon={faAngleDown} />
        <div className={`showDescription {isOpen ? "showtext" : ""}`}>
          {isOpen && <DescriptionTransaction />}
        </div>
      </div>
      <div className="infoAndLogo">
        <div className="infoTransaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
        </div>
        <FontAwesomeIcon onClick={handleClick} icon={faAngleDown} />
        <div className={`showDescription {isOpen ? "showtext" : ""}`}>
          {isOpen && <DescriptionTransaction />}
        </div>
      </div>
      <div className="infoAndLogo">
        <div className="infoTransaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298.00</p>
        </div>
        <FontAwesomeIcon onClick={handleClick} icon={faAngleDown} />
        <div className={`showDescription {isOpen ? "showtext" : ""}`}>
          {isOpen && <DescriptionTransaction />}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
