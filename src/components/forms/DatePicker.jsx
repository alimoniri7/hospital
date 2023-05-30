import React, { useRef, useState, useEffect } from "react";
import CustomSelectBox from "./CustomSelectBox";
import { dates } from "../../../data";

const DatePicker = () => {
   const months = dates.map((item) => item.month);
   const [selectedmonth, setSelectedMonth] = useState(months[0]);

   const daysInMonth = dates.find((item) => item.month === selectedmonth).days;
   const days = daysInMonth.map((item) => item.day);
   const [selectedDay, setSelectedDay] = useState(days[0]);

   const hoursInDay = daysInMonth.find((item) => item.day === selectedDay);
   const hours = hoursInDay ? hoursInDay.hours : ["ابتدا روز را انتخاب کنید"];

   const [selectedHour, setSelectedHour] = useState(hours[0]);


   const isInitialMount = useRef(true);
   const isInitialMount2 = useRef(true);

   useEffect(() => {
      if (isInitialMount2.current) {
         isInitialMount2.current = false;
      } else {
         setSelectedDay("");
      }
   }, [selectedmonth]);


   useEffect(() => {
      if (isInitialMount.current) {
         isInitialMount.current = false;
      } else {
        setSelectedHour("");
      }
   },  [selectedmonth, selectedDay]);
   

   return (
      <div className=" flex items-center  ">
         <div className="flex items-center">
            <CustomSelectBox
               className="!w-24"

               value={selectedmonth}
               onChange={(e) => setSelectedMonth(e.target.value)}
               options={months}
            />
            <p className="text-2xl">/</p>

            <CustomSelectBox
               className="!w-20"
               value={selectedDay}
               onChange={(e) => setSelectedDay(e.target.value)}
               options={days}
               placehodler="روز"
            />
            <p className="text-2xl">/</p>

            <CustomSelectBox
               className="!w-20"

               value={selectedHour}
               onChange={(e) => setSelectedHour(e.target.value)}
               options={hours}
            />
         </div>
      </div>
   );
};

export default DatePicker;
