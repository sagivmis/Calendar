import React from "react";
import Notification from "./Notification";

window.setInterval(function () {
  var loggedIn = document.getElementById("data");
  if (loggedIn) {
    var elem = document.getElementById("data");
    elem.scrollTop = elem.scrollHeight;
  }
}, 10000);
let timer = 0;
window.setInterval(function () {
  var loggedIn = document.getElementById("data");
  if (loggedIn) {
    if (timer === 10) timer = 0;
    timer = timer + 1;
    var elem = document.getElementById("timer");
    //   elem.scrollTop = elem.scrollHeight;
    elem.textContent = `Refresh in ${timer}`;
    if (timer === 10) {
      timer = 0;
      elem.textContent = `Refresh in ${timer}`;
    }
  }
}, 1000);
const NotificationBox = ({ notifications, setNotifications, loggedIn }) => {
  return (
    <div className={``}>
      <div className="notification-cmd scroll" id="data">
        {notifications.map((not) => (
          <Notification
            notification={not}
            setNotifications={setNotifications}
            notifications={notifications}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationBox;
