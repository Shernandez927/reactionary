import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Map from "./components/Map";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="w-11/12 md:w-5/6 mx-auto pt-24 md:h-full font-rubik">
          <Routes>
            <Route path="/" element={[<Home />, <Skills />]} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/map" element={<Map />} />
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
