import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5.0 + 0.5; // Random increment between 0.5-5.5

        if (newProgress >= 100) {
          clearInterval(interval);
          // Start fade out animation
          setTimeout(() => {
            setFadeOut(true);
          }, 300);
          // Hide completely after fade
          setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
          }, 800);
          return 100;
        }

        return newProgress;
      });
    }, 60); // Update every 60ms for smooth animation

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-end bg-[#111111] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Loading counter in bottom-right */}
      <div className="p-6 sm:p-8 md:p-12">
        <div className="font-mono text-4xl font-light tracking-wider text-white select-none sm:text-5xl md:text-6xl lg:text-7xl">
          {Math.floor(progress).toString().padStart(2, "0")}%
        </div>
        {/* Optional loading bar */}
        <div className="mt-3 h-0.5 w-20 overflow-hidden rounded-full bg-gray-800 sm:mt-4 sm:w-24 md:w-32">
          <div
            className="h-full rounded-full bg-white transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
