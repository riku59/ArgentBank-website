import React, { useState } from "react";
import TransactionList from "./TransactionList";

const Transactions = ({ title, money, balance }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transaction">
      <div className="container-Transaction">
        <p className="title">{title}</p>
        <h2 className="money">{money}</h2>
        <p className="balance">{balance}</p>
        {isOpen ? (
          <div className="close" onClick={handleClick}>
            ✕
          </div>
        ) : (
          <button className="btn-view" onClick={handleClick}>
            View transactions
          </button>
        )}
      </div>
      <div className={`showTransaction {isOpen ? "showtext" : ""}`}>
        {isOpen && <TransactionList />}
      </div>
    </div>
  );
};

export default Transactions;
