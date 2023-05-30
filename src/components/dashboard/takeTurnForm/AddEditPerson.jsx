import React, { useEffect, useRef, useState } from "react";
import useValidation from "../../../../hooks/useValidation";
import CustomSelectBox from "../../forms/CustomSelectBox";
import useOnClickOutside from "../../../../hooks/useClickOutside";
import X from "../../../assets/icons/X";
import BtnContained from "../../buttons/BtnContained";
import Input from "../../forms/Input";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

const InputTag = styled.div`
    padding: 4px 6px 4px 6px ;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    background-color: #F8F8F8;
`


const AddPerson = ({ isOpen, setIsOpen, setPerson, existingPerson }) => {
   // input Handlers
   const [formData, setFormData] = useState({
    id: existingPerson ? existingPerson.id : uuidv4(),
    name: existingPerson ? existingPerson.name : '',
    phone: existingPerson ? existingPerson.phone : '',
    age: existingPerson ? existingPerson.age : '',
    height: existingPerson ? existingPerson.height : '',
    weight: existingPerson ? existingPerson.weight : '',
    gender:existingPerson ? existingPerson.gender : 'مرد'
   })
   const onChangeHandler = (e)=>{
    setFormData(prev=> ({
        ...prev,
        [e.target.name] : e.target.value
    }))
   }
   // End...


   // Validation
   const [activate, setActivate] = useState({
      name: false,
      phone: false,
      age: false,
      height: false,
      weight: false,
   });
   const focusHandler = (e) => {
      setActivate({ ...activate, [e.target.name]: true });
   };

   const phoneRegex = /^(\+98|0)?9\d{9}$/;
   const [nameValidation, checkName] = useValidation(formData.name);
   const [phoneValidation, checkPhone] = useValidation(formData.phone, phoneRegex);
   const [ageValidation, checkAge] = useValidation(formData.age);
   const [heightValidation, checkHeight] = useValidation(formData.height);
   const [weightValidation, checkWeight] = useValidation(formData.weight);


   // End...

   // data
   const genders = ["مرد", "زن"];
   // End...

   // click away to close the form
   const formRef = useRef();
   useOnClickOutside(formRef, () => setIsOpen(false));
   // End

   const submitHandler = (e) => {
    e.preventDefault();
    setActivate({
        name: true,
        phone: true,
        age: true,
        height: true,
        weight: true,
    });
    checkPhone();
    checkName();
    checkAge();
    checkHeight()
    checkWeight()

    if (
       nameValidation.isValid &&
       phoneValidation.isValid &&
       weightValidation.isValid &&
       heightValidation.isValid &&
       ageValidation.isValid

    ) {
        setIsOpen(false)
        if(!existingPerson){
            setPerson(prev=>([
             ...prev,
             {
                 ...formData,
             }
            ]))
            setFormData({
             name: '',
             phone: '',
             age: '',
             height: '',
             weight: '',
             gender:'مرد'
            })
            setActivate({
             name: false,
             phone: false,
             age: false,
             height: false,
             weight: false,
            })
            toast.success('بیمار جدید اظافه شد!')

        }else{
            setPerson(prev=>{
                let index = prev.findIndex(item=> item.id === formData.id);
                prev.splice(index, 1)
                return([
                    ...prev,
                    {
                        ...formData
                    }
                ])
            })
            toast.success('بیمار مورد نظر ویرایش شد!')
            
        }
        
        
    } else {
      toast.warning('فیلد های قرمز را بررسی کنید')
       
    }
 };

 useEffect(()=>{
    if(formData.age===''){
        checkAge()
        checkHeight()
        checkName()
        checkWeight()
        checkPhone()
    }
 },[formData.phone])

 useEffect(()=>{
    checkAge()
    checkHeight()
    checkName()
    checkWeight()
    checkPhone()
 },[])

   return (
      <div
         className={`light-box z-20 flex flex-col items-center justify-center transition-none duration-0 overflow-y-scroll ${
            isOpen ? "translate-x-0  " : "translate-x-full"
         }`}
      >
         <div
            ref={formRef}
            className={` mt-3 bg-white-gray flex flex-col w-[450px] max-w-[90%] divide-gray divide-y p-10 transition-all ease-out duration-500  ${
               isOpen
                  ? "translate-y-0 opacity-100  "
                  : "translate-y-20 opacity-5"
            }`}
         >
            <div className="py-2 text-3xl text-dark-gray font-bold ">
               {
                  existingPerson ? 'ویرایش اطلاعات' : 'افزودن بیمار جدید'
               }
            </div>
            <button
               onClick={() => setIsOpen(false)}
               className="absolute top-5 left-5 "
            >
               <X />
            </button>
            <form className="py-3 flex flex-col gap-3" onSubmit={submitHandler} >
            <Input
                  type="text"
                  value={formData.name}
                  onChange={onChangeHandler}
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
                  value={formData.phone}
                  onChange={onChangeHandler}
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
                  value={formData.age}
                  onChange={onChangeHandler}
                  activate={activate.age}
                  onFocus={focusHandler}
                  isValid={ageValidation.isValid}
                  checkValidation={checkAge}
                  placeholder="سن بیمار"
                  label="سن"
                  name="age"
               />
            <Input
                  type="number"
                  value={formData.height}
                  onChange={onChangeHandler}
                  activate={activate.height}
                  onFocus={focusHandler}
                  isValid={heightValidation.isValid}
                  checkValidation={checkHeight}
                  placeholder="قد بیمار"
                  label="قد"
                  name="height"
                  node={<InputTag className="!absolute bottom-1 left-2 z-50 ">سانتی متر</InputTag>}
               />
            <Input
                  type="number"
                  value={formData.weight}
                  onChange={onChangeHandler}
                  activate={activate.weight}
                  onFocus={focusHandler}
                  isValid={weightValidation.isValid}
                  checkValidation={checkWeight}
                  placeholder="وزن بیمار"
                  label="وزن"
                  name="weight"
                  node={<InputTag className="!absolute bottom-1 left-2 z-50 ">کیلوگرم</InputTag>}
               />
               <div>
                <p>جنسیت:</p>
               <CustomSelectBox className={'!w-full'} value={formData.gender} onChange={onChangeHandler} options={genders} placehodler="اتخاب جنسیت" name='gender' />
               </div>


               <BtnContained type="submit" dark className="w-full mt-8">
                  {
                     existingPerson ? 'اعمال تغییرات' : 'افزودن بیمار'
                  }
               </BtnContained>
            </form>
         </div>
      </div>
   );
};

export default AddPerson;
