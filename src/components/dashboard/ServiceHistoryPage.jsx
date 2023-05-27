import React from 'react';
import ResultBox from './ResultBox';
import { results } from "../../../data";


const ServiceHistoryPage = () => {
    return (
        <>
            <div className="px-9 pt-9 pb-1 border-b-2 border-gray">
               <h1 className="text-3xl text-dark-gray font-bold">
                  سوابق خدمات
               </h1>
            </div>
            <div className="flex gap-x-6 gap-y-8 justify-center items-start flex-wrap pb-9">
               {results.map((result) => (
                  <ResultBox key={result.date} data={result} />
               ))}
            </div>
        </>
    );
};

export default ServiceHistoryPage;