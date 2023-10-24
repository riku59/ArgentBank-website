import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footers from "../components/Footers";
import ContainerTransaction from "../components/ContainerTransaction";

const User = () => {
  return (
    <div>
      <NavBar />
      <ContainerTransaction />

      <Footers />
    </div>
  );
};

export default User;
