"use client";
import { useState } from "react";
import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import NavBar from "../NavBar";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  return (
    <header className="z-50 select-none w-full h-14 px-[7.5%] bg-lightScheme-primary dark:bg-darkScheme-primary flex justify-between items-center top-0 fixed md:justify-between">
      <Logo />

      <NavBar isNavbarVisible={isNavbarVisible} />

      <MenuMobile
        isNavbarVisible={isNavbarVisible}
        setIsNavbarVisible={setIsNavbarVisible}
      />
    </header>
  );
};

export default Header;
