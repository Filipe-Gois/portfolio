const Footer = () => {
  const curretYear = new Date().getFullYear();

  return (
    <footer className="w-full h-16 bg-lightScheme-primary dark:bg-darkScheme-primary">
      <span className="w-full h-full flex !justify-center !items-center !max-w-[100%] paragraph">
        © {curretYear.toString()} | Developed By Filipe Góis
      </span>
    </footer>
  );
};

export default Footer;
