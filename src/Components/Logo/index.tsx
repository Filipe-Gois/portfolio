const Logo = () => {
  const linkLinkedin = `https://www.linkedin.com/in/filipe-góis-841b58206/`;
  return (
    <a
      target="_blank"
      href={linkLinkedin}
      className="text-darkScheme-primary dark:text-lightScheme-primary text-xl font-semibold transition-all ease-in-out duration-500 hover:scale-110"
    >
      {"<"}Filipe Góis {"/>"}
    </a>
  );
};

export default Logo;
