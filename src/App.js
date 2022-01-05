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
import {
    firstWeek,
    secondWeek,
    thirdWeek,
    fourthWeek,
    notificationsList,
} from "./data";
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
    const [days, setDays] = useState(firstWeek); // a week
    const [days2, setDays2] = useState(secondWeek); // a week
    const [days3, setDays3] = useState(thirdWeek); // a week
    const [days4, setDays4] = useState(fourthWeek); // a week
    const [weeks, setWeeks] = useState([
        { days: days, id: 1 },
        { days: days2, id: 2 },
        { days: days3, id: 3 },
        { days: days4, id: 4 },
    ]); // a month
    const [months, setMonths] = useState(); // a year
    const [name, setName] = useState(""); // user's name
    const [notifications, setNotifications] = useState(notificationsList);

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
            <div className='App'>
                {name && (
                    <Header
                        name={name}
                        loggedIn={loggedIn}
                        setLogin={setLogin}
                    />
                )}
                {!name && (
                    <AddName
                        setName={setName}
                        name={name}
                        users={users}
                        setUsers={setUsers}
                    />
                )}

                {loggedIn && (
                    <Route path='/' exact render={() => <WelcomePanel />} />
                )}
                <Background />
                {loggedIn && (
                    <NotificationCenter
                        notifications={notifications}
                        setNotifications={setNotifications}
                        loggedIn={loggedIn}
                    />
                )}
                <p id='logged-in' style={{ display: "none" }}>
                    {loggedIn}
                </p>
                <Route
                    path='/weekCalendar'
                    exact
                    render={() => (
                        <div className='calendar-container'>
                            <Calendar
                                days={days}
                                setDays={setDays}
                                weeks={weeks}
                            />
                        </div>
                    )}
                />
                <Route
                    path='/dayCalendar'
                    exact
                    render={() => (
                        <div className='calendar-container'>
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
                    path='/monthCalendar'
                    exact
                    render={() => (
                        <div className='calendar-container'>
                            <Monthly weeks={weeks} setWeeks={setWeeks} />
                        </div>
                    )}
                />
                <Route
                    path='/yearCalendar'
                    exact
                    render={() => (
                        <div className='calendar-container'>
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
