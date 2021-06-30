import React from "react";
import Margin from "./Margin";
import Clock from "react-clock";
import { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";

const Header = ({ name, loggedIn, setLogin }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1 className="greeting">{`${
        value.getHours() <= 12
          ? " Good morning"
          : value.getHours() >= 19
          ? " Good evening"
          : " Good after-noon"
      } ${name}!`}</h1>
      <h3 className="greeting">
        <br />
        <Margin margin={"5"} />
      </h3>{" "}
      <Clock value={value} className="clock" size={250} renderNumbers={true} />{" "}
    </div>
  );
};

export default Header;
