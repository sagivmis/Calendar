import React from "react";
import Tasks from "./Tasks";
import ChooseDay from "./ChooseDay";
import ChooseWeek from "./ChooseWeek";
import { useState } from "react";
import Margin from "./Margin";
import DailyControlPanel from "./DailyControlPanel";
const Daily = ({ days, setDays, weeks, setWeeks }) => {
  const updateUI = () => {
    setDays((days) => [...days]);
  };
  const onClickAddTask = () => {
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
  const [day, setDay] = useState();
  const [week, setWeek] = useState();
  return (
    <div>
      <div className="daily-calendar-container">
        <DailyControlPanel
          onClickAddTask={onClickAddTask}
          setDays={setDays}
          days={days}
        />
        <Margin margin=".5em" />
        <ChooseWeek weeks={weeks} setWeek={setWeek} daily={true} />
        {week && <ChooseDay days={week.days} setDay={setDay} />}
        <Margin margin="1.5em" />
        {week ? (
          day ? (
            <Tasks day={day} days={days} setDays={setDays} dayCalendar={true} />
          ) : (
            <h3 className="choose-label light-orange">Choose a day</h3>
          )
        ) : (
          <h3 className="choose-label light-orange">Choose a Week</h3>
        )}
      </div>
    </div>
  );
};

export default Daily;
