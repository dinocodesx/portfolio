import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { ScrollToTop } from "./components/portfolio/ScrollToTop";
import { GlobalCommandPalette } from "./components/layout/CommandPalette";

// Direct imports (No Lazy Loading)
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Talks } from "./pages/Talks";
import { Social } from "./pages/Socials";
import { Spotify } from "./pages/Spotify";
import { Resume } from "./pages/Resume";
import { Meet } from "./pages/Meet";
import { NotFound } from "./pages/NotFound";

import { UI } from "./pages/Ui";
import { LLMChatInput } from "./components/ui/llm-chat-input";
import { ButtonCraft } from "./components/ui/button";
import { DropdownCraft } from "./components/ui/dropdown";
import { ChatBubbleCraft } from "./components/ui/chat-bubble";
import { CommandPalette } from "./components/ui/command-palette";
import { MultiStepForm } from "./components/ui/multi-step-form";
import { Toast } from "./components/ui/toast";
import { Label } from "./components/ui/label";
import { AlertShowcase } from "./components/ui/alert";
import { AccordionCraft } from "./components/ui/accordion";

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalCommandPalette />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/spotify" element={<Spotify />} />
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
            <Route path="multipage-form" element={<MultiStepForm />} />
            <Route path="toast" element={<Toast />} />
            <Route path="label" element={<Label />} />
            <Route path="alert" element={<AlertShowcase />} />
            <Route path="accordion" element={<AccordionCraft />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
