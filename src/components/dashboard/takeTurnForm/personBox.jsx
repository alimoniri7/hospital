import React, { useState } from 'react';

// Components
import CheckBox from '../../checkboxes/CheckBox';
import BtnContained from '../../buttons/BtnContained';
import AddPerson from './AddEditPerson';

// Hooks
import useHover from '../../../../hooks/useHover';

const PersonBox = ({ selected, person, onClick, setPerson }) => {
    const [hoverRef, isHovered] = useHover()
    const [isFormOpen, setIsFormOpen] = useState(false)
    const openForm = ()=>{
        setIsFormOpen(true)
    }
    return (
        <div ref={hoverRef} onClick={onClick} className={`${selected ? '!border-ok !bg-green-50 shadow-lg' : '!border-light-gray bg-white'} ${isHovered ? '!border-x-dark-gray' : 'border-light-gray'} cursor-pointer   border-[1px] gap-6 flex p-5 items-center w-full lg:w-[45%] 2xl:w-[30%] transition-all ease-out duration-200`}>
            
            <CheckBox isHovered={isHovered} selected={selected}/>
            
            <div className='grow'>
                <p className='truncate'>{person.name}</p>
                <p>{person.phone}</p>
            </div>
             {/*editing form  */}
            <AddPerson existingPerson={person} isOpen={isFormOpen} setIsOpen={setIsFormOpen} setPerson={setPerson} />
            
            <BtnContained onClick={openForm} >ویرایش</BtnContained>
        </div>
    );
};

export default PersonBox;