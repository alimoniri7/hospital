import React from "react";
import SidbarMenu from "../components/dashboard/SidbarMenu";
import ServiceHistoryPage from "../components/dashboard/ServiceHistoryPage";
import { useParams } from "react-router-dom";
import TakeTurnPage from "../components/dashboard/TakeTurnPage";
import TurnHistoryPage from "../components/dashboard/TurnHistoryPage";
import SidBar from "../components/dashboard/SidBar";
const Dashboard = () => {


   const { path} = useParams()


   return (
      <div className="w-screen h-screen transition-none flex md:flex-row flex-col items-start md:gap-5 ">
         <SidBar/>
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
