import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./MainSwiper.module.scss";
const s = styles;

// import required modules
import { Navigation } from "swiper";

export const NewsSwiper = () => {
  const [name, setName] = useState("напиши имя");
  const exampleImg =
    "https://www.interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg";
  return (
    <Swiper navigation={true} modules={[Navigation]} className={s.swiper}>
      {[1, 2, 3].map((e, i) => (
        <>
          <SwiperSlide className={s.swiperSlide}>
            <img className={s.swiperSlideImage} src={exampleImg}></img>
            <div className={s.swiperSlideDate}>
              <p>Понедельник, 12 июня 2023</p>
              <p>0:02</p>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};
