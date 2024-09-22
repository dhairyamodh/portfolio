import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/projects";
import Services from "./components/Services";

function App() {
  const navLinks = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Services",
      id: "services",
    },
  ];
  const [activeSection, setActiveSection] = useState(navLinks[0]?.id);

  // Scroll into the relevant section
  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of navLinks) {
        const element = document.getElementById(section.id);
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[100vh] w-full">
      <img
        src="hero-bg.png"
        className="relative md:absolute top-10 md:-top-36 -right-24 md:-right-60 object-cover z-[-1] h-full scale-150 md:scale-[1] md:h-[125vh]"
      />
      <div className="p-5 py-3 absolute left-5 md:left-auto md:right-[35rem] md:top-[30rem] bg-secondary rounded-2xl">
        <p className="text-4xl md:text-5xl text-white">5+</p>
        <p className="text-muted text-sm md:text-lg">years experience</p>
      </div>
      <div className="container mx-auto min-h-[100vh] md:p-0 px-4">
        <Header
          handleNavClick={handleNavClick}
          navLinks={navLinks}
          activeSection={activeSection}
        />
        <Hero />
        <Projects />
        <Services />
      </div>
      <Contact />
    </div>
  );
}

export default App;
