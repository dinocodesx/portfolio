import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Portfolio } from "./pages/Portfolio";
import { Social } from "./pages/Socials";
import { Projects } from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/socials" element={<Social />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
