import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { FaUserAlt, FaBriefcase, FaCode } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

type NavBarProps = {
  isNavbarVisible: boolean;
};

const NavBar = ({ isNavbarVisible }: NavBarProps) => {
  return (
    <nav
      data-isnavbarvisible={isNavbarVisible}
      className="h-[calc(100vh-3.5rem)] w-[65vw] absolute top-14 -right-[65vw] data-[isnavbarvisible=true]:right-0 transition-all ease-in-out duration-700 pt-2 bg-gradient-to-bl from-lightScheme-primary to-lightScheme-tertiary dark:from-darkScheme-primary to bg-darkScheme-tertiary
      md:static md:h-full md:w-max md:pt-0  md:to-transparent md:from-transparent md:dark:to-transparent md:dark:from-transparent md:bg-transparent md:dark:bg-transparent
      "
    >
      <ul className="h-full w-full gap-3 flex flex-col items-end px-[5%]  md:flex-row md:w-max md:px-0">
        <li className="nav-item">
          <Link className="nav-link" href="">
            Sobre Mim <FaUserAlt className="md:hidden" size={20} />
          </Link>
        </li>
        <li className="nav-item">
          <Link href={""} className="nav-link">
            Tecnologias <FaCode className="md:hidden" size={20} />
          </Link>
        </li>
        <li className="nav-item">
          <Link href={""} className="nav-link">
            Projetos <FaFolderOpen className="md:hidden" size={20} />
          </Link>
        </li>
        <li className="nav-item">
          <Link href={""} className="nav-link">
            Serviços <FaBriefcase className="md:hidden" size={20} />
          </Link>
        </li>
        <li className="nav-item">
          <Link href={""} className="nav-link">
            Contate-Me <IoIosSend className="md:hidden" size={25} />
          </Link>
        </li>

        <li className="flex justify-center">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
