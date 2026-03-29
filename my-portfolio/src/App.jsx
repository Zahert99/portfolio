import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

const TechStack = lazy(() => import("./components/Technologies/TechStack"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const AboutMe = lazy(() => import("./components/AboutMe/AboutMe"));
const Experience = lazy(() => import("./components/Experince/Experience"));
const ContactMe = lazy(() => import("./components/Contact/ContactMe"));

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <TechStack />
        <Projects />
        <AboutMe />
        <Experience />
        <ContactMe />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
