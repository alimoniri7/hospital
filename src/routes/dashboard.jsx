import React from "react";

// Components
import ServiceHistoryPage from "../components/dashboard/ServiceHistoryPage";
import TakeTurnPage from "../components/dashboard/TakeTurnPage";
import TurnHistoryPage from "../components/dashboard/TurnHistoryPage";
import SidBar from "../components/dashboard/SidBar";

// Hooks
import { useParams } from "react-router-dom";


const Dashboard = () => {


   const { path} = useParams()


   return (
      <div className="w-screen h-screen transition-none flex md:flex-row flex-col items-start md:gap-5 ">
         <SidBar/>
         {/* handle dashboard routing */}
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
