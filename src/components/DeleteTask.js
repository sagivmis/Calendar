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
    // await fetch(`http://localhost:8000/days/${id}/task/${id}`, {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    //   // body: { _id: id },
    // });
    // await updateProds();
  };
  return (
    <div>
      <FaTimes
        className={`delete-task delete ${dayCalendar ? "day-delete" : ""}`}
        style={{}}
        onClick={() => {
          deleteProd(task.id);
        }}
      />
    </div>
  );
};

export default DeleteTask;
