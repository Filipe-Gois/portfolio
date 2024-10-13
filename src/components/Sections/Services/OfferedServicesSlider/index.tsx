"use client";
import { ServiceCard } from "@/components/Cards";
import { Slide, Slider } from "@/components/Slider";
import { offeredService } from "@/Types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const OfferedServicesSlider = () => {
  const t = useTranslations("Services");

  const offeredServices: offeredService[] = [
    {
      title: t("mobile.titulo"),
      description: t("mobile.descricao"),
    },
    {
      title: t("web.titulo"),
      description: t("web.descricao"),
    },
    {
      title: t("backend.titulo"),
      description: t("backend.descricao"),
    },
    {
      title: t("cloud.titulo"),
      description: t("cloud.descricao"),
    },
    {
      title: t("performance.titulo"),
      description: t("performance.descricao"),
    },
    {
      title: t("design.titulo"),
      description: t("design.descricao"),
    },
    {
      title: t("devops.titulo"),
      description: t("devops.descricao"),
    },
    {
      title: t("project_management.titulo"),
      description: t("project_management.descricao"),
    },
    {
      title: t("database.titulo"),
      description: t("database.descricao"),
    },
    {
      title: t("fullstack.titulo"),
      description: t("fullstack.descricao"),
    },
    {
      title: t("support.titulo"),
      description: t("support.descricao"),
    },
  ];

  const uniqueOfferedServices = new Set<offeredService>(offeredServices);

  const [settingsSlides, setSettingsSlides] = useState({
    spaceBetween: 0,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    navigation: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSettingsSlides({
          ...settingsSlides,
          slidesPerView: 1,
          spaceBetween: 20,
        });
      } else if (window.innerWidth < 1280) {
        setSettingsSlides({
          ...settingsSlides,
          slidesPerView: 2,
          spaceBetween: 0,
        });
      } else {
        setSettingsSlides({
          ...settingsSlides,
          slidesPerView: 3,
          spaceBetween: 0,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Slider className="" settings={settingsSlides}>
      {Array.from(uniqueOfferedServices).map((service, index) => {
        return (
          <Slide className="mb-8" key={index}>
            <ServiceCard service={service} />
          </Slide>
        );
      })}
    </Slider>
  );
};

export default OfferedServicesSlider;
