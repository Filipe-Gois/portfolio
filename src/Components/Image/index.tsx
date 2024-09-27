import Image from "next/image";
import { tv } from "tailwind-variants";
import "./style.css";
import { ImageType } from "@/Types";

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

export const ImageFlip = ({
  alt,
  className,
  height,
  src,
  width,
  isFloat = false,
}: ImageType) => (
  <ImageComponent
    alt={alt}
    className={className}
    height={height}
    src={src}
    width={width}
    isFloat={isFloat}
  />
);

export default ImageComponent;
