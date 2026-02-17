import { useState } from "react";
import Hero from "../../components/Hero";
import LoadingScreen from "../../components/Loading_Screen.tsx";
import CutSection from "../../components/ui/Cut_Section.tsx";
import Music from "../../components/Music.tsx";

function Home() {
  const [showLoading, setShowLoading] = useState(() => {
    const hasSeenLoading = localStorage.getItem("hasSeenLoading");
    return !hasSeenLoading;
  });

  const handleLoadingComplete = () => {
    localStorage.setItem("hasSeenLoading", "true");
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Hero />
      <CutSection />
      <Music />
    </>
  );
}

export default Home;
