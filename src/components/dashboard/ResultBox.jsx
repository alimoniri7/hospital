import React from 'react';
// Components
import BtnContained from '../buttons/BtnContained';

const ResultBox = ({data}) => {
    return (
        <div className={`w-72 h-64 rounded-b-lg mt-5 ${data.resultStatus === 'آماده' && 'bg-ok'} ${data.resultStatus === 'در صف بررسی' && 'bg-yellow'} ${data.resultStatus === 'لغو شده' && 'bg-error'}`}>
            <div className='bg-white-gray w-full h-[95%] rounded-b-lg flex flex-col items-center' >
                <div className='h-1/5 w-full flex items-center justify-center '>
                    <p className='m-auto text-center text-2xl font-bold my-auto text-dark-gray '>{data.name}</p>
                </div>
                <div className='h-4/5 bg-white w-[95%] p-3 flex flex-col items-start justify-between'>
                    <div className='w-full flex flex-col gap-4 items-start'>
                        <div  className='w-full flex '>
                            <p className='w-20 font-semibold '>تاریخ:</p>
                            <p className=''>{data.date}</p>
                        </div>
                        <div className='w-full flex items-start   '>
                            <p className='w-20 font-semibold  '>جزئیات:</p>
                            <p className='max-h-20 grow  overflow-hidden  line-clamp-2'>{data.details}</p>
                        </div>
                        <div className='w-full flex '>
                            <p className={`w-20 font-semibold `}>وضعیت جواب:</p>
                            <p className={` font-semibold ${data.resultStatus === 'آماده' && 'text-ok'} ${data.resultStatus === 'در صف بررسی' && 'text-yellow'} ${data.resultStatus === 'لغو شده' && 'text-error'}`}>{data.resultStatus}</p>
                        </div>
                    </div>
                    <div className=' w-full flex justify-between'>
                        <BtnContained>مشاهده نسخه</BtnContained>
                        {
                            data.resultStatus ==='آماده' && <BtnContained dark>دانلود جواب</BtnContained>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;