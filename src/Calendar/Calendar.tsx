// Calendar.js

import React, { useState } from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate(); // get the last date.getMonth() + 1's last date
  };

  const generateMonth = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const days = daysInMonth(currentDate);
    const startingDay = firstDayOfMonth.getDay(); // show the date thorugh number ex) mon => 1
    const calendarArray = [];

    for (let i = 0; i < startingDay; i++) {
      calendarArray.push(0);
    }

    for (let i = 1; i <= days; i++) {
      calendarArray.push(i);
    }

    return calendarArray;
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
  };

  const weeks = () => {
    const daysArray = generateMonth();
    const weeksArray = [];

    for (let i = 0; i < daysArray.length; i += 7) {
      weeksArray.push(daysArray.slice(i, i + 7));
    }

    return weeksArray;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div style={{ width: 300 }}>
        <div style={{ display: "flex" , justifyContent: "space-between",textAlign:"center"}}>
          {daysOfWeek.map((item, key) => {
            return <div key={key}>{item}</div>;
          })}
        </div>
        <div style={{ width: 300 }}>
          {weeks().map((week, weekIndex) => (
            <div key={weekIndex} style={{ display: "flex", justifyContent: "space-between" }}>
              {week.map((day, dayIndex) => (
                <div style={{width:100, height:100,textAlign:"center"}} key={dayIndex}>{day}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
