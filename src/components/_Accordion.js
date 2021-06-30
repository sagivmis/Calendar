import React from "react";
import NotificationBox from "./NotificationBox";
import Margin from "./Margin";
import { Accordion } from "semantic-ui-react";

const _Accordion = ({ notifications, setNotifications, loggedIn }) => {
  const [state, setState] = React.useState({ activeIndex: -1 });
  const { activeIndex } = state;
  const handleClick = (e, titleProps) => {
    if (loggedIn) {
      const { index } = titleProps;
      const { activeIndex } = state;
      const newIndex = activeIndex === index ? -1 : index;

      setState({ activeIndex: newIndex });
    }
  };

  return (
    <div className="notification-accordion">
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <h3 className="">NotificationBox</h3>
          {state.activeIndex === -1 && (
            <p className="small-note note-not">Click to expand</p>
          )}
          {state.activeIndex !== -1 && (
            <p className="small-note note-not">Click to collapse</p>
          )}
        </Accordion.Title>
        <Accordion.Content className="white" active={activeIndex === 0}>
          <b className="name-id">NO.</b>
          <b className="name-label">NAME</b>
          <b className="name-date">DATE</b>
          <b className="name-time">TIME</b>
          <Margin margin="1.45em" />
          {loggedIn && (
            <NotificationBox
              notifications={notifications}
              setNotifications={setNotifications}
              loggedIn={loggedIn}
            />
          )}
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default _Accordion;
