import React from "react";

const ArrowDropUp = ({className, fill= 'none'}) => {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='25px' height='25px'>
         {" "}
         <g>
            {" "}
            <path fill={fill} d="M0 0h24v24H0z" />{" "}
            <path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z" />{" "}
         </g>{" "}
      </svg>
   );
};

export default ArrowDropUp;
