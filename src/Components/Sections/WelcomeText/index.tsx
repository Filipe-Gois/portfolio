"use client";
import { MapPin, Github } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import "./style.css";
import CvButtonDownloader from "@/components/CvButtonDownloader";
import { ImageFlip } from "@/components/Image";
import { TitleAnimated } from "@/components/Title";
import { useTranslations } from "next-intl";

const WelcomeText = () => {
  const t = useTranslations("apresentacao");

  const businessData = {
    githubUri: `https://github.com/Filipe-Gois/`,
    linkedinUri: `https://www.linkedin.com/in/filipe-góis/`,
  };

  return (
    <section className="w-full h-max flex flex-col items-center lg:flex-row-reverse">
      <div className="h-full w-full md:w-3/4 lg:w-2/5 flex items-center justify-center">
        <ImageFlip />
      </div>
      <div className="flex w-full flex-col gap-1 mt-8 lg:mt-0">
        <TitleAnimated />

        <p className="paragraph mt-2">{t("descricao")}</p>

        <CvButtonDownloader />

        <div className="mt-8 flex flex-col gap-2 w-max">
          <label className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1 text-sm lg:text-base">
            <MapPin size={18} />
            {t("saopaulobrasil")}
          </label>
          <label className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-1 items-center text-sm lg:text-base">
            <span className="w-1 h-1 bg-complementary-darkGreen rounded ml-[0.375rem] " />
            {t("disponIvelparaprojetos")}
          </label>
        </div>

        <div className="text-darkScheme-primary dark:text-lightScheme-primary flex gap-2 mt-8 w-max">
          <a
            className="hover:text-complementary-lightGreen hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href={businessData.githubUri}
            target="_blank"
          >
            <Github className="size-8" size={18} />
          </a>
          <a
            className="hover:text-complementary-lightGreen hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href={businessData.linkedinUri}
            target="_blank"
          >
            <FaLinkedin className="size-8" size={18} />
          </a>
          <a
            className="hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
            href=""
            target="_blank"
          ></a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeText;
