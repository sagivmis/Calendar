import React from "react";
import { Dropdown } from "semantic-ui-react";

const ChooseWeek = ({ weeks, setWeek, daily = false }) => {
  const options = [];
  weeks.map((week) => {
    let date = `${week.id}. ${week.days[0].date} until ${week.days[6].date}`;
    options.push({
      key: week.id,
      value: week.id,
      text: date,
    });
  });
  const checkWeek = (e, value) => {
    e.persist();
    // console.log(e.currentTarget.textContent);
    const selectedDate = e.currentTarget.textContent;
    let showWeekId, showWeek;
    showWeekId = selectedDate.slice(0, 1);
    weeks.map((week) => {
      //   console.log(week);
      if (week.id === parseInt(showWeekId)) showWeek = week;
    });

    setWeek(showWeek);
    console.log(showWeek);
  };
  return (
    <div className={`choose-week ${daily ? "daily-choose-week" : ""}`}>
      {/* <b className="choose-week-label">Week</b> */}
      <Dropdown
        upward
        className="selector-2"
        placeholder="Select Week"
        fluid
        selection
        options={options}
        onChange={checkWeek}
      />
    </div>
  );
};

export default ChooseWeek;
