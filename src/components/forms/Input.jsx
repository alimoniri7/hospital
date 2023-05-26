import React from "react";

const Input = ({
   isValid,
   checkValidation,
   activate,
   value,
   onChange,
   placeholder,
   onFocus,
   type,
   name,
   label,
   node,
   className,
   disabled
}) => {
   return (
      <div className={`flex flex-col gap-1 relative ${className}`}>
         <label htmlFor="user-id">{label}:</label>
        {node}
         <input
         disabled={disabled}
            className={` ${
               !isValid && activate
                  ? "bg-red-200 hover:bg-red-300"
                  : "bg-white hover:bg-light-gray"
            }   p-2  text-black-gray transition-all duration-200 ease-out active:shadow-none shadow-md rounded-none  overflow-hidde outline-none`}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={checkValidation}
            onKeyUp={checkValidation}
         />
      </div>
   );
};

export default Input;
