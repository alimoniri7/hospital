import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnContained from "../buttons/BtnContained";
import BtnBurger from "../buttons/BtnBurger";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
   const menu = [
      {
         label: "درباره ما",
         path: "/aboutus",
      },
      {
         label: "تماس با ما",
         path: "contactus",
      },
      {
         label: "خدمات",
         path: "/services",
      },
      {
         label: "وبلاگ",
         path: "/blog",
      },
      {
         label: "نوبت دهی",
         path: "/login",
      },
   ];

   const [isOpen, setIsOpen] = useState(false)


   return (
      <nav className="flex items-center justify-center w-full border-b-2 border-white-gray py-2 px-2">
         <div className="flex items-center justify-between container">
            <BtnBurger isOpen={isOpen} setIsOpen={setIsOpen}/>
            <MobileMenu isOpen={isOpen} menu={menu}/>
            <div>
               <p className="text-3xl font-black font-[playfair]">Hospital</p>
            </div>
            <div className="sm:flex hidden">
               <ul className="flex gap-5 lg:gap-14">
                  {menu.map((item) => (
                     <li key={item.label}>
                        <Link className="lg:text-lg text-base hover:font-semibold transition-all ease-out duration-200"  to={item.path}>{item.label}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div>
                <BtnContained>ورود</BtnContained>
            </div> 
         </div>
      </nav>
   );
};

export default Navbar;
