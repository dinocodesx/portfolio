import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Portfolio } from "./pages/portfolio";
import { Projects } from "./pages/projects";
import { Blogs } from "./pages/blogs";
import { Talks } from "./pages/talks";
import { Social } from "./pages/socials";
import { Resume } from "./pages/resume";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/links" element={<Social />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
