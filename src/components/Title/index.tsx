import { usePathname } from "next/navigation";
import "./style.css";
import { motion } from "framer-motion";

export const TitleAnimated = () => {
  const pathname = usePathname();

  const isEnglish = pathname.includes("/en");

  return (
    <motion.h1
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
      className={`dark:text-lightScheme-primary text-darkScheme-primary text-2xl lg:text-4xl ${
        isEnglish ? "titulo-animado-en" : "titulo-animado"
      }`}
    >
      <span></span>
    </motion.h1>
  );
};
