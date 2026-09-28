import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";


import About from "./pages/about";
import Skills from "./pages/Skills";
import Example from "./pages/Example";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Example />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;