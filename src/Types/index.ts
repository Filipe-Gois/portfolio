import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ProjectImage = Omit<ImageType, "height"> & Omit<ImageType, "width">;

export type ProjectType = {
  title: string;
  description: string;
  skills: SkillName[];
  image: ProjectImage;
  urlRepository?: string;
  urlDeploy?: string;
  urlVideoApplication: string;
  isLeftImage?: boolean;
};

export type ImageType = {
  src: string | StaticImport;
  width?: number | `${number}`;
  height?: number | `${number}`;
  alt: string;
  className?: string;
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
  | "Trello"
  | "Styled Components"
  | "Supabase"
  | "Docker"
  | "Cypress"
  | "Firebase";

export type offeredServiceTitle =
  | "Desenvolvimento de Aplicativos Móveis"
  | "Criação de Sites"
  | "Desenvolvimento de APIs e Back-end"
  | "Integração e Automação com Microsoft Azure"
  | "Otimização de Performance Web"
  | "Design de Interfaces Responsivas"
  | "Soluções de DevOps"
  | "Gerenciamento de Projetos"
  | "Integração de Banco de Dados"
  | "Desenvolvimento Full-Stack"
  | "Manutenção e Suporte Técnico";

export type offeredServiceTitleEn =
  | "Mobile App Development"
  | "Website Creation"
  | "API and Back-end Development"
  | "Integration and Automation with Microsoft Azure"
  | "Web Performance Optimization"
  | "Responsive Interface Design"
  | "DevOps Solutions"
  | "Project Management"
  | "Database Integration"
  | "Full-Stack Development"
  | "Maintenance and Technical Support";

export type offeredService = {
  title: offeredServiceTitle | offeredServiceTitleEn | string;
  description: string;
};
