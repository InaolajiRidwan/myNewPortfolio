import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./components/resumeComponents/About";
import { Routes, Route } from "react-router-dom";
import StarsBackground from "./components/StarsBackground"; // 👈 import
import BigScreenNavbar from "./components/BigScreenNavbar";
import Resume from "./pages/Resume";
import Experience from "./components/resumeComponents/Experience";
import Education from "./components/resumeComponents/Education";
import Skills from "./components/resumeComponents/Skills";

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen text-white ">
      {/* Twinkling Stars Background */}

      <StarsBackground />
      <div className="absolute  ">
        <BigScreenNavbar />
      </div>
      <Navbar />

      <div className=" ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />}>
            <Route index element={<About />} />
            <Route path="about" index element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
