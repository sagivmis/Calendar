import React, { useEffect } from "react";

const TotalTasks = ({ day, size, update }) => {
  useEffect(() => {
    update();
  }, []);
  return (
    <div
      className={`stats light-orange ${
        day.totalTasks > 3 ? "bigger-stats" : ""
      }`}
      style={{ fontSize: size }}
    >{`${day.totalTasks}`}</div>
  );
};

export default TotalTasks;
