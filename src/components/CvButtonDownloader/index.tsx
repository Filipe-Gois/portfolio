"use client";
import { Download } from "lucide-react";
import "./style.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const CvButtonDownloader = () => {
  const t = useTranslations("apresentacao");
  return (
    <motion.a
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-max h-max mt-8 button-cv"
      href="/Documents/curriculo_filipe_gois.pdf"
      download="curriculo_filipe_gois.pdf"
    >
      <button className="flex gap-2 hover:!bg-complementary-lightGreen hover-animation items-center rounded text-lightScheme-primary dark:text-darkScheme-primary 
      font-semibold bg-darkScheme-primary dark:bg-lightScheme-primary p-2 relative">
        <Download /> {t("baixarcurriculo")}
      </button>
    </motion.a>
  );
};

export default CvButtonDownloader;
