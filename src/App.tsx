import { GlobalCommandPalette } from "@/components/layout/CommandPalette";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AccordionCraft } from "@/components/ui/accordion";
import { AlertShowcase } from "@/components/ui/alert";
import { ButtonCraft } from "@/components/ui/button";
import { ChatBubbleCraft } from "@/components/ui/chat-bubble";
import { CommandPalette } from "@/components/ui/command-palette";
import { DropdownCraft } from "@/components/ui/dropdown";
import { KeyboardCraft } from "@/components/ui/keyboard";
import { Label } from "@/components/ui/label";
import { LLMChatInput } from "@/components/ui/llm-chat-input";
import { MultiStepForm } from "@/components/ui/multi-step-form";
import { Toast } from "@/components/ui/toast";

import { About } from "@/pages/About";
import { Blogs } from "@/pages/Blogs";
import { Community } from "@/pages/Community";
import { Culture } from "@/pages/Culture";
import { Disclaimer } from "@/pages/Disclaimer";
import { Journey } from "@/pages/Journey";
import { Meet } from "@/pages/Meet";
import { NotFound } from "@/pages/NotFound";
import { Portfolio } from "@/pages/Portfolio";
import { Projects } from "@/pages/Projects";
import { Resume } from "@/pages/Resume";
import { Shortcuts } from "@/pages/Shortcuts";
import { Social } from "@/pages/Socials";
import { Spotify } from "@/pages/Spotify";
import { Talks } from "@/pages/Talks";
import { UI } from "@/pages/Ui";

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
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/community" element={<Community />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/links" element={<Social />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/shortcuts" element={<Shortcuts />} />
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
            <Route path="keyboard" element={<KeyboardCraft />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
