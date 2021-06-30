import React from "react";
import MonthlyControlPanel from "./MonthlyControlPanel";
import MonthlyWeek from "./MonthlyWeek";
import Grid from "@material-ui/core/Grid";

const caclulateTasks = (week) => {
  return week.days.reduce(
    (accumulator, day) => accumulator + day.totalTasks,
    0
  );
};
const calculateDoneTasks = (week) => {
  let count = 0;
  week.days.map((day) =>
    day.tasks.map((task) => {
      if (task.status === true) count++;
    })
  );
  return count;
};
const calculateDonePercentage = (week) => {
  let counter = calculateDoneTasks(week);
  return (counter / caclulateTasks(week)) * 100;
};
const Monthly = ({ weeks, setWeeks }) => {
  return (
    <div className="monthly-calendar-container">
      <MonthlyControlPanel />
      <Grid container spacing={1}>
        {weeks.map((week) => (
          // Go inside other component later starts here
          <Grid item>
            <MonthlyWeek
              weeks={weeks}
              week={week}
              caclulateTasks={caclulateTasks}
              calculateDoneTasks={calculateDoneTasks}
              calculateDonePercentage={calculateDonePercentage}
            />
          </Grid>
          // Go inside other component later ends here
        ))}
      </Grid>
    </div>
  );
};

export default Monthly;
