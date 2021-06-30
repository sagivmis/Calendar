import React from "react";
import Day from "./Day";
import ChooseWeek from "./ChooseWeek";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";

const Calendar = ({ days, setDays, weeks }) => {
  const [week, setWeek] = useState(weeks[0]);
  // console.log(days);
  return (
    <div className={"grid noselect"}>
      <ChooseWeek weeks={weeks} setWeek={setWeek} />
      <Grid container spacing={1}>
        {week.days.map((day) => (
          <Day
            day={day}
            setDays={setDays}
            key={day.id}
            days={week.days}
            weeks={weeks}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Calendar;
