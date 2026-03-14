import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/Technologies/TechStack";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experince/Experience";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <AboutMe />
      <Experience />
    </>
  );
}

export default App;
