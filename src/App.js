import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing"; // Home page component
import Blogs from "./pages/blogs"; // Blog page component
import Achievements from "./pages/achievements";
import Gallery from "./pages/gallery";
import Corporate from "./pages/Corporate";
import ChinaConnect from "./pages/ChinaConnect";
import About from "./pages/about";
import Teach from "./pages/teach";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/ChinaConnect" element={<ChinaConnect />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Teach" element={<Teach/>} />
      </Routes>
    </Router>
  );
}

export default App;
