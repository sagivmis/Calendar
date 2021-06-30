import React from "react";
import { useState } from "react";
import _Progress from "./_Progress";
import Week from "./Week";

const MonthlyWeek = ({
  week,
  caclulateTasks,
  calculateDoneTasks,
  weeks,
  calculateDonePercentage,
}) => {
  const [totalTasks, setTotalTasks] = React.useState(0);
  const [doneTasks, setDoneTasks] = React.useState(0);
  const done = calculateDonePercentage(week);
  const [doneState, setDoneState] = useState({ percent: done });

  const updateBars = () => {
    weeks.map((week) => {
      setDoneState({ percent: calculateDonePercentage(week) });
    });
  };
  const updateBar = (week) => {
    setDoneState({ percent: calculateDonePercentage(week) });
  };

  React.useEffect(() => {
    setTotalTasks(caclulateTasks(week));
    setDoneTasks(calculateDoneTasks(week));
  }, []);
  return (
    <div>
      <div className="week-grid">
        <h3>
          {`${week.days[0].date}`} &nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`${week.days[6].date}`}
        </h3>
        <div className="total-tasks-stats">
          <p>Total Tasks:</p>
          <p className="total-tasks-number">{`${caclulateTasks(week)}`}</p>
        </div>
        <div className="total-done-tasks">
          <p>Done Tasks:</p>
          <p className="total-done-tasks-number">{`${calculateDoneTasks(
            week
          )}`}</p>
          <Week
            week={week}
            updateBars={updateBars}
            doneState={doneState}
            calculateDonePercentage={calculateDonePercentage}
            caclulateTasks={caclulateTasks}
          />
          <_Progress
            updateBar={updateBar}
            updateBars={updateBars}
            doneState={doneState}
            week={week}
            calculateDonePercentage={calculateDonePercentage}
            caclulateTasks={caclulateTasks}
            setDoneState={setDoneState}
          />
        </div>
      </div>
    </div>
  );
};

export default MonthlyWeek;
