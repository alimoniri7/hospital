
import React from "react";

// hooks
// import useHover from "@/hooks/useHover";

// icons
import Check from "../../assets/icons/Check";

const CheckBox = ({
   size = "medium",
   className,
   selected = false,
   onChange,
   isHovered
}) => {
   // const [hoverRef, isHovered] = useHover();

   let newSize = "medium";
   switch (size) {
      case "medium":
         newSize = "w-[18px] h-[18px]";
         break;
      case "large":
         newSize = "w-5 h-5 ";
         break;
      case "small":
         newSize = "w-4 h-4";
   }

   let borderColor = () => {
      if (isHovered || selected) {
         return "border-black-gray";
      } else {
         return "border-light-gray";
      }
   };

   return (
      <div
         className={` ${className}  text-base flex items-start cursor-pointer overflow-hidden gap-1`}
         onClick={onChange}
      >
         <div
            className={`${newSize} ${borderColor()} border-[1px] border-solid flex items-center justify-center transition-all duration-200 ease-out`}
         >
            {selected && <Check />}
         </div>
      </div>
   );
};

export default CheckBox;
