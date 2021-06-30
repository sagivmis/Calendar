import Background from "./components/Background";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import AddName from "./components/AddName";
import Footer from "./components/Footer";
import WelcomePanel from "./components/WelcomePanel";
import Daily from "./components/Daily";
import Monthly from "./components/Monthly";
import NotificationCenter from "./components/NotificationCenter";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import moment from "moment";
import Password from "./components/Password";

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function getDates(startDate) {
  var currentDate = startDate;
  var dateArray = [];
  for (let i = 0; i < 336; i++) {
    dateArray.push(currentDate.ddmmyyyy());
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}
Date.prototype.ddmmyyyy = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
    (dd > 9 ? "" : "0") + dd,
    "-" + (mm > 9 ? "" : "0") + mm,
    "-" + this.getFullYear(),
  ].join("");
};
function App() {
  const [days, setDays] = useState([
    {
      id: 1,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "13:00",
          status: false,
          passed: false,
          note: "",
          date: "21-06-2021",
        },
      ],
      totalTasks: 1,
      date: "21-06-2021",
      day: "Monday",
    },
    {
      id: 2,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "08:00",
          status: false,
          passed: false,
          note: "",
          date: "22-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "09:00",
          status: true,
          passed: false,
          note: "",
          date: "22-06-2021",
        },
      ],
      totalTasks: 2,
      date: "22-06-2021",
      day: "Thursday",
    },
    {
      id: 3,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "18:00",
          status: false,
          passed: false,
          note: "",
          date: "23-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "23-06-2021",
        },
      ],
      totalTasks: 2,
      date: "23-06-2021",
      day: "Wednesday",
    },
    {
      id: 4,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "24-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "24-06-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "24-06-2021",
        },
      ],
      totalTasks: 3,
      date: "24-06-2021",
      day: "Thursday",
    },
    {
      id: 5,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "14:00",
          status: false,
          passed: false,
          note: "",
          date: "25-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "25-06-2021",
        },
      ],
      totalTasks: 2,
      date: "25-06-2021",
      day: "Friday",
    },
    {
      id: 6,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "26-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "26-06-2021",
        },
      ],
      totalTasks: 2,
      date: "26-06-2021",
      day: "Saturday",
    },
    {
      id: 7,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "27-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "27-06-2021",
        },
        {
          id: 3,
          name: "Test",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "27-06-2021",
        },
        {
          id: 4,
          name: "Bernard",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "27-06-2021",
        },
      ],
      totalTasks: 4,
      date: "27-06-2021",
      day: "Sunday",
    },
  ]); // a week
  const [days2, setDays2] = useState([
    {
      id: 1,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "13:00",
          status: false,
          passed: false,
          note: "",
          date: "28-06-2021",
        },
      ],
      totalTasks: 1,
      date: "28-06-2021",
      day: "Monday",
    },
    {
      id: 2,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "08:00",
          status: false,
          passed: false,
          note: "",
          date: "29-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "09:00",
          status: true,
          passed: false,
          note: "",
          date: "29-06-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "29-06-2021",
        },
      ],
      totalTasks: 3,
      date: "29-06-2021",
      day: "Thursday",
    },
    {
      id: 3,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "18:00",
          status: false,
          passed: false,
          note: "",
          date: "30-06-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "30-06-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "09:00",
          status: true,
          passed: false,
          note: "",
          date: "30-06-2021",
        },
      ],
      totalTasks: 3,
      date: "30-06-2021",
      day: "Wednesday",
    },
    {
      id: 4,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "01-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "01-07-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "01-07-2021",
        },
        {
          id: 4,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "01-07-2021",
        },
        {
          id: 5,
          name: "Walk the dog",
          time: "23:00",
          status: true,
          passed: false,
          note: "",
          date: "01-07-2021",
        },
      ],
      totalTasks: 5,
      date: "01-07-2021",
      day: "Thursday",
    },
    {
      id: 5,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "14:00",
          status: false,
          passed: false,
          note: "",
          date: "02-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "02-07-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "22:00",
          status: true,
          passed: false,
          note: "",
          date: "02-07-2021",
        },
        {
          id: 4,
          name: "Walk the dog",
          time: "02:00",
          status: true,
          passed: false,
          note: "",
          date: "02-07-2021",
        },
      ],
      totalTasks: 4,
      date: "02-07-2021",
      day: "Friday",
    },
    {
      id: 6,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "03-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "03-07-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "12:00",
          status: true,
          passed: false,
          note: "",
          date: "03-07-2021",
        },
        {
          id: 4,
          name: "Do the Dishes",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "03-07-2021",
        },
      ],
      totalTasks: 4,
      date: "03-07-2021",
      day: "Saturday",
    },
    {
      id: 7,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "04-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "04-07-2021",
        },
        {
          id: 3,
          name: "Test",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "04-07-2021",
        },
        {
          id: 4,
          name: "Bernard",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "04-07-2021",
        },
        {
          id: 5,
          name: "Bernard",
          time: "11:00",
          status: true,
          passed: false,
          note: "",
          date: "04-07-2021",
        },
        {
          id: 6,
          name: "Bernard",
          time: "09:00",
          status: true,
          passed: false,
          note: "",
          date: "04-07-2021",
        },
      ],
      totalTasks: 6,
      date: "04-07-2021",
      day: "Sunday",
    },
  ]); // a week
  const [days3, setDays3] = useState([
    {
      id: 1,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "13:00",
          status: false,
          passed: false,
          note: "",
          date: "05-07-2021",
        },
      ],
      totalTasks: 1,
      date: "05-07-2021",
      day: "Monday",
    },
    {
      id: 2,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "08:00",
          status: false,
          passed: false,
          note: "",
          date: "06-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "09:00",
          status: true,
          passed: false,
          note: "",
          date: "06-07-2021",
        },
      ],
      totalTasks: 2,
      date: "06-07-2021",
      day: "Thursday",
    },
    {
      id: 3,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "18:00",
          status: false,
          passed: false,
          date: "07-07-2021",
          note: "",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "07-07-2021",
        },
      ],
      totalTasks: 2,
      date: "07-07-2021",
      day: "Wednesday",
    },
    {
      id: 4,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "08-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "08-07-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "08-07-2021",
        },
        {
          id: 4,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "08-07-2021",
        },
        {
          id: 5,
          name: "Walk the dog",
          time: "23:00",
          status: true,
          passed: false,
          note: "",
          date: "08-07-2021",
        },
      ],
      totalTasks: 5,
      date: "08-07-2021",
      day: "Thursday",
    },
    {
      id: 5,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "14:00",
          status: false,
          passed: false,
          note: "",
          date: "09-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "09-07-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "22:00",
          status: true,
          passed: false,
          note: "",
          date: "09-07-2021",
        },
        {
          id: 4,
          name: "Walk the dog",
          time: "02:00",
          status: true,
          passed: false,
          note: "",
          date: "09-07-2021",
        },
      ],
      totalTasks: 4,
      date: "09-07-2021",
      day: "Friday",
    },
    {
      id: 6,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "10-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "10-07-2021",
        },
        {
          id: 3,
          name: "Walk the dog",
          time: "12:00",
          status: true,
          passed: false,
          note: "",
          date: "10-07-2021",
        },
      ],
      totalTasks: 3,
      date: "10-07-2021",
      day: "Saturday",
    },
    {
      id: 7,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "11-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "11-07-2021",
        },
        {
          id: 3,
          name: "Test",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "11-07-2021",
        },
        {
          id: 4,
          name: "Bernard",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "11-07-2021",
        },
        {
          id: 5,
          name: "Bernard",
          time: "11:00",
          status: true,
          passed: false,
          note: "",
          date: "11-07-2021",
        },
      ],
      totalTasks: 5,
      date: "11-07-2021",
      day: "Sunday",
    },
  ]); // a week
  const [days4, setDays4] = useState([
    {
      id: 1,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "13:00",
          status: false,
          passed: false,
          note: "",
          date: "12-07-2021",
        },
      ],
      totalTasks: 1,
      date: "12-07-2021",
      day: "Monday",
    },
    {
      id: 2,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "08:00",
          status: false,
          passed: false,
          note: "",
          date: "13-07-2021",
        },
      ],
      totalTasks: 1,
      date: "13-07-2021",
      day: "Thursday",
    },
    {
      id: 3,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "18:00",
          status: false,
          passed: false,
          note: "",
          date: "14-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "14-07-2021",
        },
      ],
      totalTasks: 2,
      date: "14-07-2021",
      day: "Wednesday",
    },
    {
      id: 4,
      tasks: [],
      totalTasks: 0,
      date: "15-07-2021",
      day: "Thursday",
    },
    {
      id: 5,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "14:00",
          status: false,
          passed: false,
          note: "",
          date: "16-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "16-07-2021",
        },
      ],
      totalTasks: 2,
      date: "16-07-2021",
      day: "Friday",
    },
    {
      id: 6,
      tasks: [],
      totalTasks: 0,
      date: "17-07-2021",
      day: "Saturday",
    },
    {
      id: 7,
      tasks: [
        {
          id: 1,
          name: "Do the Dishes",
          time: "04:00",
          status: false,
          passed: false,
          note: "",
          date: "18-07-2021",
        },
        {
          id: 2,
          name: "Walk the dog",
          time: "05:00",
          status: true,
          passed: false,
          note: "",
          date: "18-07-2021",
        },
        {
          id: 3,
          name: "Test",
          time: "15:00",
          status: true,
          passed: false,
          note: "",
          date: "18-07-2021",
        },
        {
          id: 4,
          name: "Bernard",
          time: "19:00",
          status: true,
          passed: false,
          note: "",
          date: "18-07-2021",
        },
      ],
      totalTasks: 4,
      date: "18-07-2021",
      day: "Sunday",
    },
  ]); // a week
  const [weeks, setWeeks] = useState([
    { days: days, id: 1 },
    { days: days2, id: 2 },
    { days: days3, id: 3 },
    { days: days4, id: 4 },
  ]); // a month
  const [months, setMonths] = useState(); // a year
  const [name, setName] = useState(""); // user's name
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      content: "Go to the dentist",
      task: {
        id: 1,
        time: "15:00",
        date: "27-06-2021",
        status: true,
      },
      done: true,
    },
    {
      id: 2,
      content: "Bernard",
      task: {
        id: 1,
        time: "19:00",
        date: "28-06-2021",
        status: true,
      },
      done: true,
    },
    {
      id: 3,
      content: "Do the Dishes",
      task: {
        id: 1,
        time: "04:00",
        date: "24-06-2021",
        status: false,
      },
      done: false,
    },
    {
      id: 4,
      content: "Do the Dishes",
      task: {
        id: 1,
        time: "05:00",
        date: "23-06-2021",
        status: false,
      },
      done: false,
    },
    {
      id: 5,
      content: "Do the Dishes",
      task: {
        id: 1,
        time: "05:00",
        date: "23-06-2021",
        status: false,
      },
      done: false,
    },
    {
      id: 6,
      content: "Do the Dishes",
      task: {
        id: 1,
        time: "05:00",
        date: "23-06-2021",
        status: false,
      },
      done: false,
    },
    {
      id: 7,
      content: "Go to the dentist",
      task: {
        id: 1,
        time: "15:00",
        date: "27-06-2021",
        status: true,
      },
      done: true,
    },
    {
      id: 8,
      content: "Go to Chen",
      task: {
        id: 1,
        time: "19:00",
        date: "27-06-2021",
        status: false,
      },
      done: true,
    },
  ]);
  // const generateYear = () => {
  //   let year = [];
  //   let months = []
  //   let weeks= []
  //   let days = []

  //   for (let i = 1; i <= 12; i++) {
  //     year.push({
  //       id: i,
  //       weeks: [],
  //       totalTasks: 0,
  //     });
  //     console.log(year[0].weeks);
  //     for (let j = 1; j <= 4; i++) {
  //       year[0].weeks.push({
  //         id: j,
  //         days: [],
  //         totalTasks: 0,
  //       });
  //         for (let k = 1; k <= 7; i++) {
  //           days.push({
  //             id: k,
  //             tasks: [],
  //             totalTasks: 0,
  //             date: "",
  //             day: "",
  //           });
  //     }
  //     // }
  //   }
  //   // fillDates(year);
  // };
  // let d = new Date(2021, 0, 1);
  // let dates = getDates(d);
  // // console.log(dates[0].slice(3, 5)); //month
  // // console.log(dates[0].slice(0, 2)); //day
  // const fillDates = (year) => {
  //   for (let i = 0; i < 336; i++) {
  //     let weekId = 0;
  //     if (parseInt(dates[i].slice(0, 2)) > 7) weekId = 2;
  //     else if (parseInt(dates[i].slice(0, 2)) > 14) weekId = 3;
  //     else if (parseInt(dates[i].slice(0, 2)) > 21) weekId = 4;
  //     else weekId = 1;
  //     year[parseInt(dates[i].slice(3, 5))].weeks[weekId].days[
  //       parseInt(dates[i].slice(0, 2))
  //     ].date = dates[i];
  //   }
  //   setMonths(year);
  //   console.log(months);
  // };
  // let e = d;
  // e.setDate(e.getDate() + 5);

  // console.log(dates);

  // console.log(generateYear(months));
  const [users, setUsers] = useState([
    {
      name: "Sagiv",
      password: 1111,
    },
    {
      name: "Hen",
      password: 2222,
    },
    {
      name: "Eden",
      password: 3333,
    },
  ]);
  let midnight = "0:00:00";
  let now = null;
  const doSomething = () => {
    // generateNewDay(weeks);
  };
  setTimeout(
    doSomething,
    moment("24:00:00", "HH:mm:ss").diff(moment(), "seconds")
  );
  const [loggedIn, setLogin] = useState(false);
  let pass = 1234;

  return (
    <Router>
      {() => {}}
      <div className="App">
        {name && <Header name={name} loggedIn={loggedIn} setLogin={setLogin} />}
        {!name && (
          <AddName
            setName={setName}
            name={name}
            users={users}
            setUsers={setUsers}
          />
        )}

        {loggedIn && <Route path="/" exact render={() => <WelcomePanel />} />}
        <Background />
        {loggedIn && (
          <NotificationCenter
            notifications={notifications}
            setNotifications={setNotifications}
            loggedIn={loggedIn}
          />
        )}
        <p id="logged-in" style={{ display: "none" }}>
          {loggedIn}
        </p>
        <Route
          path="/weekCalendar"
          exact
          render={() => (
            <div className="calendar-container">
              <Calendar days={days} setDays={setDays} weeks={weeks} />
            </div>
          )}
        />
        <Route
          path="/dayCalendar"
          exact
          render={() => (
            <div className="calendar-container">
              <Daily
                days={days}
                setDays={setDays}
                weeks={weeks}
                setWeeks={setWeeks}
              />
            </div>
          )}
        />
        <Route
          path="/monthCalendar"
          exact
          render={() => (
            <div className="calendar-container">
              <Monthly weeks={weeks} setWeeks={setWeeks} />
            </div>
          )}
        />
        <Route
          path="/yearCalendar"
          exact
          render={() => (
            <div className="calendar-container">
              <Monthly weeks={weeks} setWeeks={setWeeks} />
            </div>
          )}
        />
        {!loggedIn && (
          <Password
            pass={pass}
            loggedIn={loggedIn}
            setLogin={setLogin}
            users={users}
            setUsers={setUsers}
            name={name}
            setName={setName}
          />
        )}
        <Footer
          loggedIn={loggedIn}
          setLogin={setLogin}
          name={name}
          setName={setName}
        />
      </div>
    </Router>
  );
}

export default App;
