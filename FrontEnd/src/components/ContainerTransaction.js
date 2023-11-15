import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, setEditUserName } from "../actions/profile.action";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const ContainerTransaction = () => {
  const user = useSelector((state) => state.userReducer);
  const [editToggle, setEditToggle] = useState(false);
  const [editUserName, setEditUser] = useState(user.userName);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  useEffect(() => {
    const isUsernameModified = editUserName !== user.userName;

    setIsSaveButtonDisabled(!isUsernameModified); //si le nom est différent, active le bouton save
  }, [editUserName, user.userName, user.token]);
  if (!user.token) {
    redirect("/login");
  }
  const handleEditUserName = (e) => {
    e.preventDefault();

    const token = user.token;

    dispatch(editProfile(editUserName, token));
    console.log(`Nouveau nom :  ${editUserName}`);
    setShowSuccessMessage(true);
    setTimeout(() => {
      // affiche le message de succes de changement de nom pendant 3 s
      setShowSuccessMessage(false);
    }, 3000);

    setEditToggle(false); // enleve le formulaire en sauvegardant les donnée.
  };

  return (
    <section className="view-bank">
      <div className="bg-form">
        {editToggle ? null : (
          <>
            <h3>
              Welcome back <br></br> {user.lastName} {user.firstName}
            </h3>
            <button
              className="edit-button"
              onClick={() => setEditToggle(!editToggle)}
            >
              Edit UserName
            </button>
          </>
        )}
        {showSuccessMessage && (
          <div className="success-message">
            Le changement de nom a été effectué avec succès !
          </div>
        )}
        {editToggle ? (
          <form onSubmit={(e) => handleEditUserName(e)}>
            <h3>Edit User Info</h3>
            <div className="edit_form">
              <div className="label_input">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  autoFocus={true}
                  defaultValue={user.userName}
                  onChange={(e) => setEditUser(e.target.value)}
                />
              </div>
              <div className="label_input">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  defaultValue={user.firstName}
                  disabled="disable"
                />
              </div>
              <div className="label_input">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  defaultValue={user.lastName}
                  disabled="disable"
                />
              </div>
            </div>
            <div className="container-button">
              <button
                className={`${
                  isSaveButtonDisabled ? "disabled-button" : "edit-button"
                }`}
                disabled={isSaveButtonDisabled}
              >
                Save
              </button>
              <button
                className="edit-button"
                onClick={() => setEditToggle(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          ""
        )}

        <div className="box-transaction">
          <Transactions
            title="Argent Bank Checking (x8349)"
            money="$2,082.79"
            balance="Available Balance"
          />
          <Transactions
            title="Argent Bank Savings (x6712)"
            money="$10,928.42"
            balance="Available Balance"
          />
          <Transactions
            title="Argent Bank Credit Card (x8349)"
            money="184.30"
            balance="Current Balance"
          />
        </div>
      </div>
    </section>
  );
};

export default ContainerTransaction;
