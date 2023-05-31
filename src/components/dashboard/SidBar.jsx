import React, { useRef, useState } from "react";

// Components
import SidbarMenu from "./SidbarMenu";
import BtnBurger from "../buttons/BtnBurger";

// Icons
import Profile from "../../assets/icons/Profile";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useClickOutside";

const SidBar = () => {
   const navigate = useNavigate()
   const paper = "md:w-60 w-full bg-white-gray  md:h-screen ";
   const [isOpen, setIsOpne] = useState(false);

   const sideBarRef = useRef()

   useOnClickOutside(sideBarRef, ()=>setIsOpne(false))

   return (
      <div className={`${paper} `}>
         <div>
            <div className="flex justify-between items-center px-4 md:block md:px-0">
                <div className="w-1/3" >
                    <BtnBurger dashboard isOpen={isOpen} setIsOpen={setIsOpne} />
                </div>
               <h1
                  onClick={()=> navigate('/') }
                  className="font-[playfair] font-black text-4xl text-center py-4 z-40 w-1/3 md:w-auto cursor-pointer"
               >
                  Hospital
               </h1>
               <div className=" md:hidden flex justify-end w-1/3 text-left">
                  <Profile />
               </div>
            </div>
            <SidbarMenu outsideRef={sideBarRef} isOpne={isOpen} />
         </div>
      </div>
   );
};

export default SidBar;
