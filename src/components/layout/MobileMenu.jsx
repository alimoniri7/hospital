import React from "react";
import { Link } from "react-router-dom";
import TwitterFilled from "../../assets/icons/TwitterFilled";
import InstagramFilled from "../../assets/icons/InstagramFilled";
import FacebookFilled from '../../assets/icons/LocationFilled';
import tailwindcolors from 'tailwindcss/colors';
import BtnContained from "../buttons/BtnContained";


const MobileMenu = ({ menu, isOpen }) => {
    const paper = 'w-60 bg-white-gray transition-all duration-500 ease-out  h-full'

   return (
      <div className={`light-box sm:hidden ${isOpen ? 'translate-x-0  ' : 'translate-x-full'}`}>
         <div className={`${paper} ${isOpen ? 'translate-x-0' : "translate-x-full"}`}>
            <div className="mt-16" >
               <ul className="flex flex-col  gap-4 pt-5">
                  {menu.map((item) => (
                     <li key={item.label}>
                        <BtnContained className="text-red-800 z-10 w-full" to={item.path}>{item.label}</BtnContained>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="flex gap-8  border-[1px]  border-gray  justify-center items-center py-4 mt-32 ">
               <Link to="#" className="leading-none">
                  <FacebookFilled
                     width="16"
                     height="16"
                     fill={tailwindcolors.gray[900]}
                  />
               </Link>

               <Link to="#" className="leading-none">
                  <TwitterFilled
                     width="16"
                     height="16"
                     fill={tailwindcolors.gray[900]}
                  />
               </Link>

               <Link to="#" className="leading-none">
                  <InstagramFilled
                     width="16"
                     height="16"
                     fill={tailwindcolors.gray[900]}
                  />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default MobileMenu;
