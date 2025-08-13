import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa";

const CalendarSection = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="p-6 m-10 bg-white w-full">
      <div className="flex items-center mb-4">
        <FaCalendarAlt className="text-2xl text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Calendar</h2>
      </div>

      <Calendar
        onChange={setValue}
        value={value}
        className="rounded-lg border-none shadow-md p-2 "/>

      <div className="mt-4 text-gray-700">
        <p>
          <strong>Selected Date:</strong>{" "}
          {value.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
      </div>
    </div>
  );
};

export default CalendarSection;
