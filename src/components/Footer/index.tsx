"use client";
import { motion } from "framer-motion";

const Footer = () => {
  const curretYear = new Date().getFullYear();

  return (
    <footer className="w-full h-16 bg-lightScheme-primary dark:bg-darkScheme-primary">
      <motion.span
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex !justify-center !items-center !max-w-[100%] paragraph"
      >
        © {curretYear.toString()} | Developed By Filipe Góis
      </motion.span>
    </footer>
  );
};

export default Footer;
