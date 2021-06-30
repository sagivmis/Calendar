import React from "react";
import Tasks from "./Tasks";

const Week = ({
  week,
  updateBars,
  doneState,
  calculateDonePercentage,
  caclulateTasks,
}) => {
  const [weekShown, setWeek] = React.useState({ tasks: [] });
  const generateWeekTasks = (week) => {
    let tasksarr = { tasks: [] };
    week.days.map((day) => {
      tasksarr.tasks.push(...day.tasks);
    });
    setWeek(tasksarr);
    console.log(weekShown);
  };

  React.useEffect(() => {
    generateWeekTasks(week);
  }, []);

  let done = calculateDonePercentage(week);

  return (
    <div
      className={`monthly-week-container scroll ${
        done < 33 && week.id <= 2
          ? "under-33"
          : done < 33 && week.id >= 3 && week.id <= 4
          ? "under-33-medium-warning"
          : ""
      }`}
    >
      <Tasks
        day={weekShown}
        setWeek={setWeek}
        days={week.days}
        updateBars={updateBars}
        calculateDonePercentage={calculateDonePercentage}
      />
    </div>
  );
};

export default Week;
