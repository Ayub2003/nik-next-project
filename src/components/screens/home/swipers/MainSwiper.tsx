import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./MainSwiper.module.scss";

export const MainSwiper: FC = () => {
  const pngs = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fazbyka.ru%2Fpriroda&psig=AOvVaw2YEIDtP48wOi0UsozzQHGK&ust=1681429737835000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND6xYPEpf4CFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fru%2Fphotos%2F%25D0%25BF%25D1%2580%25D0%25B8%25D1%2580%25D0%25BE%25D0%25B4%25D0%25B0-%25D0%25B2%25D0%25BE%25D0%25B4%25D1%258B-%25D0%25BE%25D0%25B7%25D0%25B5%25D1%2580%25D0%25BE-%25D0%25BE%25D1%2581%25D1%2582%25D1%2580%25D0%25BE%25D0%25B2-%25D0%25BF%25D0%25B5%25D0%25B9%25D0%25B7%25D0%25B0%25D0%25B6-3082832%2F&psig=AOvVaw2YEIDtP48wOi0UsozzQHGK&ust=1681429737835000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND6xYPEpf4CFQAAAAAdAAAAABAI",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fphotos%2Fnature&psig=AOvVaw2YEIDtP48wOi0UsozzQHGK&ust=1681429737835000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND6xYPEpf4CFQAAAAAdAAAAABAf",
  ];
  return (
    <div
      style={{ height: "200px", width: "200px", backgroundColor: "red" }}
    ></div>
  );
};
