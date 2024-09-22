import Image from "next/image";
import { tv } from "tailwind-variants";
import "./style.css";
import { ImageType } from "@/Types";

const ImageStyle = tv({
  base: `primary-image p-[6px] border-lightScheme-tertiary border-x-8 border-b-8 border-opacity-45 relative before:absolute after:h-[80%] before:h-[80%] after:absolute`,
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
  layout,
  isFloat = false,
}: ImageType) => {
  return (
    <Image
      className={`${ImageStyle({ isFloat })} ${className} `}
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
    />
  );
};

export const ImageFlip = ({
  alt,
  className,
  height,
  src,
  width,
  layout,
  isFloat = false,
}: ImageType) => (
  <ImageComponent
    alt={alt}
    className={className}
    height={height}
    src={src}
    layout={layout}
    width={width}
    isFloat={isFloat}
  />
);

export default ImageComponent;
