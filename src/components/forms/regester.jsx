import React, { useState, useEffect, useRef } from "react";
import useInputHandler from "../../../hooks/useInputHandler";
import BtnContained from "../buttons/BtnContained";
import useValidation from "../../../hooks/useValidation";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useClickOutside";
import X from "../../assets/icons/X";
import { toast } from "react-toastify";

const Regester = ({ isOpen, setIsOpen }) => {
   const [activate, setActivate] = useState({
      userid: false,
      phone: false,
      confirmation: false,
   });

   const [timer, setTimer] = useState(30);
   const [isMessageSent, setIsMessageSent] = useState(false);

   const [userId, userIdHandler] = useInputHandler();
   const [phone, phoneHandler] = useInputHandler();
   const [confirmation, confirmationHandler] = useInputHandler();

   const navigate = useNavigate();

   const useridRegex = /^([0-9]){10}$/;
   const [useridValidation, checkUseridValidation] = useValidation(
      userId,
      useridRegex
   );

   const phoneRegex = /^(\+98|0)?9\d{9}$/;
   const [phoneValidation, checkPhoneValidation] = useValidation(
      phone,
      phoneRegex
   );

   const confirmationRegex = /^([0-9]){5}$/;
   const [confirmationValidation, checkconfirmationValidation] = useValidation(
      confirmation,
      confirmationRegex
   );

   const focusHandler = (e) => {
      setActivate({ ...activate, [e.target.name]: true });
   };


   // send confirmation code proccess
   var myInterval;
   const [intervalId, setIntervalId] = useState('')

   const sendConfirmation = () => {
      setActivate((prev) => ({
         ...prev,
         phone: true,
      }));
      checkPhoneValidation();

      if (phoneValidation.isValid) {
         setIsMessageSent(true);
         myInterval = setInterval(() => {
            setTimer((prev) => prev - 1);

         }, 1000);
         setIntervalId(myInterval)
         toast.success('پیام تایید ارسال شد!')
        } else {
            toast.error('شماره تماس معتبر نمیباشد!')
        }
   };
   useEffect(() => {
      if (timer === 0) {
        clearInterval(intervalId)
        setIsMessageSent(false)
        setTimer(30)
      }
   }, [timer]);
// End


// click away to close the form
const formRef= useRef()
useOnClickOutside(formRef,()=> setIsOpen(false))
// End

   const submitHandler = (e) => {
      e.preventDefault();
      setActivate({
         confirmation: true,
         userid: true,
         phone: true,
      });
      checkPhoneValidation();
      checkUseridValidation();
      checkconfirmationValidation();

      if (
         useridValidation.isValid &&
         phoneValidation.isValid &&
         confirmationValidation.isValid
      ) {
         toast.success('وارد شدید!')
         setTimeout(()=>{
            navigate("/dashboard");

         },1000)
      } else {
         toast.warning('فیلد های قرمز را بررسی کنید')
      }
   };

   return (
      <div  className={`light-box z-20 flex flex-col items-center justify-center transition-none duration-0 ${isOpen ? 'translate-x-0  ' : 'translate-x-full'}`}>
         <div ref={formRef} className={`bg-white-gray flex flex-col w-[450px] max-w-[90%] divide-gray divide-y p-10 transition-all ease-out duration-500  ${isOpen ? 'translate-y-0 opacity-100  ' : 'translate-y-20 opacity-5'}`}>
            <div className="py-2 text-3xl text-dark-gray font-bold ">
               ورود به حساب
            </div>
            <button onClick={()=> setIsOpen(false)} className="absolute top-5 left-5 "><X/></button>
            <form className="py-3 flex flex-col gap-3" onSubmit={submitHandler}>
               <Input
                  type="number"
                  value={userId}
                  onChange={userIdHandler}
                  activate={activate.userid}
                  onFocus={focusHandler}
                  isValid={useridValidation.isValid}
                  checkValidation={checkUseridValidation}
                  placeholder="کد ملی یا شماره قبض را وارد کنید"
                  label="شماره پزیرش یا کدملی"
                  name="userid"
               />
               <Input
                  disabled={isMessageSent ? true : false}
                  type="number"
                  value={phone}
                  onChange={phoneHandler}
                  activate={activate.phone}
                  onFocus={focusHandler}
                  isValid={phoneValidation.isValid}
                  checkValidation={checkPhoneValidation}
                  placeholder="شماره تماس خود را وارد کنید"
                  label="شماره تماس"
                  name="phone"
               />
               <Input
                  className="mt-7"
                  type="number"
                  value={confirmation}
                  onChange={confirmationHandler}
                  activate={activate.confirmation}
                  onFocus={focusHandler}
                  isValid={confirmationValidation.isValid}
                  checkValidation={checkconfirmationValidation}
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
               />

               <BtnContained type="submit" dark className="w-full mt-5">
                  ورود به حساب
               </BtnContained>
            </form>
         </div>
      </div>
   );
};

export default Regester;
