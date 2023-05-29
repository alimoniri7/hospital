import React from "react";
import SidbarMenu from "../components/dashboard/SidbarMenu";
import ServiceHistoryPage from "../components/dashboard/ServiceHistoryPage";
import { useParams } from "react-router-dom";
import TakeTurnPage from "../components/dashboard/TakeTurnPage";
import TurnHistoryPage from "../components/dashboard/TurnHistoryPage";
const Dashboard = () => {
   const paper = "w-60 bg-white-gray  h-screen";


   const { path} = useParams()


   return (
      <div className="w-screen h-screen flex gap-5 ">
         <div className={`${paper}`}>
            <div>
               <h1 className="font-[playfair] font-black text-4xl text-center py-5">
                  Hospital
               </h1>
               <SidbarMenu/>
            </div>
         </div>
         <div className="w-full h-full  overflow-x-hidden">
            {
                path === 'results' && <ServiceHistoryPage/>
            }
            {
                path === 'take-turn' && <TakeTurnPage/>
            }
            {
                path === 'take-turn-history' && <TurnHistoryPage/>
            }
         </div>
      </div>
   );
};

export default Dashboard;
