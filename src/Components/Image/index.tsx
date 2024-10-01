"use client";
import Image from "next/image";
import { tv } from "tailwind-variants";
import "./style.css";
import { ImageType } from "@/Types";
import { Slide, Slider } from "../Slider";
import ImageFilipe from "../../../public/Images/Filipe.jpeg";

const ImageStyle = tv({
  base: `rounded-lg w-full`,
  variants: {
    isFloat: {
      true: `float-img`,
    },
  },
});

const ImageComponent = ({
  alt,
  className,
  height,
  src,
  width,
  isFloat = false,
}: ImageType) => {
  return (
    <Image
      className={`${ImageStyle({ isFloat, className })} `}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export const ImageFlip = () => {
  const settingsSlides = {
    grabCursor: true,
    effect: "flip",
    pagination: { clickable: true },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <Slider className="w-full lg:w-3/4" settings={settingsSlides}>
      <Slide>
        <ImageComponent
          className=""
          src={ImageFilipe}
          alt={"Imagem de Filipe Góis, dono do portfólio."}
          width={150}
          height={250}
        />
      </Slide>
      <Slide>
        <ImageComponent
          className=""
          src={ImageFilipe}
          alt={"Imagem de Filipe Góis, dono do portfólio."}
          width={150}
          height={250}
        />
      </Slide>
    </Slider>
  );
};

export default ImageComponent;
