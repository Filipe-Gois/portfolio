import { Swiper, SwiperProps } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
  EffectCards,
  EffectFlip,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        EffectFlip,
      ]}
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
