"use client";
import ImageComponent from "@/components/Image";
import Tag from "@/components/Tag";
import { useTranslations } from "next-intl";
import { SectionContainer } from "@/components/Containers";
import Paragraph from "@/components/Paragraph";
import SubTitle from "@/components/SubTitle";
import { motion } from "framer-motion";

const WelcomeTopic = () => {
  const t = useTranslations("WelcomeTopic");

  return (
    <SectionContainer id="about-me">
      <Tag title={t("titulo")} />

      <div className="mt-16 w-full flex flex-col lg:flex-row justify-between items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.7 }}
          className="h-full w-4/5  lg:w-2/5 xl:w-2/5 2xl:w-2/6 flex items-center justify-center"
        >
          <ImageComponent
            isFloat
            src={"/Images/Filipe2.jpeg"}
            alt={"Imagem de Filipe Góis, dono do portfólio."}
            width={150}
            height={250}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.7 }}
          className="mt-4 flex lg:items-end flex-col gap-6 lg:max-w-[50%] w-full lg:mt-0 overflow-x-hidden"
        >
          <SubTitle
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
          >
            {t("sub-titulo")}
          </SubTitle>
          <Paragraph
            className="text-start md:text-end"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.7 }}
          >
            {t("descricao")}
          </Paragraph>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default WelcomeTopic;
