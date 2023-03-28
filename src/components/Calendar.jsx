import React from "react";
const months = [
  "Jan",
  "Febr",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Calendar = () => {
  const now = new Date();
  const today = {
    month: months[now.getMonth()],
    date: now.getDate(),
  };
  return (
    <div className="Calendar m-5">
      <div className="Calendar-icon">
        <div className="Calendar-icon-month">{today.month}</div>
        <div className="Calendar-icon-date">{today.date}</div>
      </div>
      <div className="Calendar-label">To-do list app</div>
    </div>
  );
};

export default Calendar;
