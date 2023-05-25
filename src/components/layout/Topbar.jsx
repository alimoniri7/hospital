import React from 'react';

// icons
import ClockFilled from '../../assets/icons/ClockFilled';
import TwitterFilled from '../../assets/icons/TwitterFilled';
import PhoneFilled from '../../assets/icons/PhoneFilled';
import LocationFilled from '../../assets/icons/LocationFilled';
import FacebookFilled from '../../assets/icons/LocationFilled';
import InstagramFilled from '../../assets/icons/InstagramFilled'

// colors
import tailwindcolors from 'tailwindcss/colors';

const Topbar = () => {
    console.log(tailwindcolors);
    return (
        <div className='bg-black-gray w-full hidden sm:flex justify-center items-start' >
            <div className='container mx-auto p-2 flex items-center justify-between' >

                <div className='flex gap-3 items-center' >
                    <div className='flex items-center gap-1'>
                         <PhoneFilled width='16' height='16' fill={tailwindcolors.white}/>
                        <p dir='ltr' className='text-white text-left text-sm' >
                            +98 912 022 9389
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <LocationFilled width='16' height='16' fill={tailwindcolors.white}/>
                        <p className='text-white text-xs' >
                        ایران، تهران، دریاچه چیتگر
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <ClockFilled width='16' height='16' fill={tailwindcolors.white}/>
                        <p className='text-white text-xs' >
                        تمام هفته 24/7
                        </p>
                    </div>

                </div>
                <div className='flex items-center gap-2' >
                    <a href='#' className='leading-none'>
                        <FacebookFilled width='16' height='16' fill={tailwindcolors.white}/>
                    </a>
                    <a href='#' className='leading-none'>
                        <TwitterFilled width='16' height='16' fill={tailwindcolors.white}/>
                    </a>

                    <a href='#' className='leading-none'>
                        <InstagramFilled width='16' height='16' fill={tailwindcolors.white}/>
                    </a>
                </div >
            </div>
        </div>
    );
};

export default Topbar;