import React, { useRef, useState } from "react";
import useInputHandler from "../../../../hooks/useInputHandler";
import useValidation from "../../../../hooks/useValidation";
import CustomSelectBox from "../../forms/CustomSelectBox";
import useOnClickOutside from "../../../../hooks/useClickOutside";
import X from "../../../assets/icons/X";
import BtnContained from "../../buttons/BtnContained";
import Input from "../../forms/Input";


const AddPerson = ({ isOpen, setIsOpen }) => {
    const [isMessageSend, SetIsMessageSend] = useState(false)
   // input Handlers
   const [name, nameHandler] = useInputHandler();
   const [gender, genderHandler] = useInputHandler();
   const [phone, phoneHandler] = useInputHandler();
   const [age, ageHandler] = useInputHandler();
   const [height, heightHandler] = useInputHandler();
   const [weight, weightHandler] = useInputHandler();
   const [confirmation, confirmationHandler] = useInputHandler()
   // End...

   // Validation
   const [activate, setActivate] = useState({
      name: false,
      phone: false,
      gender: false,
      age: false,
      height: false,
      weight: false,
      confirmation: false
   });
   const focusHandler = (e) => {
      setActivate({ ...activate, [e.target.name]: true });
   };

   const phoneRegex = /^(\+98|0)?9\d{9}$/;
   const confirmationRegex = /^([0-9]){5}$/;
   const [nameValidation, checkName] = useValidation(name);
   const [phoneValidation, checkPhone] = useValidation(phone, phoneRegex);
   const [ageValidation, checkAge] = useValidation(age);
   const [heightValidation, checkHeight] = useValidation(height);
   const [weightValidation, checkWeight] = useValidation(weight);
   const [confirmationValidation, checkConfirmation] = useValidation(confirmation, confirmationRegex)

   console.log(nameValidation.isValid);

   // End...

   // data
   const genders = ["مرد", "زن"];
   // End...

   // click away to close the form
   const formRef = useRef();
   useOnClickOutside(formRef, () => setIsOpen(false));
   // End

   console.log(gender);

   return (
      <div
         className={`light-box z-20 flex flex-col items-center justify-center transition-none duration-0 ${
            isOpen ? "translate-x-0  " : "translate-x-full"
         }`}
      >
         <div
            ref={formRef}
            className={`bg-white-gray flex flex-col w-[450px] max-w-[90%] divide-gray divide-y p-10 transition-all ease-out duration-500  ${
               isOpen
                  ? "translate-y-0 opacity-100  "
                  : "translate-y-20 opacity-5"
            }`}
         >
            <div className="py-2 text-3xl text-dark-gray font-bold ">
               افزودن بیمار جدید{" "}
            </div>
            <button
               onClick={() => setIsOpen(false)}
               className="absolute top-5 left-5 "
            >
               <X />
            </button>
            <form className="py-3 flex flex-col gap-3" >
            <Input
                  type="text"
                  value={name}
                  onChange={nameHandler}
                  activate={activate.name}
                  onFocus={focusHandler}
                  isValid={nameValidation.isValid}
                  checkValidation={checkName}
                  placeholder="نام کامل خود را وارد کنید"
                  label="نام و نام خانوادگی"
                  name="name"
               />
            <Input
                  type="number"
                  value={phone}
                  onChange={phoneHandler}
                  activate={activate.phone}
                  onFocus={focusHandler}
                  isValid={phoneValidation.isValid}
                  checkValidation={checkPhone}
                  placeholder="شماره تماس بیمار را وارد کنید"
                  label="شماره تماس"
                  name="phone"
               />
            <Input
                  type="number"
                  value={age}
                  onChange={ageHandler}
                  activate={activate.age}
                  onFocus={focusHandler}
                  isValid={ageValidation.isValid}
                  checkValidation={checkAge}
                  placeholder="سن"
                  label="سن بیمار"
                  name="age"
               />
            <Input
                  type="number"
                  value={height}
                  onChange={heightHandler}
                  activate={activate.height}
                  onFocus={focusHandler}
                  isValid={heightValidation.isValid}
                  checkValidation={checkHeight}
                  placeholder="قد"
                  label="قد بیمار"
                  name="height"
               />
            <Input
                  type="number"
                  value={weight}
                  onChange={weightHandler}
                  activate={activate.weight}
                  onFocus={focusHandler}
                  isValid={weightValidation.isValid}
                  checkValidation={checkWeight}
                  placeholder="وزن"
                  label="وزن بیمار"
                  name="weight"
               />
               <CustomSelectBox value={gender} onChange={genderHandler} options={genders} placehodler="اتخاب جنسیت" />

               {/* <Input
                  className="mt-7"
                  type="number"
                  value={confirmation}
                  onChange={confirmationHandler}
                  activate={activate.confirmation}
                  onFocus={focusHandler}
                  isValid={confirmationValidation.isValid}
                  checkValidation={checkConfirmation}
                  placeholder="کد ارسالی را وارد کنید"
                  label="کد ارسالی را وارد کنید"
                  name="confirmation"
                  node={
                     <BtnContained
                     disabled={isMessageSent? true : false}
                        type="button"
                        onClick={sendConfirmation}
                        dark
                        className="!absolute -bottom-[0px] left-0 z-50 text-xs"
                     >
                        {isMessageSent ? `${String(timer)} ثانیه` : "ارسال کد"}
                     </BtnContained>
                  }
               /> */}
               <BtnContained type="submit" dark className="w-full mt-5">
                 افزودن بیمار
               </BtnContained>
            </form>
         </div>
      </div>
   );
};

export default AddPerson;
