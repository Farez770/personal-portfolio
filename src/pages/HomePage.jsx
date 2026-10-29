import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import EducationExperience from "../components/sections/EducationExperience.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";

export default function HomePage() {
  return <main><Hero /><About /><Skills /><Projects /><EducationExperience /><Contact /></main>;
}