"use client";
import ImageComponent from "@/components/Image";
import ImageFilipe from "../../../../public/Images/Filipe.jpeg";
import Tag from "@/components/Tag";
import { useTranslations } from "next-intl";

const WelcomeTopic = () => {
  const t = useTranslations("WelcomeTopic");

  return (
    <section id="about-me" className="w-full h-full flex flex-col items-center">
      <Tag title={t("titulo")} />

      <div className="mt-16 w-full flex flex-col md:flex-row justify-between items-center h-full">
        <div className="h-full w-4/5 md:w-full lg:w-2/5 xl:w-2/5 2xl:w-2/6 flex items-center justify-center">
          <ImageComponent
            isFloat
            src={ImageFilipe}
            alt={"Imagem de Filipe Góis, dono do portfólio."}
            width={150}
            height={250}
          />
        </div>

        <div className="mt-4 flex md:items-end flex-col gap-6 md:max-w-[50%] w-full md:mt-0">
          <h2 className="dark:text-lightScheme-primary text-darkScheme-primary text-2xl lg:text-4xl">
            {t("sub-titulo")}
          </h2>
          <p className="paragraph">{t("descricao")}</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeTopic;
