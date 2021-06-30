import React from "react";
import { Button, Label, Icon } from "semantic-ui-react";

const dateDayMaker = (task) => {
  let d = new Date(
    parseInt(task.date.slice(6, 10)),
    parseInt(task.date.slice(3, 5)) - 1,
    parseInt(task.date.slice(0, 2))
  );
  return d.getDay();
};
const Notification = ({ notification, notifications, setNotifications }) => {
  const deleteNotification = (id) => {
    let arr = notifications.filter((not) => not.id !== id);
    setNotifications(arr);
    // console.log(setNotifications);
  };
  const renderSavedLabel = () => {
    setContent("Saved!");
    setTimeout(() => {
      setContent();
    }, 3000);
  };
  const [state, setState] = React.useState({ textToCopy: "" });
  const [content, setContent] = React.useState();
  return (
    <div>
      <div className="notifications-box-par">
        <div
          className={`notification ${
            notification.task.status === true ? "light-green" : "light-red"
          }`}
        >
          <p className="not-id">{`${notification.id}. `}</p>
          <p className="not-content">{`${notification.content}`}</p>
          <p className="not-date">{`${notification.task.date}`}</p>
          <p className="not-time">{notification.task.time}</p>{" "}
          <Button
            icon="clipboard"
            size="mini"
            color="black"
            className="clipboard-icon-not"
            onClick={() => {
              renderSavedLabel();
              setState({
                textToCopy: `${notification.content}, ${
                  notification.task.time
                }, ${notification.task.status ? "Done" : "Not Done"}, ${
                  notification.task.date
                }`,
              });
              navigator.clipboard.writeText(state.textToCopy);
            }}
          />
          {content && (
            <Label
              pointing="left"
              className="saved-label"
              content={content}
            ></Label>
          )}
          <Button
            icon="delete"
            className="delete-icon-not"
            color="black"
            size="mini"
            onClick={() => deleteNotification(notification.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
{
  /* <p className={`calendar-task-month-daydate`}>
              {`${
              location.pathname === "/monthCalendar"
                ? `${new Date(
                    parseInt(task.date.slice(6, 10)),
                    parseInt(task.date.slice(3, 5)) - 1,
                    parseInt(task.date.slice(0, 2))
                  )}`
                : {}}
                 ${task.date}`}</p>
            {console.log(
              new Date(
                parseInt(task.date.slice(6, 10)),
                parseInt(task.date.slice(3, 5)) - 1,
                parseInt(task.date.slice(0, 2))
              )
             */
}
