"use client";
import "./style.css";
import CvButtonDownloader from "@/components/CvButtonDownloader";
import { ImageFlip } from "@/components/Image";
import { TitleAnimated } from "@/components/Title";
import { useTranslations } from "next-intl";
import Paragraph from "@/components/Paragraph";
import { SectionContainer } from "@/components/Containers";
import { ContainerIconLinks, LocationInfoContainer } from "./IconLink";
import { motion } from "framer-motion";

const WelcomeText = () => {
  const t = useTranslations("apresentacao");

  return (
    <SectionContainer isWelcomeText>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.6 }}
        className="h-full w-full md:w-3/4 lg:w-2/5 flex items-center justify-center origin-center"
      >
        <ImageFlip />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
        className=" flex w-full flex-col gap-1 mt-8 lg:mt-0"
      >
        <TitleAnimated />

        <Paragraph
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-start"
        >
          {t("descricao")}
        </Paragraph>

        <CvButtonDownloader />

        <LocationInfoContainer />

        <ContainerIconLinks />
      </motion.div>
    </SectionContainer>
  );
};

export default WelcomeText;
