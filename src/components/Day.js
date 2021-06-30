import React from "react";
import Grid from "@material-ui/core/Grid";
import _Modal from "../components/_Modal";
import TotalTasks from "../components/TotalTasks";
import Tasks from "../components/Tasks";
import { Progress } from "semantic-ui-react";
import { useState } from "react";

// let done, notDone;
const Day = ({ weeks, day, setDays, days }) => {
  const calculateDonePercentage = () => {
    let counter = 0;
    day.tasks.map((task) => {
      if (task.status === true) counter++;
    });
    // setDoneState((counter / day.totalTasks) * 100);
    // console.log(`Done returning: ${(counter / day.totalTasks) * 100}`);
    if (day.totalTasks !== 0) return (counter / day.totalTasks) * 100;
    else return 0;
  };
  const setBarsStates = () => {
    setDoneState({ percent: calculateDonePercentage() });
  };
  const done = calculateDonePercentage();
  const [doneState, setDoneState] = useState({ percent: done });
  const [size, setSize] = useState();

  const updateUI = () => {
    setDays((days) => [...days]);
    update();
    setBarsStates();
  };
  const onClickShowDay = () => {
    update();
    day.tasks.map((task) => {});
  };
  const onClickAddTask = () => {
    update();
    const name = document.getElementById("form-name");
    const time = document.getElementById("form-time");
    const note = document.getElementById("form-note");
    const done = document.getElementById("checkbox");

    const newTask = {
      id: day.tasks.length + 1,
      name: name.value,
      time: time.value,
      status: done.checked,
      passed: false, //check if the time of event already happened or not
      note: note.value,
    };
    if (newTask.name !== "") {
      day.tasks.push(newTask);
      day.totalTasks++;
      console.log(newTask);
    }
    updateUI();
  };
  const update = () => {
    if (day.totalTasks > 3) setSize("36px");
    else setSize("22px");
  };
  return (
    <div>
      <Grid item>
        <div className="day-container calendar-day" onMouseOver={() => {}}>
          <h3 className={`relative `} style={{ marginBottom: -25 }}>
            {`Total`}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {day.totalTasks > 3 && ` `}
            <TotalTasks day={day} size={size} update={update} />
            {day.totalTasks > 3 && ` `}
            &nbsp;
            {day.totalTasks > 3 && ` `}
            &nbsp;
            {day.totalTasks > 3 && ` `}
            {`tasks for:`}
          </h3>
          <h1
            className="relative"
            style={{ marginBottom: -25, color: "#ffae67" }}
          >
            {day.date}
          </h1>{" "}
          {/* <div className="day-tasks">
            <Tasks
              day={day}
              daily={true}
              weekCalendar={false}
              // setWeek={setWeek}
              days={days}
              updateBars={setBarsStates}
              calculateDonePercentage={calculateDonePercentage}
            />
          </div> */}
          <div className="progress-bars">
            <p className="done-label">
              Done %&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`${Math.floor(calculateDonePercentage())}`}
            </p>
            <Progress percent={doneState.percent} indicating />
          </div>
          <div className="control-panel-day">
            <_Modal
              text="Add Task"
              onC={onClickAddTask}
              form={true}
              setDays={setDays}
              days={days}
            />
          </div>
          <div className="control-panel-day-right">
            <_Modal
              text="Show Day"
              onC={onClickShowDay}
              form={false}
              day={day}
              calculateDonePercentage={calculateDonePercentage}
              dayDescription={true}
              setDays={setDays}
              days={days}
              setDoneState={setDoneState}
            />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Day;
