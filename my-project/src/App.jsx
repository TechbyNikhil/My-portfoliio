import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TechRibbon from "./components/TechRibbon";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#090a0d] min-h-screen text-gray-100 selection:bg-[#ff5722] selection:text-white">
      <Navbar />

      <main className="space-y-4">
        <Home />
        <TechRibbon />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;