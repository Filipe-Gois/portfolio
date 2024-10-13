import React, { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

type ParagraphProps = ComponentProps<typeof motion.p> & {
  children: ReactNode;
};

const Paragraph = ({ className, children, ...rest }: ParagraphProps) => {
  const style = tv({
    base: "dark:text-lightScheme-tertiary text-darkScheme-primary text-justify text-sm lg:max-w-[85%] lg:text-base",
  });
  return (
    <motion.p {...rest} className={style({ className })}>
      {children}
    </motion.p>
  );
};

export default Paragraph;
