import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ProjectImage = Omit<ImageType, "height"> & Omit<ImageType, "width">;

export type ProjectType = {
  title: string;
  description: string;
  skills: SkillName[];
  image: ProjectImage;
  urlRepository: string;
  urlDeploy?: string;
  isLeftImage?: boolean;
};

export type ImageType = {
  src: string | StaticImport;
  width?: number | `${number}`;
  height?: number | `${number}`;
  alt: string;
  className?: string;
  layout?: string;
  isFloat?: boolean;
};

export type SkillName =
  | "Flutter"
  | "React Native"
  | "Dart"
  | "TypeScript"
  | "JavaScript"
  | "Next.JS"
  | "React.JS"
  | "HTML5"
  | "CSS3"
  | "SASS"
  | "TailWindCss"
  | "Figma"
  | "C#"
  | "SQL Server"
  | "MongoDB"
  | "Git"
  | "Azure DevOps"
  | "Microsoft Azure"
  | "Trello";
