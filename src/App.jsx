import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import About from "./pages/About";
import { Routes, Route, } from "react-router-dom";
import StarsBackground from "./components/StarsBackground"; // 👈 import
import BigScreenNavbar from "./components/BigScreenNavbar";

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}




export default App;
