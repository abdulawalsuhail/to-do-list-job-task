import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import calender from "../../assets/calendar.png";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, "PP")}.</p>;
  }
  return (
    <div className="min-h-screen">
      <div
        
        className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-4 lg:w-5/6 mx-auto"
      >
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img className="w-full" style={{width:"385px"}} src={calender} alt="calender" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="shadow-lg text-slate-800"
        >
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default Calender;