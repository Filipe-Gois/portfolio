import {
  TbBrandReactNative,
  TbBrandFlutter,
  TbBrandCypress,
} from "react-icons/tb";
import { IoLogoHtml5, IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass, FaTrello, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiDart,
  SiTailwindcss,
  SiMongodb,
  SiStyledcomponents,
  SiKotlin,
  SiGooglecloud,
  SiSupabase
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { VscAzureDevops } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

import { SkillName } from "@/Types";
import { JSX } from "react";

const iconSize = 40;

const iconMap: Record<SkillName, JSX.Element> = {
  Flutter: <TbBrandFlutter size={iconSize} />,
  Kotlin: <SiKotlin size={iconSize} />,
  "React Native": <TbBrandReactNative size={iconSize} />,
  Dart: <SiDart size={iconSize} />, // Use um ícone para Dart
  TypeScript: <SiTypescript size={iconSize} />,
  JavaScript: <SiJavascript size={iconSize} />,
  "Next.JS": <SiNextdotjs size={iconSize} />,
  "React.JS": <TbBrandReactNative size={iconSize} />,
  HTML5: <IoLogoHtml5 size={iconSize} />, // Substitua pelos ícones corretos
  CSS3: <IoLogoCss3 size={iconSize} />,
  SASS: <FaSass size={iconSize} />,
  TailWindCss: <SiTailwindcss size={iconSize} />,
  Figma: <IoLogoFigma size={iconSize} />,
  "C#": <TbBrandCSharp size={iconSize} />,
  "SQL Server": <DiMsqlServer size={iconSize} />,
  MongoDB: <SiMongodb size={iconSize} />,
  Git: <FaGitAlt size={iconSize} />,
  "Azure DevOps": <VscAzureDevops size={iconSize} />,
  "Microsoft Azure": <VscAzure size={iconSize} />,
  Firebase: <IoLogoFirebase size={iconSize} />,
  Supabase: <SiSupabase size={iconSize} />,
  Docker: <FaDocker size={iconSize} />,
  Trello: <FaTrello size={iconSize} />,
  "Styled Components": <SiStyledcomponents size={iconSize} />,
  Cypress: <TbBrandCypress size={iconSize} />,
  "Google Cloud Platform": < SiGooglecloud size={iconSize} />
};

type SkillIconProps = {
  icon: SkillName;
};

const SkillIcon = ({ icon }: SkillIconProps) => {
  const iconSkill = iconMap[icon];
  return (
    <figure className="w-max h-full flex flex-col items-center cursor-pointer hover:!text-complementary-lightGreen transition-all ease-in-out duration-300 hover:scale-125">
      {iconSkill}
      <figcaption className="!paragraph">{icon}</figcaption>
    </figure>
  );
};

export default SkillIcon;
