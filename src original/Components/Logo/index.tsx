const Logo = () => {
  const goToTopPage = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  return (
    <button
      onClick={goToTopPage}
      className="text-darkScheme-primary dark:text-lightScheme-primary text-xl font-semibold transition-all ease-in-out duration-500 hover:scale-110"
    >
      {"<"}Filipe Góis {"/>"}
    </button>
  );
};

export default Logo;
