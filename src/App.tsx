import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Links from "./pages/links/links";
import Meet from "./pages/meet/meet";
import Blogs from "./pages/blogs/blogs";
import Talks from "./pages/talks/talks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/links" element={<Links />} />
        <Route path="/meet" element={<Meet />} />
      </Routes>
    </Router>
  );
}

export default App;
