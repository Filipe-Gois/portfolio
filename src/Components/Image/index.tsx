import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { tv } from "tailwind-variants";

const ImageStyle = tv({
  base: `primary-image p-[6px] border-lightScheme-tertiary border-x-8 border-b-8 border-opacity-45 relative before:absolute after:h-[80%] before:h-[80%] after:absolute`,
});

type ImageProps = {
  src: string | StaticImport;
  width: number | `${number}`;
  height: number | `${number}`;
  alt: string;
  className: string;
};

const ImageComponent = ({ alt, className, height, src, width }: ImageProps) => {
  return (
    <Image
      className={ImageStyle({ className })}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
