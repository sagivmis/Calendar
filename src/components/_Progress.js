import React from "react";
import { Progress } from "semantic-ui-react";

const _Progress = ({
  doneState,
  week,
  calculateDonePercentage,
  updateBars,
  calculateTasks,
  setDoneState,
  updateBar,
}) => {
  React.useEffect(() => {
    updateBars();
  }, []);
  return (
    <div
      className="month-weekly-progress"
      onDoubleClick={() => updateBar(week)}
    >
      <div className="done-percent-label">{`Done %`}</div>
      <p className="done-percent-number">{`${Math.floor(
        calculateDonePercentage(week)
      )}`}</p>
      <Progress percent={calculateDonePercentage(week)} indicating />
    </div>
  );
};

export default _Progress;
