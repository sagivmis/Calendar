import React from "react";
import _Accordion from "./_Accordion";

const NotificationCenter = ({ notifications, setNotifications, loggedIn }) => {
  return (
    <div className={`notification-box`}>
      <_Accordion
        notifications={notifications}
        setNotifications={setNotifications}
        loggedIn={loggedIn}
      />
      <p className="timer" id="timer">
        0
      </p>
    </div>
  );
};

export default NotificationCenter;
