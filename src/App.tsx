import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/portfolio/ScrollToTop";
import { GlobalCommandPalette } from "./components/layout/CommandPalette";

// Lazy load pages
const Portfolio = lazy(() => import("./pages/Portfolio").then(m => ({ default: m.Portfolio })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Projects = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })));
const Blogs = lazy(() => import("./pages/Blogs").then(m => ({ default: m.Blogs })));
const Talks = lazy(() => import("./pages/Talks").then(m => ({ default: m.Talks })));
const Social = lazy(() => import("./pages/Socials").then(m => ({ default: m.Social })));
const Resume = lazy(() => import("./pages/Resume").then(m => ({ default: m.Resume })));
const Meet = lazy(() => import("./pages/Meet").then(m => ({ default: m.Meet })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

// Lazy load UI components
const UI = lazy(() => import("./pages/Ui").then(m => ({ default: m.UI })));
const LLMChatInput = lazy(() => import("./components/ui/llm-chat-input").then(m => ({ default: m.LLMChatInput })));
const ButtonCraft = lazy(() => import("./components/ui/button").then(m => ({ default: m.ButtonCraft })));
const DropdownCraft = lazy(() => import("./components/ui/dropdown").then(m => ({ default: m.DropdownCraft })));
const ChatBubbleCraft = lazy(() => import("./components/ui/chat-bubble").then(m => ({ default: m.ChatBubbleCraft })));
const CommandPalette = lazy(() => import("./components/ui/command-palette").then(m => ({ default: m.CommandPalette })));
const SidebarCraft = lazy(() => import("./components/ui/sidebar").then(m => ({ default: m.SidebarCraft })));
const MultiStepForm = lazy(() => import("./components/ui/multi-step-form").then(m => ({ default: m.MultiStepForm })));
const Checkout = lazy(() => import("./components/ui/checkout").then(m => ({ default: m.Checkout })));
const Toast = lazy(() => import("./components/ui/toast").then(m => ({ default: m.Toast })));
const Label = lazy(() => import("./components/ui/label").then(m => ({ default: m.Label })));
const AlertShowcase = lazy(() => import("./components/ui/alert").then(m => ({ default: m.AlertShowcase })));
const AccordionCraft = lazy(() => import("./components/ui/accordion").then(m => ({ default: m.AccordionCraft })));
const NavbarCraft = lazy(() => import("./components/ui/navbar").then(m => ({ default: m.NavbarCraft })));
const MobileChat = lazy(() => import("./components/ui/mobile-chat").then(m => ({ default: m.MobileChat })));

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

            <Route path="toast" element={<Toast />} />
            <Route path="label" element={<Label />} />
            <Route path="alert" element={<AlertShowcase />} />
            <Route path="accordion" element={<AccordionCraft />} />
            <Route path="navbar" element={<NavbarCraft />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

