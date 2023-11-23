import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Informations from "../components/Informations";
import Footers from "../components/Footers";

const Home = () => {
  return (
    <div className="page">
      <NavBar />
      <Header />
      <div className="informations">
        <Informations
          image="./icon-chat.webp"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Informations
          image="./icon-money.webp"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Informations
          image="./icon-security.webp"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
      <Footers />
    </div>
  );
};

export default Home;
