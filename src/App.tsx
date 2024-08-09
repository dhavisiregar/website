import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Technologies from "./components/Technologies/Technologies";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    }),
      AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="profile">
        <Profile />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
