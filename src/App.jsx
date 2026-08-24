import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import ProjectShowcase from "./pages/ProjectShowcase";
import ServiceGallery from "./pages/ServiceGallery";
import Post from "./pages/Post";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/showcase"
          element={<ProjectShowcase />}
        />
        <Route
          path="/services/gallery"
          element={<ServiceGallery />}
        />
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}