import { Download } from "lucide-react";
// import { Button } from "@/components/ui/button";

const CvButtonDownloader = () => {
  return (
    <a
      className="w-max h-max"
      href="/curriculo_filipe_gois.pdf"
      download="curriculo_filipe_gois.pdf"
    >
      <button className="flex gap-2 items-center rounded text-lightScheme-primary dark:text-darkScheme-primary bg-darkScheme-primary dark:bg-lightScheme-primary p-2 mt-3 ">
        <Download /> Baixar Currículo
      </button>
    </a>
  );
};

export default CvButtonDownloader;
