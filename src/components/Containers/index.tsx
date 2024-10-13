import { ReactNode } from "react";
import { tv } from "tailwind-variants";

type ContainerProps = {
  children: ReactNode;
};

export const MainContainer = ({ children }: ContainerProps) => {
  return <main className="h-full w-full mt-14">{children}</main>;
};

export const ContainerGrid = ({
  children,
  isSecondary,
}: ContainerProps & { isSecondary?: boolean }) => {
  const containerGridStyle = tv({
    base: "w-full flex justify-center py-10",
    variants: {
      isSecondary: {
        true: "dark:bg-darkScheme-secondary bg-lightScheme-tertiary",
        false: "dark:bg-darkScheme-primary bg-lightScheme-secondary",
      },
    },
    defaultVariants: {
      isSecondary: false,
    },
  });

  return <div className={containerGridStyle({ isSecondary })}>{children}</div>;
};

export const Grid = ({ children }: ContainerProps) => (
  <div className="flex h-full w-[85vw] flex-col items-center">{children}</div>
);

export const SectionContainer = ({
  children,
  id,
  isWelcomeText,
}: ContainerProps & { id?: string; isWelcomeText?: boolean }) => {
  const style = tv({
    base: "w-full h-full flex flex-col items-center",

    variants: {
      isWelcomeText: {
        true: "h-max lg:flex-row-reverse",
      },
    },
    defaultVariants: {
      isWelcomeText: false,
    },
  });

  return (
    <section id={id} className={style({ isWelcomeText })}>
      {children}
    </section>
  );
};
