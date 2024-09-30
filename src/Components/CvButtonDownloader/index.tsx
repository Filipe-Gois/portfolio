"use client";
import { Download } from "lucide-react";
import "./style.css";
import { useTranslations } from "next-intl";

const CvButtonDownloader = () => {
  const t = useTranslations("apresentacao");
  return (
    <a
      className="w-max h-max mt-8 button-cv"
      href="/Documents/curriculo_filipe_gois.pdf"
      download="curriculo_filipe_gois.pdf"
    >
      <button className="flex gap-2 hover:!bg-complementary-lightGreen transition-all ease-in-out duration-300 hover:scale-125 items-center rounded text-lightScheme-primary dark:text-darkScheme-primary bg-darkScheme-primary dark:bg-lightScheme-primary p-2 relative">
        <Download /> {t("baixarcurriculo")}
      </button>
    </a>
  );
};

export default CvButtonDownloader;
