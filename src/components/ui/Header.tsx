import React from "react";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="center">
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
