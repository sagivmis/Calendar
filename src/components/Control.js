import React from "react";
import { Button } from "semantic-ui-react";
import { useLocation } from "react-router-dom";

import { useHistory } from "react-router-dom";
import UserMenu from "./UserMenu";

// const modalCreate = () => {
//   return (
//     <Modal
//       basic
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       size="small"
//       trigger={<Button>Basic Modal</Button>}
//     >
//       <Header icon>
//         <Icon name="archive" />
//         Archive Old Messages
//       </Header>
//       <Modal.Content>
//         <p>Are you sure you want to log out?</p>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button
//           basic
//           color="red"
//           inverted
//           onClick={() => {
//             setOpen(false);
//           }}
//         >
//           <Icon name="remove" /> No
//         </Button>
//         <Button
//           color="green"
//           inverted
//           onClick={() => {
//             setOpen(false);
//             setName();
//           }}
//         >
//           <Icon name="checkmark" /> Yes
//         </Button>
//       </Modal.Actions>
//     </Modal>
//   );
// };

const Control = ({ loggedIn, setLogin, name, setName }) => {
  const history = useHistory();
  const [index, setIndex] = React.useState(-1);
  const goBack = () => {
    history.push("/");
  };
  const logOut = () => {
    goBack();
    setName();
    setLogin(false);
  };
  const location = useLocation();
  return (
    <div>
      <div className="back-button" onClick={goBack}>
        {location.pathname === "/weekCalendar" && (
          <Button onClick={goBack} icon="arrow left" inverted />
        )}
      </div>
      <div className={`change-name`}>
        <div
          className={`${
            location.pathname === "/"
              ? "logout-button-home"
              : location.pathname === "/dayCalendar"
              ? "logout-button-day"
              : location.pathname === "/weekCalendar"
              ? "logout-button-week"
              : location.pathname === "/monthCalendar"
              ? "logout-button-month"
              : ""
          }`}
          onClick={logOut}
        >
          {loggedIn && (
            <Button
              onClick={logOut}
              icon="external"
              content="Log Out"
              inverted
            />
          )}
        </div>
        {loggedIn && location.pathname === "/" && (
          <UserMenu
            name={name}
            setName={setName}
            activeIndex={index}
            setIndex={setIndex}
            loggedIn={loggedIn}
            setLogin={setLogin}
          />
        )}
      </div>
    </div>
  );
};

export default Control;
