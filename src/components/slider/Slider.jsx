import React from "react";

// Swiper Components & Tools
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";

// Images
import MRI from "../../assets/images/mri.jpg";
import BloodTest from "../../assets/images/SBjpg.jpg";
import sergury from "../../assets/images/rooms.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import SliderBtn from "./SliderBtn";

const Slider = () => {
   return (
      <div className="w-full h-full">
         <Swiper
            // install Swiper modules
            modules={[Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            className="h-full w-full relative"
            loop
            autoplay={{ delay: 3000 }}
            
         >
            <SwiperSlide>
               <img className="w-full h-full object-cover" src={MRI} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  className="w-full h-full object-cover"
                  src={BloodTest}
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  className="w-full h-full object-cover"
                  src={sergury}
                  alt=""
               />
            </SwiperSlide>
            <SliderBtn />
         </Swiper>
      </div>
   );
};

export default Slider;
