import React, { useState } from "react";
import PersonBox from "./takeTurnForm/personBox";
import BtnContained from "../buttons/BtnContained";

const TakeTurnPage = () => {
   const people = [
      {
        id: 1,
         name: "علی منیری",
         gender: "مرد",
         phone: "09123456789",
         age: "20",
         weight: "70",
         height: "182",
      },
      {
        id: 2,
         name: "علی منیری",
         gender: "مرد",
         phone: "09123456789",
         age: "20",
         weight: "70",
         height: "182",
      },
      {
        id: 3,
         name: "علی منیری",
         gender: "مرد",
         phone: "09123456789",
         age: "20",
         weight: "70",
         height: "182",
      },
   ];
   const [selectedPerson, setSelectedPerson] = useState(people[0])
   const selectPerson = (person) =>{
    setSelectedPerson(person)
   }
   return (
      <div className="w-full h-full flex items-end">
         <div className=" w-[97%] h-[95%] bg-white-gray rounded-t-3xl shadow-slate-950 p-5">
            <h1 className="text-3xl px-5 pt-3 border-b-light-gray border-b-2">
               دریافت نوبت
            </h1>
            <div className="mt-5">
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">لطفا بیمار را انتخاب کنید:</h3>
                  <BtnContained dark>+ افزودن بیمار جدید</BtnContained>
               </div>
               <div className="flex gap-5 flex-wrap">
                  {people.map((person) => (
                     <PersonBox onClick={()=>selectPerson(person)} person={person} selected={person.id===selectedPerson.id ? true : false} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TakeTurnPage;
