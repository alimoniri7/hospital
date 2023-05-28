import React, { useState } from "react";
import PersonBox from "./takeTurnForm/personBox";
import BtnContained from "../buttons/BtnContained";
import AddPerson from "./takeTurnForm/AddPerson";
import { people } from "../../../data";

const TakeTurnPage = () => {
    const [isAddPersonOpen, setIsAddPersonOpen] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [patients , setPatients] = useState(people)

    const opneAddPeson = ()=> {
        setIsAddPersonOpen(true)
    }
  
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
                  <BtnContained onClick={opneAddPeson} dark>+ افزودن بیمار جدید</BtnContained>
               </div>
               <AddPerson setPerson={setPatients} isOpen={isAddPersonOpen} setIsOpen={setIsAddPersonOpen}/>
               <div className="flex gap-5 flex-wrap">
                  {patients.map((person) => (
                     <PersonBox key={person.id} onClick={()=>selectPerson(person)} person={person} selected={person.id===selectedPerson.id ? true : false} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TakeTurnPage;
