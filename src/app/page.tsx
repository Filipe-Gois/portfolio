import Contact from "@/components/Sections/Contact/index";
import Projects from "@/components/Sections/Projects/index";
import Services from "@/components/Sections/Services/index";
import Skills from "@/components/Sections/Skills/index";
import WelcomeText from "@/components/Sections/WelcomeText/index";
import WelcomeTopic from "@/components/Sections/WelcomeTopic/index";

export default function Home() {
  return (
    <main className="h-full w-full mt-14">
      <div className="dark:bg-darkScheme-primary bg-lightScheme-secondary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center">
          <WelcomeText />
        </div>
      </div>
      <div className="dark:bg-darkScheme-secondary bg-lightScheme-tertiary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <WelcomeTopic />
        </div>
      </div>
      <div className="dark:bg-darkScheme-primary bg-lightScheme-secondary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <Skills />
        </div>
      </div>
      <div className="dark:bg-darkScheme-secondary bg-lightScheme-tertiary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <Projects />
        </div>
      </div>
      <div className="dark:bg-darkScheme-primary bg-lightScheme-secondary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <Services />
        </div>
      </div>
      <div className="dark:bg-darkScheme-secondary bg-lightScheme-tertiary w-full flex justify-center py-10">
        <div className="flex h-full w-[85vw] flex-col items-center ">
          <Contact />
        </div>
      </div>
    </main>
  );
}
