import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

const Portfolio = lazy(() =>
  import("./pages/Portfolio").then((m) => ({ default: m.Portfolio })),
);
const Projects = lazy(() =>
  import("./pages/Projects").then((m) => ({ default: m.Projects })),
);
const Blogs = lazy(() =>
  import("./pages/Blogs").then((m) => ({ default: m.Blogs })),
);
const Talks = lazy(() =>
  import("./pages/Talks").then((m) => ({ default: m.Talks })),
);
const Social = lazy(() =>
  import("./pages/Socials").then((m) => ({ default: m.Social })),
);
const Resume = lazy(() =>
  import("./pages/Resume").then((m) => ({ default: m.Resume })),
);
const Meet = lazy(() =>
  import("./pages/Meet").then((m) => ({ default: m.Meet })),
);
const UI = lazy(() => import("./pages/Ui").then((m) => ({ default: m.UI })));
const UserInput = lazy(() =>
  import("./pages/ui/UserInput").then((m) => ({ default: m.UserInput })),
);
const ButtonCraft = lazy(() =>
  import("./pages/ui/ButtonCraft").then((m) => ({ default: m.ButtonCraft })),
);
const DropdownCraft = lazy(() =>
  import("./pages/ui/DropdownCraft").then((m) => ({
    default: m.DropdownCraft,
  })),
);
const ChatBubbleCraft = lazy(() =>
  import("./pages/ui/ChatBubbleCraft").then((m) => ({
    default: m.ChatBubbleCraft,
  })),
);
const SearchBarCraft = lazy(() =>
  import("./pages/ui/SearchBarCraft").then((m) => ({
    default: m.SearchBarCraft,
  })),
);
const SidebarCraft = lazy(() =>
  import("./pages/ui/Sidebar").then((m) => ({ default: m.SidebarCraft })),
);
const MultiStepForm = lazy(() =>
  import("./pages/ui/MultiStepForm").then((m) => ({
    default: m.MultiStepForm,
  })),
);
const Checkout = lazy(() =>
  import("./pages/ui/Checkout").then((m) => ({ default: m.Checkout })),
);
const MobileChat = lazy(() =>
  import("./pages/ui/MobileChat").then((m) => ({ default: m.MobileChat })),
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((m) => ({ default: m.NotFound })),
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-white/50">
            Loading...
          </div>
        }
      >
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
          <Route path="/sidebar" element={<SidebarCraft />} />
          <Route path="/multipage-form" element={<MultiStepForm />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mobile-chat" element={<MobileChat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
