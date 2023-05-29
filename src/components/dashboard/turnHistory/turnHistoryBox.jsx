import React from "react";

const TurnHistoryBox = ({ data }) => {
   const bgColor = () => {
      if (data.status === "تایید شده") {
         return "bg-ok";
      } else if (data.status === "در حال بررسی") {
         return "bg-yellow";
      } else {
         return "bg-error";
      }
   };
   const textColor = ()=>{
    if (data.status === "تایید شده") {
        return "text-ok";
     } else if (data.status === "در حال بررسی") {
        return "text-yellow";
     } else {
        return "text-error";
     }
   }
   console.log(data);
   return (
      <li className={`${bgColor()} w-full md:h-20 h-32 flex justify-end border-light-gray  border-[1px]`}>
         <div className="h-full w-[98%] lg:w-[99%] bg-white rounded-r-md flex justify-between !py-1 flex-wrap  items-center divide-x-2 divide-x-reverse divide-light-gray">
            <div className={`${textColor()} pr-3 font-semibold md:w-[25%] w-[50%] text-center overflow-hidden lg:h-3/5 h-1/2 flex items-center justify-center`}>{data.status}</div>
            <div className="pr-3 md:w-[25%] w-[50%] text-center overflow-hidden lg:h-3/5 h-1/2 flex items-center justify-center flex-col">
                <p className="font-medium">{data.person.name}</p>
                <p>{data.person.phone}</p>
            </div>
            <div className="pr-3 md:w-[25%] w-[50%] text-center overflow-hidden lg:h-3/5 h-1/2 flex flex-col items-center justify-center">
                <div className="flex justify-center gap-1">
                <p className="font-medium">{data.date.day}</p>
                <p className="font-medium">{data.date.month}</p>
                </div>
                <p>{data.date.hour}</p>
            </div>
            <div className="pr-3 md:w-[25%] w-[50%] text-center overflow-hidden font-medium lg:h-3/5 h-1/2 flex items-center justify-center">{data.service}</div>
         </div>
      </li>
   );
};

export default TurnHistoryBox;
