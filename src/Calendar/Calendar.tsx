import React, { useEffect, useState } from "react";
import { fetch_get } from "./API";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentEvent, setCurrentEvent] = useState([]);

  useEffect(() => {
    getData();
  }, [currentDate]);

  const getData = async () => {
    const currE = await fetch_get("MONTHLY_CALENDAR");
    setCurrentEvent(currE);
  };

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
      calendarArray.push({ day: i, month: currentDate.getMonth() + 1, year: currentDate.getFullYear() });
      // let newDate = firstDayOfMonth.setDate(currentDate.getDate() + i);
      // const dateObject = new Date(newDate);
      // calendarArray.push(dateObject);
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

  const changeStrToDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    return { month, day };
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div style={{ width: 630 }}>
        <div style={{ display: "flex"}}>
          {daysOfWeek.map((item, key) => {
            return <div key={key} style={{textAlign:'right',width:90}}>{item}</div>;
          })}
        </div>
        {weeks().map((week, weekIndex) => (
          <div key={weekIndex} style={{ display: "flex" }}>
            {week.map((dayObj: any, dayIndex) => (
              <div key={dayIndex} style={{width:90 ,height:100, textAlign: "center", borderStyle:'inset',boxSizing:'border-box'}}>
                <div>{dayObj.day}</div>
                <div>
                  {currentEvent.length > 0 &&
                    currentEvent.map((item, key) => {
                      if (changeStrToDate(item["event-date"]).day == dayObj.day && changeStrToDate(item["event-date"]).month == dayObj.month) {
                        return item["event-name"];
                      }
                    })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
