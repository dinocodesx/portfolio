import { useState, useRef, useEffect } from "react";
import MusicPlayer from "./ui/Music_Player";

export default function Music() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Song data - can be moved to a separate config or fetched from API
  const songData = {
    title: "Softcore",
    artist: "The Neighbourhood",
    albumCover: "/files/Softcore.jpg",
    audioSrc: "/files/Softcore.mp3",
  };

  const togglePlayer = () => {
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      // Expanding - start playing music
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    } else {
      // Collapsing - stop playing music
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Set volume to 30%
      audio.loop = true; // Loop the track

      // Handle audio events
      const handleCanPlayThrough = () => {
        console.log("Audio loaded and ready to play");
      };

      const handleError = (e: Event) => {
        console.error("Audio error:", e);
        setIsPlaying(false);
      };

      const handleEnded = () => {
        setIsPlaying(false);
      };

      audio.addEventListener("canplaythrough", handleCanPlayThrough);
      audio.addEventListener("error", handleError);
      audio.addEventListener("ended", handleEnded);

      // Cleanup
      return () => {
        audio.removeEventListener("canplaythrough", handleCanPlayThrough);
        audio.removeEventListener("error", handleError);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={songData.audioSrc} preload="auto" />

      {/* Music Player UI Component */}
      <MusicPlayer
        isExpanded={isExpanded}
        isPlaying={isPlaying}
        onToggle={togglePlayer}
        songTitle={songData.title}
        artist={songData.artist}
        albumCover={songData.albumCover}
      />
    </div>
  );
}
