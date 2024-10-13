"use client";
import { useRef, useState } from "react";
import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import NavBar from "../NavBar";
import { motion } from "framer-motion";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);

  const menuRef = useRef<HTMLInputElement>(null);
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      // exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.5 }}
      className="z-50 select-none w-full h-14 px-[7.5%] bg-lightScheme-secondary dark:bg-darkScheme-primary flex justify-between items-center top-0 fixed lg:justify-between"
    >
      <Logo />

      <NavBar
        menuRef={menuRef}
        isNavbarVisible={isNavbarVisible}
        setIsNavbarVisible={setIsNavbarVisible}
      />

      <MenuMobile
        menuRef={menuRef}
        isNavbarVisible={isNavbarVisible}
        setIsNavbarVisible={setIsNavbarVisible}
      />
    </motion.header>
  );
};

export default Header;
