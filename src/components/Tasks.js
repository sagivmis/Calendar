import React from "react";
import Task from "./Task";

const Tasks = ({
  day,
  setDays,
  days,
  setDoneState = () => {},
  setNotDoneState = () => {},
  calculateDonePercentage = () => {},
  calculateNotDonePercentage = () => {},
  dayCalendar = false,
  updateBars = () => {},
  weekCalendar = true,
}) => {
  return (
    <div>
      {day.tasks.map((task) => (
        <Task
          weekCalendar={weekCalendar}
          task={task}
          setDays={setDays}
          day={day}
          days={days}
          key={task.id}
          setDoneState={setDoneState}
          setNotDoneState={setNotDoneState}
          calculateNotDonePercentage={calculateNotDonePercentage}
          calculateDonePercentage={calculateDonePercentage}
          dayCalendar={dayCalendar}
          updateBars={updateBars}
        />
      ))}
    </div>
  );
};

export default Tasks;
