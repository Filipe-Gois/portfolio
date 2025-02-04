import { Github, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type IconLinkProps = ComponentProps<typeof motion.a> & {
  Icon: "github" | "linkedin";
  href: string;
};

const businessData = {
  githubUri: `https://github.com/Filipe-Gois/`,
  linkedinUri: `https://www.linkedin.com/in/filipeogois/`,
};

const animation = {
  initial: { opacity: 0, x: -200 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -200 },
  transition: { duration: 0.5 },
};

export const IconLink = ({ Icon, href, ...rest }: IconLinkProps) => {
  return (
    <motion.a
      {...rest}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      target="_blank"
      className="hover-animation hover:text-complementary-lightGreen"
      href={href}
    >
      {Icon === "github" ? (
        <Github className="size-8" size={18} />
      ) : (
        <FaLinkedin className="size-8" size={18} />
      )}
    </motion.a>
  );
};

export const ContainerIconLinks = () => {
  return (
    <div className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-2 mt-8 w-max">
      <IconLink
        transition={{ duration: 0.5, delay: 0.5 }}
        Icon={"github"}
        href={businessData.githubUri}
      />
      <IconLink
        transition={{ duration: 0.5, delay: 0.6 }}
        Icon={"linkedin"}
        href={businessData.linkedinUri}
      />
    </div>
  );
};

export const LocationInfoContainer = () => {
  const t = useTranslations("apresentacao");

  return (
    <div className="mt-8 flex flex-col gap-2 w-max">
      <motion.label
        {...animation}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1 items-center text-sm lg:text-base"
      >
        <MapPin size={18} />
        {t("saopaulobrasil")}
      </motion.label>
      <motion.label
        {...animation}
        transition={{ duration: 1.1, delay: 0.1 }}
        className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1 items-center text-sm lg:text-base"
      >
        <span className="w-1 h-1 bg-complementary-darkGreen rounded ml-[0.375rem] " />
        {t("disponIvelparaprojetos")}
      </motion.label>
    </div>
  );
};
