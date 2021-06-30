import React from "react";
import Control from "./Control";

const Footer = ({ loggedIn, setLogin, name, setName }) => {
  return (
    <div className="footer">
      <Control
        loggedIn={loggedIn}
        setLogin={setLogin}
        name={name}
        setName={setName}
      />
    </div>
  );
};

export default Footer;
