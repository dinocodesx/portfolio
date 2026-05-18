import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/layout/ScrollToTop";

import { Portfolio } from "./pages/Portfolio";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Talks } from "./pages/Talks";
import { Social } from "./pages/Socials";
import { Resume } from "./pages/Resume";
import { Meet } from "./pages/Meet";
import { UI } from "./pages/Ui";
import { About } from "./pages/About";
import { WebChat } from "./features/crafts/components/web-chat";
import { Button } from "./features/crafts/components/button";
import { Dropdown } from "./features/crafts/components/dropdown";
import { ChatBubble } from "./features/crafts/components/chat";
import { CommandPalette } from "./features/crafts/components/command-palette";
import { Sidebar } from "./features/crafts/components/sidebar";
import { MultiStepForm } from "./features/crafts/components/multipage-form";
import { Checkout } from "./features/crafts/components/checkout";
import { MobileChat } from "./features/crafts/components/mobile-chat";
import { Toast } from "./features/crafts/components/toast";
import { Label } from "./features/crafts/components/label";
import { Alert } from "./features/crafts/components/alert";
import { AccordionCraft } from "./features/crafts/components/accordion";
import { NavbarCraft } from "./features/crafts/components/navbar";
import { NotFound } from "./pages/NotFound";
import { GlobalCommandPalette } from "./components/ui/CommandPalette";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalCommandPalette />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/links" element={<Social />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/about" element={<About />} />
        <Route path="/ui">
          <Route index element={<UI />} />
          <Route path="web-chat" element={<WebChat />} />
          <Route path="button" element={<Button />} />
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="chat" element={<ChatBubble />} />
          <Route path="command-palette" element={<CommandPalette />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="multipage-form" element={<MultiStepForm />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="mobile-chat" element={<MobileChat />} />
          <Route path="toast" element={<Toast />} />
          <Route path="label" element={<Label />} />
          <Route path="alert" element={<Alert />} />
          <Route path="accordion" element={<AccordionCraft />} />
          <Route path="navbar" element={<NavbarCraft />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
