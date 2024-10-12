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

// blogs
import SpBlog from "./pages/spblog";
import Marone from "./pages/blog-marathi-1";
import Martwo from "./pages/blog-marathi-2";
import Marthree from "./pages/blog-marathi-3";
import Marfour from "./pages/blog-marathi-4";
import Crisis from "./pages/crisis-blog";
import Political from "./pages/political-blog"
import Secure from "./pages/secure-blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/ChinaConnect" element={<ChinaConnect />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Teach" element={<Teach/>} />
        <Route path="/SpBlog" element={<SpBlog/>} />
        <Route path="/Marone" element={<Marone/>} />
        <Route path="/Martwo" element={<Martwo/>} />
        <Route path="/Marthree" element={<Marthree/>} />
        <Route path="/Marfour" element={<Marfour/>} />
        <Route path="/Crisis" element={<Crisis/>} />
        <Route path="/Political" element={<Political/>} />
        <Route path="/Secure" element={<Secure/>} />
      </Routes>
    </Router>
  );
}

export default App;
