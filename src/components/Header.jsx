import React from 'react';

import MRI from '../assets/images/mri.jpg'
import BloodTest from '../assets/images/SBjpg.jpg'
import sergury from '../assets/images/rooms.jpg'
import BtnBanner from './buttons/BtnBanner';
import Slider from './slider/Slider';



const Header = () => {
    return (
        <header className=' container flex gap-6 flex-col lg:flex-row mx-auto mt-10 lg:px-16 px-5  pb-10'>
            <div className='w-full lg:w-1/2 aspect-square '>
                <Slider/>
            </div>
            <div className='w-full lg:w-1/2  flex flex-col gap-6'>
                <div className='w-full flex flex-col lg:flex-row gap-6 '>
                    <div className='w-full lg:w-1/2 aspect-square relative'>
                        <img src={MRI} alt="mri" className='object-cover h-full' />
                        <BtnBanner>عکس برداری</BtnBanner>
                    </div>
                    <div className='w-full lg:w-1/2 aspect-square relative '>
                    <img src={BloodTest} alt="mri" className='object-cover h-full' />
                    <BtnBanner>آزمایشگاه</BtnBanner>

                    </div>
                </div>
                <div className='w-full h-full aspect-square lg:aspect-auto relative'>
                <img src={sergury} alt="mri" className='object-cover h-full' />
                <BtnBanner>اتاق عمل</BtnBanner>
                </div>
            </div>
        </header>
    );
};

export default Header;