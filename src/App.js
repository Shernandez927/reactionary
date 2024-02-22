import React from "react";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app w-11/12 md:w-5/6 mx-auto pt-24 md:h-full font-rubik">
        <Navbar/>
          <Routes>
            <Route path="/" element={<><Home /><Skills /></>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
