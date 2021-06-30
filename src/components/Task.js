import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";
import DeleteTask from "./DeleteTask";
import { useLocation } from "react-router-dom";

const Task = ({
  task,
  setDays,
  day,
  days,
  setDoneState = () => {},
  setNotDoneState = () => {},
  calculateDonePercentage = () => {},
  calculateNotDonePercentage = () => {},
  dayCalendar = false,
  weekCalendar = true,
  updateBars = () => {},
}) => {
  const location = useLocation();
  let color;
  if (task.status === false) color = "light-red";
  if (task.status === true) color = "light-green";

  const [checkState, setCheckState] = useState({ checked: task.status });
  const [state, setState] = useState(task.status);
  const update = () => {
    // color = "light-green";
    updateBars();
    setState(!task.status);
    setCheckState({ checked: !task.status });
    task.status = !task.status;
    if (location.pathname !== "/monthCalendar") setBarsStates();
    else setBarsStatesMonthly({ days: [...days] });
  };
  const setBarsStates = () => {
    setDoneState({ percent: calculateDonePercentage() });
    setNotDoneState({ percent: calculateNotDonePercentage() });
  };
  const setBarsStatesMonthly = (week) => {
    setDoneState({ percent: calculateDonePercentage(week) });
    setNotDoneState({ percent: calculateNotDonePercentage(week) });
  };
  return (
    <div
      className={`noselect calendar-task align ${color} ${
        state ? "light-green-border" : ""
      } }`}
      onDoubleClick={update}
    >
      <h3>{task.name}</h3>
      {location.pathname !== "/monthCalendar" && weekCalendar && (
        <DeleteTask
          setDays={setDays}
          day={day}
          task={task}
          days={days}
          dayCalendar={dayCalendar}
        />
      )}
      {location.pathname !== "/monthCalendar" && (
        <Checkbox
          checked={checkState.checked}
          className={`absolute ${dayCalendar ? "day-checkbox" : ""}`}
          onClick={update}
        />
      )}
      <div className={`time-and-status ${color}`}>
        <p className={`calendar-task-par thin ${color}`}>
          <b
            className={`calendar-task-par bold ${color}`}
          >{`${task.time}, `}</b>
          &nbsp;&nbsp;&nbsp;
          {`${!state ? "🛑 Not done." : "✅ Done."}`}
        </p>
        {location.pathname === "/monthCalendar" && (
          <div className="daydate-container"></div>
        )}
      </div>
    </div>
  );
};

export default Task;
