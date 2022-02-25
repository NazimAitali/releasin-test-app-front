import React from "react";
import logo from "../../assets/logo.jpg";
import "./style.scss";
const TopBarre = () => {
  return (
    <div className="Top-barre">
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default TopBarre;
