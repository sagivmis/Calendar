import React from "react";
import { FaTimes } from "react-icons/fa";

const DeleteTask = ({ setDays, day, task, days, dayCalendar = false }) => {
    //   console.log(days);
    const deleteProd = async (id) => {
        let newdays = [...days];
        newdays.map((newday) => {
            if (newday.id === day.id) {
                newday.tasks.filter((task) => {
                    if (task.id === id) {
                        newday.tasks.pop(task);
                        newday.totalTasks--;
                    }
                    return task.id !== id;
                });
            }
        });
        setDays((days) => [...newdays]);
    };
    return (
        <div>
            <FaTimes
                className={`delete-task delete ${
                    dayCalendar ? "day-delete" : ""
                }`}
                style={{}}
                onClick={() => {
                    deleteProd(task.id);
                }}
            />
        </div>
    );
};

export default DeleteTask;
