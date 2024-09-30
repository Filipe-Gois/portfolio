import Tag from "@/components/Tag";
import { useTranslations } from "next-intl";
import OfferedServicesSlider from "./OfferedServicesSlider";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section id="services" className="w-full h-full flex flex-col items-center">
      <Tag title={t("titulo")} />

      <h2 className="paragraph mt-8">{t("sub-titulo")}</h2>
      <div className="mt-8 w-full">
        <OfferedServicesSlider />
      </div>
    </section>
  );
};

export default Services;
