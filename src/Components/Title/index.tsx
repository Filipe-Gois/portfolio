import { usePathname } from "next/navigation";
import "./style.css";

export const TitleAnimated = () => {
  const pathname = usePathname();

  const isEnglish = pathname.includes("/en");

  return (
    <h1
      className={`dark:text-lightScheme-primary text-darkScheme-primary text-2xl lg:text-4xl ${
        isEnglish ? "titulo-animado-en" : "titulo-animado"
      }`}
    >
      <span></span>
    </h1>
  );
};
