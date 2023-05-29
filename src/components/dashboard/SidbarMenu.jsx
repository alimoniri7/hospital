import React from 'react';
import BtnMenu from '../buttons/BtnMenu';

const SidbarMenu = ({isOpne}) => {
    const menu = [
        {
           label: "جواب گیری",
           path: "/dashboard/results",
        },
        {
           label: "خدمات نوبت دهی",
           submenu: [
              {
                 label: "نوبت گیری",
                 path: "/dashboard/take-turn",
              },
              {
                 label: "سوابق نوبت ها",
                 path: "/dashboard/take-turn-history",
              },
           ],
        },
     ];
    return (
        <div className={`${isOpne ? 'translate-y-16' : '-translate-y-32 '} md:translate-y-0 z-40  bg-white-gray absolute top-0 left-0 md:static transition-all ease-out duration-200 flex flex-col md:w-56 w-full`}>
            {
                menu.map(p=><BtnMenu item={p} key={p.label} />)
            }
        </div>
    );
};

export default SidbarMenu;