import React, { useState } from "react";
import Transactions from "./Transactions";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, setEditUserName } from "../actions/profile.action";
import { Navigate } from "react-router-dom";

const ContainerTransaction = () => {
  const user = useSelector((state) => state.postReducer);
  const [EditToggle, setEditToggle] = useState(false);
  const [EditUserName, setEditUser] = useState(user.userName);
  const dispatch = useDispatch();

  console.log(user);
  if (!user.token) {
    return <Navigate to="/login" />;
  }

  const handleEditUserName = (e) => {
    e.preventDefault();
    const token = user.token;
    const postData = {
      userName: EditUserName,
    };
    const response = dispatch(editProfile(postData, token));
    console.log(response); // Affichez la réponse de la requête PUT réussie
    setEditToggle(false);
  };

  return (
    <section className="view-bank">
      <div className="bg-form">
        {EditToggle ? null : (
          <>
            <h3>
              Welcome back <br></br> {user.lastName} {user.firstName}
            </h3>
            <button
              className="edit-button"
              onClick={() => setEditToggle(!EditToggle)}
            >
              Edit UserName
            </button>
          </>
        )}
        {EditToggle ? (
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
              <button className="edit-button">Save</button>
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
