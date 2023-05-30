import React from "react";
import { useRef } from "react";
import BtnContained from "../buttons/BtnContained";
import Photograph from "../../assets/icons/Photograph";

const AssetPicker = ({ children }) => {
   const inputFile = useRef(null);
   const onButtonClick = () => {
      inputFile.current.click();
   };
   return (
      <div>
         <input type="file" id="file" ref={inputFile} className="hidden" />
         <BtnContained className="py-7" onClick={onButtonClick}>
            <p>{children}</p>
            <Photograph/>
         </BtnContained>
      </div>
   );
};

export default AssetPicker;
