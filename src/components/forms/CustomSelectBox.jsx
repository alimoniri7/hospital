import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ArrowDropUp from "../../assets/icons/ArrowDropUp";


const Select = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 1.1rem 0.5rem;
  background-color: ${props=> props.isOpen? "#cbcbcb" : "#e6e6e6"};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  * {
    cursor: pointer;
  }
  div {
    position: absolute;
    top: 100%;
    left: 0;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transition: 0.2s ease-out;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0 0 7px 7px;
    max-height: 150px;
    overflow: scroll;
    z-index: 10000;
    /* width */
    &::-webkit-scrollbar {
      width: 6px;
      height: 100%;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;

    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #acacac;
      border-radius: 100px;

    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #8f8f8f;
      
    }
  }
  .placeholder {
    opacity: 0.5;
  }
  .selectBoxArrow {
    opacity: 0.8;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: 0.3s ease-out;
    border-right: 1px solid #00000052;
  }

  .selectOptions {
    background-color: #e8e8e8;
    border: none;
    text-align: right;
    padding: 0.5rem 0.5rem;
    min-height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover{
        background-color: #f4f4f4;
    }
  }
`;

const CustomSelectBox = ({
  width = "180px",
  height = "30px",
  onChange,
  name,
  id,
  value,
  placehodler = "گزینه ها",
  options=['option 1', 'option 2']
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const selectBox = useRef();
  let input = useRef();


  // opne options by clicking on selectBox
  const openOptions = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  // End

  // handel clicks on clicking select items
  const selectItem = (e) => {
    setSelectedValue(() => {
      return e.target.value;
    });
    input.current.setAttribute("value", e.target.value);
    input.current.focus();
  };
  // End

  // close dropdown with clicking outside
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isOpen &&
        selectBox.current &&
        !selectBox.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isOpen]);
  // End


  return (
    <>
      <Select
      className={`!w-full`}
        onClick={openOptions}
        width={width}
        height={height}
        isOpen={isOpen}
        ref={selectBox}
      >
        <input
        readOnly
          ref={input}
          name={name}
          id={id}
          onChange={onChange}
          onFocus={onChange}
          onBlur={onChange}
          className="w-0 h-0 outline-none outline-0 border-none absolute"
        />

        {/* handle placeholder and selected option */}
        {selectedValue ? (
          <p>{selectedValue}</p>
        ) : (
          <p className="placeholder">{placehodler}</p>
        )}

        <ArrowDropUp className="selectBoxArrow" />

        {/* create list of options */}
        <div>
          {options.map((option, index) => (
            <input
              key={option}
              type="button"
              value={option}
              onClick={selectItem}
              className="selectOptions"
              style={
                options.length === index + 1
                  ? { borderBottom: "none" }
                  : { borderBottom: "1px solid #93939328" }
              }
            />
          ))}
        </div>
      </Select>
    </>
  );
};

export default CustomSelectBox;
