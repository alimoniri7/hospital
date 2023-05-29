import React from "react";
import SidbarMenu from "./SidbarMenu";
import { useState } from "react";
import BtnBurger from "../buttons/BtnBurger";
import Profile from "../../assets/icons/Profile";

const SidBar = () => {
   const paper = "md:w-60 w-full bg-white-gray  md:h-screen ";
   const [isOpen, setIsOpne] = useState(false);
   const toggleMenu = () => {
      setIsOpne((prev) => !prev);
   };

   return (
      <div className={`${paper} `}>
         <div>
            <div className="flex justify-between items-center px-4 md:block md:px-0">
                <div className="w-1/3" >
                    <BtnBurger dashboard isOpen={isOpen} setIsOpen={setIsOpne} />
                </div>
               <h1
                  onClick={toggleMenu}
                  className="font-[playfair] font-black text-4xl text-center py-4 z-40 w-1/3 "
               >
                  Hospital
               </h1>
               <div className=" md:hidden flex justify-end w-1/3 text-left">
                  <Profile />
               </div>
            </div>
            <SidbarMenu isOpne={isOpen} />
         </div>
      </div>
   );
};

export default SidBar;
