"use client";
import { SectionContainer } from "@/components/Containers";
import SkillIcon from "@/components/SkillIcon";
import { Slide, Slider } from "@/components/Slider";
import Tag from "@/components/Tag";
import { SkillName } from "@/Types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Skills = () => {
  const t = useTranslations("Skills");

  const skills: SkillName[] = [
    "Flutter",
    "React Native",
    "Dart",
    "TypeScript",
    "JavaScript",
    "Next.JS",
    "React.JS",
    "HTML5",
    "CSS3",
    "SASS",
    "TailWindCss",
    "Figma",
    "C#",
    "SQL Server",
    "MongoDB",
    "Git",
    "Azure DevOps",
    "Microsoft Azure",
    "Trello",
    "Cypress",
  ];

  const uniqueSkills = new Set<SkillName>(skills);

  const [settingsSlides, setSettingsSlides] = useState({
    spaceBetween: 0,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
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
        setSettingsSlides({ ...settingsSlides, slidesPerView: 1 });
      } else {
        setSettingsSlides({ ...settingsSlides, slidesPerView: 3 });
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
    <SectionContainer id="skills">
      <Tag title={t("titulo")} />

      <div className="w-full h-full mt-8">
        <Slider className="" settings={settingsSlides}>
          {Array.from(uniqueSkills).map((skill, index) => {
            return (
              <Slide className="mb-8" key={index}>
                <SkillIcon icon={skill} />
              </Slide>
            );
          })}
        </Slider>
      </div>
    </SectionContainer>
  );
};

export default Skills;
