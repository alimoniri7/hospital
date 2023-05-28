import React from 'react';
import CheckBox from '../../checkboxes/CheckBox';
import useHover from '../../../../hooks/useHover';
import BtnContained from '../../buttons/BtnContained';

const PersonBox = ({ selected, person, onClick }) => {
    const [hoverRef, isHovered] = useHover()
    return (
        <div ref={hoverRef} onClick={onClick} className={`${selected ? '!border-ok !bg-green-50 shadow-lg' : '!border-light-gray bg-white'} ${isHovered ? '!border-x-dark-gray' : 'border-light-gray'} cursor-pointer   border-[1px] gap-6 flex p-5 items-center w-full lg:w-[45%] 2xl:w-[30%] transition-all ease-out duration-200`}>
            <CheckBox isHovered={isHovered} selected={selected}/>
            <div className='grow'>
                <p className='truncate'>{person.name}</p>
                <p>{person.phone}</p>
            </div>
            <BtnContained>ویرایش</BtnContained>
        </div>
    );
};

export default PersonBox;

// ${selected ? 'bg-ok' : 'border-light-gray'}