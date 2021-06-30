import React from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

const Password = ({ loggedIn, setLogin, users, setUsers, name, setName }) => {
  const onSub = (pass) => {
    console.log(pass);
    const input = document.getElementById("pass-input");
    if (parseInt(input.value) === pass) setLogin(true);
    else alert("Wrong password");
  };
  const checkUser = () => {
    let newUser;
    users.map((user) => {
      if (user.name === name) newUser = user;
    });
    if (!newUser) {
      setUsers([...users, { name: name, password: 1234 }]);
      onSub(users[users.length - 1].password);
    } else onSub(newUser.password);
  };
  return (
    <div className="pass">
      <h3 className="pass-label"> Please insert auth password below:</h3>
      <Input placeholder="" id="pass-input" className="pass-input" />
      <Button
        icon="play"
        content="GO"
        className="login-btn"
        inverted
        onClick={() => checkUser()}
      />
    </div>
  );
};

export default Password;
