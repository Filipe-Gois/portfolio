import { ContainerGrid, Grid, MainContainer } from "@/components/Containers";
import Contact from "@/components/Sections/Contact/index";
import Projects from "@/components/Sections/Projects/index";
import Services from "@/components/Sections/Services/index";
import Skills from "@/components/Sections/Skills/index";
import WelcomeText from "@/components/Sections/WelcomeText/index";
import WelcomeTopic from "@/components/Sections/WelcomeTopic/index";

export default function Home() {
  const sections = [
    <WelcomeText key={Math.random()} />,
    <WelcomeTopic key={Math.random()} />,
    <Skills key={Math.random()} />,
    <Projects key={Math.random()} />,
    <Services key={Math.random()} />,
    <Contact key={Math.random()} />,
  ];

  return (
    <MainContainer>
      {sections.map((section, index) => (
        <ContainerGrid isSecondary={index % 2 !== 0} key={section.key}>
          <Grid>{section}</Grid>
        </ContainerGrid>
      ))}
    </MainContainer>
  );
}
