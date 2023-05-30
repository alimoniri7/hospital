import React, { useRef, useState } from "react";

// Router
import { useNavigate } from "react-router-dom";

// Hooks
import useOnClickOutside from "../../../hooks/useClickOutside";

const BtnMenu = ({ item }) => {
   const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false)
   const ref = useRef()
   
   const toggleMenu = ()=>{
      setIsOpen(prev=> !prev)
   }

   const closeMenu = ()=> setIsOpen(false)
   useOnClickOutside(ref, closeMenu )

   return (
      <button
      ref={ref}
         onClick={() => !item.submenu && navigate(item.path)}
         className="group "
      >
         <div onClick={toggleMenu}  className="flex items-center justify-between h-12 px-3 font-medium  group-focus:bg-light-gray bg-white-gray hover:bg-light-gray text-black-gray relative   group  transition-all duration-200 ease-out   py-2 m-1 cursor-pointer active:shadow-none shadow-lg overflow-hidden">
            <span className="truncate text-base">{item.label}</span>

            {item.submenu && (
               <svg
                  className="h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <path
                     fillRule="evenodd"
                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                     clipRule="evenodd"
                  />
               </svg>
            )}
         </div>

         {item.submenu && (
            <div className={`${isOpen ? 'max-h-40' : 'max-h-0'}  overflow-hidden duration-300  divide-y-2 divide-light-gray bg-white`}>
               {item.submenu.map((subItem) => (
                  <a
                  key={subItem.path}
                     className="flex items-center h-8 px-7 py-6 text-md hover:bg-light-gray"
                     href={subItem.path}
                  >
                     {subItem.label}
                  </a>
               ))}
            </div>
         )}
      </button>
   );
};

export default BtnMenu;
