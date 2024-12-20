import { offeredServiceTitle, offeredServiceTitleEn } from "@/Types";
import {
  Smartphone,
  Globe,
  Link,
  Cloud,
  Zap,
  Laptop,
  Wrench,
  Folder,
  Database,
  Earth,
  Hammer,
} from "lucide-react";
import { JSX } from "react";

const iconSize = 40;
const iconColor = `#0ACC82`;

const iconMap: Record<
  offeredServiceTitle | offeredServiceTitleEn | string,
  JSX.Element
> = {
  // Português
  "Desenvolvimento de Aplicativos Móveis": (
    <Smartphone color={iconColor} size={iconSize} />
  ),
  "Criação de Sites": <Globe color={iconColor} size={iconSize} />,
  "Desenvolvimento de APIs e Back-end": (
    <Link color={iconColor} size={iconSize} />
  ),
  "Integração e Automação com Microsoft Azure": (
    <Cloud color={iconColor} size={iconSize} />
  ),
  "Otimização de Performance Web": <Zap color={iconColor} size={iconSize} />,
  "Design de Interfaces Responsivas": (
    <Laptop color={iconColor} size={iconSize} />
  ),
  "Soluções de DevOps": <Wrench color={iconColor} size={iconSize} />,
  "Gerenciamento de Projetos": <Folder color={iconColor} size={iconSize} />,
  "Integração de Banco de Dados": (
    <Database color={iconColor} size={iconSize} />
  ),
  "Desenvolvimento Full-Stack": <Earth color={iconColor} size={iconSize} />,
  "Manutenção e Suporte Técnico": <Hammer color={iconColor} size={iconSize} />,

  // Inglês
  "Mobile App Development": <Smartphone color={iconColor} size={iconSize} />,
  "Website Creation": <Globe color={iconColor} size={iconSize} />,
  "API and Back-end Development": <Link color={iconColor} size={iconSize} />,
  "Integration and Automation with Microsoft Azure": (
    <Cloud color={iconColor} size={iconSize} />
  ),
  "Web Performance Optimization": <Zap color={iconColor} size={iconSize} />,
  "Responsive Interface Design": <Laptop color={iconColor} size={iconSize} />,
  "DevOps Solutions": <Wrench color={iconColor} size={iconSize} />,
  "Project Management": <Folder color={iconColor} size={iconSize} />,
  "Database Integration": <Database color={iconColor} size={iconSize} />,
  "Full-Stack Development": <Earth color={iconColor} size={iconSize} />,
  "Maintenance and Technical Support": (
    <Hammer color={iconColor} size={iconSize} />
  ),
};

type serviceIconProps = {
  icon: offeredServiceTitle | offeredServiceTitleEn | string;
};

const ServiceIcon = ({ icon }: serviceIconProps) => {
  const iconService = iconMap[icon];
  return iconService;
};

export default ServiceIcon;
