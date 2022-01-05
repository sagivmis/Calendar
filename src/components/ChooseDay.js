import React from "react";
import { Dropdown } from "semantic-ui-react";

const ChooseDay = ({ days, setDay }) => {
    const options = [];
    days.map((day) => {
        options.push({
            key: day.id,
            value: day.id,
            text: day.date,
        });
    });
    const checkDay = (e, value) => {
        e.persist();
        console.log(e.currentTarget.textContent);
        const selectedDate = e.currentTarget.textContent;
        let showDay;
        days.map((day) => {
            if (day.date === selectedDate) showDay = day;
        });
        setDay(showDay);
    };
    return (
        <div>
            <p className='choose-day-label'>Day</p>
            <Dropdown
                className='selector'
                id='selector'
                placeholder='Select Day'
                fluid
                selection
                options={options}
                onChange={checkDay}
            />
        </div>
    );
};

export default ChooseDay;
