import {
  TbBrandReactNative,
  TbBrandFlutter,
  TbBrandCypress,
} from "react-icons/tb";
import { IoLogoHtml5, IoLogoFigma } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass, FaTrello, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiDart,
  SiTailwindcss,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMicrosoftazure,
  SiAzuredevops,
  SiStyledcomponents,
} from "react-icons/si";
import { SkillName } from "@/Types";

const iconSize = 40;

const iconMap: Record<SkillName, JSX.Element> = {
  Flutter: <TbBrandFlutter size={iconSize} />,
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
  "C#": <SiCsharp size={iconSize} />,
  "SQL Server": <SiMicrosoftsqlserver size={iconSize} />,
  MongoDB: <SiMongodb size={iconSize} />,
  Git: <FaGitAlt size={iconSize} />,
  "Azure DevOps": <SiAzuredevops size={iconSize} />,
  "Microsoft Azure": <SiMicrosoftazure size={iconSize} />,
  Trello: <FaTrello size={iconSize} />,
  "Styled Components": <SiStyledcomponents size={iconSize} />,
  Cypress: <TbBrandCypress size={iconSize} />,
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
