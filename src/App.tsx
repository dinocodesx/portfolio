import { useState } from "react";
import Hero from "./components/Hero";
import LoadingScreen from "./components/Loading_Screen.tsx";

function App() {
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
    </>
  );
}

export default App;
