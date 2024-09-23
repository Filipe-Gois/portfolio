import { Swiper, SwiperProps } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";
import "./style.css";

type SliderProps = {
  children: ReactNode;
  settings: SwiperProps;
  className?: string;
};

const SliderStyle = tv({
  base: ``,
});

const Slider = ({ children, settings, className = "" }: SliderProps) => {
  return (
    <Swiper
      className={SliderStyle({ className })}
      modules={[
        Navigation,
        Pagination,
        A11y,
        Scrollbar,
        Autoplay,
        EffectCoverflow,
        EffectCards,
      ]}
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
