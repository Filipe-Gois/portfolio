import ThemeToggle from "../ThemeToggle";
import { FaUserAlt, FaBriefcase, FaCode } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Dispatch, RefObject, SetStateAction } from "react";
import LanguageToggle from "../LanguageToggle";
import { useTranslations } from "next-intl";

type NavBarProps = {
  isNavbarVisible: boolean;
  setIsNavbarVisible: Dispatch<SetStateAction<boolean>>;
  menuRef: RefObject<HTMLInputElement | null>;
};


const NavBar = ({
  isNavbarVisible,
  setIsNavbarVisible,
  menuRef,
}: NavBarProps) => {
  const t = useTranslations("nav");

  const headerHeight = 96;

  const closeNavBar = () => {
    if (menuRef && menuRef.current) {
      menuRef.current.checked = false;
    }

    setIsNavbarVisible(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });

      closeNavBar();
    }
  };

  return (
    <nav
      data-isnavbarvisible={isNavbarVisible}
      className="h-[calc(100vh-3.5rem)] w-[65vw] absolute top-14 -right-[65vw] data-[isnavbarvisible=true]:right-0 transition-all ease-in-out duration-700 pt-2 bg-gradient-to-bl from-lightScheme-primary to-lightScheme-tertiary dark:from-darkScheme-primary to bg-darkScheme-tertiary
      lg:static lg:h-full lg:w-max lg:pt-0  lg:to-transparent lg:from-transparent lg:dark:to-transparent lg:dark:from-transparent lg:bg-transparent lg:dark:bg-transparent
      "
    >
      <ul className="h-full w-full gap-3 flex flex-col items-end px-[5%]  lg:flex-row lg:w-max lg:px-0">
        <li className="nav-item">
          <button
            onClick={() => scrollToSection("about-me")}
            className="nav-link"
          >
            {t("Sobre Mim")} <FaUserAlt className="lg:hidden" size={20} />
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => scrollToSection("skills")}
            className="nav-link"
          >
            {t("Tecnologias")} <FaCode className="lg:hidden" size={20} />
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => scrollToSection("projects")}
            className="nav-link"
          >
            {t("Projetos")} <FaFolderOpen className="lg:hidden" size={20} />
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link"
          >
            {t("Serviços")} <FaBriefcase className="lg:hidden" size={20} />
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            {t("Contate-Me")} <IoIosSend className="lg:hidden" size={25} />
          </button>
        </li>

        <li className="flex justify-center">
          <ThemeToggle />
        </li>
        <li className="flex justify-center items-center lg:h-full">
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
