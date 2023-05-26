import React from "react";
import BtnContained from "../components/buttons/BtnContained";
import ResultBox from "../components/dashboard/ResultBox";

const Dashboard = () => {
   const paper = "w-60 bg-white-gray  h-screen";
   const menu = [
      {
         label: "جوابدهی",
         path: "/aboutus",
      },
      {
         label: "نوبت دهی",
         path: "contactus",
      },
   ];
   return (
      <div className="w-screen h-screen flex gap-5">
         <div className={`${paper}`}>
            <div>
               <h1 className="font-[playfair] font-black text-4xl text-center py-5">
                  Hospital
               </h1>
               <ul className="flex flex-col  gap-4 pt-5">
                  {menu.map((item) => (
                     <li key={item.label}>
                        <BtnContained
                           dark
                           className="text-dark-gray font-medium z-10 w-full "
                        >
                           {item.label}
                        </BtnContained>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div>
            <ResultBox/>
         </div>
      </div>
   );
};

export default Dashboard;
