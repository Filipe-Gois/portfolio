import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  const router = useRouter();

  const goToTopPage = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const goToHome = () => {
    router.replace("/pt");
  };
  return (
    <button
      onClick={
        pathname === "/pt" || pathname === "/en" ? goToTopPage : goToHome
      }
      className="text-darkScheme-primary dark:text-lightScheme-primary text-xl font-semibold transition-all ease-in-out duration-500 hover:scale-110"
    >
      {"<"}Filipe Góis {"/>"}
    </button>
  );
};

export default Logo;
