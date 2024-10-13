"use client";
import { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

type SubTitleProps = ComponentProps<typeof motion.h2> & {
  isSm?: boolean;
};

const SubTitle = ({ className, isSm, children, ...rest }: SubTitleProps) => {
  const style = tv({
    base: "dark:text-lightScheme-primary text-darkScheme-primary text-2xl lg:text-4xl",
    variants: {
      isSm: {
        true: "mt-8 dark:text-lightScheme-tertiary text-justify text-sm lg:max-w-[85%] lg:text-base",
      },
    },
    defaultVariants: {
      isSm: false,
    },
  });

  return (
    <motion.h2
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className={style({ isSm, className })}
      {...rest}
    >
      {children}
    </motion.h2>
  );
};

export default SubTitle;
