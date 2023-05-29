import React from "react";
import { turnHistory } from "../../../data";
import TurnHistoryBox from "./turnHistory/turnHistoryBox";

const TurnHistoryPage = () => {
   return (
      <div className="w-full h-full  flex items-end">
         <div className=" w-[97%] h-[95%] bg-white-gray rounded-t-3xl shadow-slate-950 p-5 pb-16">
            <h1 className="text-3xl px-5 pt-3 border-b-light-gray border-b-2">
               سوابق نوبت ها
            </h1>
            <div className="flex flex-col gap-4 mt-5">
                {
                    turnHistory.map(item=> <TurnHistoryBox key={item.id} data={item}/>)
                }
            </div>
         </div>
      </div>
   );
};

export default TurnHistoryPage;
