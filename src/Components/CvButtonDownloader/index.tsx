"use client";
import { Download } from "lucide-react";

const CvButtonDownloader = () => {
  return (
    <a
      className="w-max h-max mt-8 button-cv"
      href="/curriculo_filipe_gois.pdf"
      download="curriculo_filipe_gois.pdf"
    >
      <button className="flex gap-2 hover:!bg-opacity-80 transition-all ease-in-out duration-300 items-center rounded text-lightScheme-primary dark:text-darkScheme-primary bg-darkScheme-primary dark:bg-lightScheme-primary p-2 relative">
        <Download /> Baixar Currículo
      </button>
    </a>
  );
};

export default CvButtonDownloader;
