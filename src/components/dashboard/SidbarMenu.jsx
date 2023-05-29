import React from 'react';
import BtnMenu from '../buttons/BtnMenu';

const SidbarMenu = () => {
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
        <div className="flex flex-col w-56">
            {
                menu.map(p=><BtnMenu item={p} key={p.label} />)
            }
        </div>
    );
};

export default SidbarMenu;