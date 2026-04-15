import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Portfolio } from "./pages/Portfolio";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Talks } from "./pages/Talks";
import { Social } from "./pages/Socials";
import { Resume } from "./pages/Resume";
import { Meet } from "./pages/Meet";
import { UI } from "./pages/Ui";
import { UserInput } from "./pages/ui/UserInput";
import { ButtonCraft } from "./pages/ui/ButtonCraft";
import { DropdownCraft } from "./pages/ui/DropdownCraft";
import { ChatBubbleCraft } from "./pages/ui/ChatBubbleCraft";
import { SearchBarCraft } from "./pages/ui/SearchBarCraft";

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
        <Route path="/meet" element={<Meet />} />
        <Route path="/ui" element={<UI />} />
        <Route path="/user-input" element={<UserInput />} />
        <Route path="/button-craft" element={<ButtonCraft />} />
        <Route path="/dropdown-craft" element={<DropdownCraft />} />
        <Route path="/chat-craft" element={<ChatBubbleCraft />} />
        <Route path="/searchbar-craft" element={<SearchBarCraft />} />
      </Routes>
    </Router>
  );
}
