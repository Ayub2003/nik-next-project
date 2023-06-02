import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./MainSwiper.module.scss"
const s = styles

// import required modules
import { Navigation } from "swiper";

export const NewsSwiper = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className={s.swiper}>

                {['red', 'blue', 'green'].map((e,i)=>  <SwiperSlide style={{backgroundColor: e}}>Slide  {i+1}</SwiperSlide>)}


            </Swiper>
        </>
    );
}
