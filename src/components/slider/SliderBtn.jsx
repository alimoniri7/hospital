import React from 'react';

import { useSwiper } from "swiper/react";
import ArrowDropUp from "../../assets/icons/ArrowDropUp";
import BtnContained from '../buttons/BtnContained';


const SliderBtn = () => {
    const swaper = useSwiper()

    return (
        <div>
            <BtnContained iconButton  className='!absolute z-10 top-1/2 left-1 -translate-y-1/2 -rotate-90' onClick={()=>swaper.slideNext()} ><ArrowDropUp/></BtnContained>
            <BtnContained iconButton  className='!absolute z-10 top-1/2 right-1 -translate-y-1/2 rotate-90' onClick={()=>swaper.slidePrev()}><ArrowDropUp/></BtnContained>
        </div>
    );
};

export default SliderBtn;