import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/portfolio/ScrollToTop";

import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Talks } from "./pages/Talks";
import { Social } from "./pages/Socials";
import { Resume } from "./pages/Resume";
import { Meet } from "./pages/Meet";
import { UI } from "./pages/Ui";
import { LLMChatInput } from "./components/ui/llm-chat-input";
import { ButtonCraft } from "./components/ui/button";
import { DropdownCraft } from "./components/ui/dropdown";
import { ChatBubbleCraft } from "./components/ui/chat-bubble";
import { CommandPalette } from "./components/ui/command-palette";
import { SidebarCraft } from "./components/ui/sidebar";
import { MultiStepForm } from "./components/ui/multi-step-form";
import { Checkout } from "./components/ui/checkout";
import { MobileChat } from "./components/ui/mobile-chat";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/links" element={<Social />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/ui">
          <Route index element={<UI />} />
          <Route path="chat-input" element={<LLMChatInput />} />
          <Route path="button" element={<ButtonCraft />} />
          <Route path="dropdown" element={<DropdownCraft />} />
          <Route path="chat" element={<ChatBubbleCraft />} />
          <Route path="command-palette" element={<CommandPalette />} />
          <Route path="sidebar" element={<SidebarCraft />} />
          <Route path="multipage-form" element={<MultiStepForm />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="mobile-chat" element={<MobileChat />} />

          {/*<Route path="toast" element={<Toast />} />
          <Route path="label" element={<Label />} />
          <Route path="alert" element={<Alert />} />
          <Route path="accordion" element={<AccordionCraft />} />
          <Route path="navbar" element={<NavbarCraft />} />*/}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
