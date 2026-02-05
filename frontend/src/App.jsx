// src/App.jsx
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

import Landing from "./pages/Landing";
import Map from "./pages/Map";
import Impact from "./pages/Impact";
import Verify from "./pages/Verify";
import ZoneDetail from "./pages/ZoneDetail"; // <-- added ZoneDetail page
import RippleCursor from "./sections/RippleCursor";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Navbar />

      <RippleCursor />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<Map />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/zone/:zoneId" element={<ZoneDetail />} />{" "}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
