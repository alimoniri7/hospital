import React from 'react';

const BtnBanner = ({children}) => {
    return (
        <button className=' font-semibold text-dark-gray text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white py-5 px-8 rounded-md hover:py-6 hover:px-9 whitespace-nowrap hover:outline-black-gray' >
            {children}
        </button>
    );
};

export default BtnBanner;