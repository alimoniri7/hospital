import React, { useState } from "react";
import PersonBox from "./takeTurnForm/personBox";
import BtnContained from "../buttons/BtnContained";
import AddPerson from "./takeTurnForm/AddEditPerson";
import { people } from "../../../data";
import CustomSelectBox from "../forms/CustomSelectBox";
import DatePicker from "../forms/DatePicker";
import AssetPicker from "../forms/AssetPicker";

const TakeTurnPage = () => {
   const [isAddPersonOpen, setIsAddPersonOpen] = useState(false);
   const [selectedPerson, setSelectedPerson] = useState(people[0]);
   const [patients, setPatients] = useState(people);

   const opneAddPeson = () => {
      setIsAddPersonOpen(true);
   };

   const selectPerson = (person) => {
      setSelectedPerson(person);
   };

   //    ----------------

   const services = [
      "MRI",
      "عکس برداری",
      "ازمایش خون",
      "سونوگرافی",
      "دندان پزشکی",
   ];
   const [selectedService, setSelectedService] = useState(services[0]);
   const selectHandler = (e) => {
      setSelectedService(e.target.value);
   };

   return (
      <div className="w-full mt-8 flex items-end">
         <div className=" w-[97%] h-[95%] bg-white-gray rounded-t-3xl shadow-slate-950 p-5 pb-16">
            {/* header */}
            <h1 className="text-3xl px-5 pt-3 border-b-light-gray border-b-2">
               دریافت نوبت
            </h1>

            {/* patient picker */}
            <div className="mt-5">
               <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                     لطفا بیمار را انتخاب کنید:
                  </h3>
                  <BtnContained onClick={opneAddPeson} dark>
                     + افزودن بیمار جدید
                  </BtnContained>
               </div>
               <AddPerson
                  setPerson={setPatients}
                  isOpen={isAddPersonOpen}
                  setIsOpen={setIsAddPersonOpen}
               />
               <div className="flex gap-5 flex-wrap">
                  {patients.map((person) => (
                     <PersonBox
                        key={person.id}
                        setPerson={setPatients}
                        onClick={() => selectPerson(person)}
                        person={person}
                        selected={
                           person.id === selectedPerson.id ? true : false
                        }
                     />
                  ))}
               </div>
            </div>
            <div>
               <div className="mt-6 ">
                  <h3 className="text-lg font-medium mt-1">اطلاعات تکمیلی</h3>
                  <div className="bg-white p-7 ">
                     <div className=" flex items-center gap-5">
                        <p className="text-base">نوع خدمت:</p>
                        <CustomSelectBox
                           className={"!w-72"}
                           options={services}
                           value={selectedService}
                           onChange={selectHandler}
                        />
                     </div>
                     <div className=" mt-7 flex items-center flex-wrap gap-3">
                        <p className="text-base">
                           زمان نوبت:{" "}
                           <span className="text-sm">
                              (زود ترین زمان به طور پیش فرض انتخاب شده)
                           </span>
                        </p>

                        <DatePicker />
                     </div>
                     <div className=" mt-7 flex items-center flex-wrap gap-3">
                        <p className="text-base">تصویر نسخه:</p>

                        <AssetPicker>ارسال تصویر</AssetPicker>
                     </div>
                  </div>
                  <div className="w-full flex justify-center mt-8">

                  <BtnContained className='!w-full lg:!w-1/2 !mx-auto' dark>ثبت نوبت</BtnContained>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TakeTurnPage;
