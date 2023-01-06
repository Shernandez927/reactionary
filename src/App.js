import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [selectedPage, setselectedPage] = useState("home");

  return (
    <Router>
      <div className="app bg-deep-blue">
        <Navbar selectedPage={selectedPage} setselectedPage={setselectedPage} />
        <div className="w-3/4 mx-auto md:h-full">
          <Routes>
            <Route path="/" element={[<Home />, <Skills />]} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
