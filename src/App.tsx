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
import { LLMChatInput } from "./pages/ui/LLMChatInput";
import { ButtonCraft } from "./pages/ui/ButtonCraft";
import { DropdownCraft } from "./pages/ui/DropdownCraft";
import { ChatBubbleCraft } from "./pages/ui/ChatBubbleCraft";
import { CommandPalette } from "./pages/ui/CommandPalette";
import { SidebarCraft } from "./pages/ui/Sidebar";
import { MultiStepForm } from "./pages/ui/MultiStepForm";
import { Checkout } from "./pages/ui/Checkout";
import { MobileChat } from "./pages/ui/MobileChat";
import { NotFound } from "./pages/NotFound";

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
        <Route path="/chat-input" element={<LLMChatInput />} />
        <Route path="/button" element={<ButtonCraft />} />
        <Route path="/dropdown" element={<DropdownCraft />} />
        <Route path="/chat" element={<ChatBubbleCraft />} />
        <Route path="/command-palette" element={<CommandPalette />} />
        <Route path="/sidebar" element={<SidebarCraft />} />
        <Route path="/multipage-form" element={<MultiStepForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mobile-chat" element={<MobileChat />} />
        <Route path="/mobile-auth" element={<MobileAuth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
