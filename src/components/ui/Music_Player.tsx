interface MusicPlayerProps {
  isExpanded: boolean;
  isPlaying: boolean;
  onToggle: () => void;
  songTitle: string;
  artist: string;
  albumCover: string;
}

export default function MusicPlayer({
  isExpanded,
  isPlaying,
  onToggle,
  songTitle,
  artist,
  albumCover,
}: MusicPlayerProps) {
  return (
    <div
      className={`
        bg-[#111111] border border-white/20 rounded-xl flex items-center cursor-pointer
        transition-all duration-500 ease-in-out hover:bg-white/5 hover:border-white/30
        ${isExpanded ? "w-80 h-16 animate-bounce-slow" : "w-16 h-16 hover:scale-105 animate-bounce-slow"}
      `}
      onClick={onToggle}
    >
      {/* Expanded content - Album cover and song info */}
      {isExpanded && (
        <div className="flex items-center flex-1 pl-4 pr-2">
          {/* Album Cover with subtle animation when playing */}
          <div
            className={`w-10 h-10 rounded-lg overflow-hidden shrink-0 transition-transform duration-300 ${isPlaying ? "scale-105" : "scale-100"}`}
          >
            <img
              src={albumCover}
              alt={`${songTitle} album cover`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Song Info */}
          <div className="flex-1 pr-10 text-center">
            <div className="text-white/90 text-sm font-medium truncate">
              {songTitle}
            </div>
            <div className="text-white/60 text-xs truncate">{artist}</div>
            {/* Playing indicator */}
            {/*{isPlaying && (
              <div className="flex justify-center mt-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
                  <div
                    className="w-1 h-3 bg-white/50 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 h-3 bg-white/50 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}*/}
          </div>
        </div>
      )}

      {/* Plus/Close Icon - positioned absolutely */}
      <div
        className={`
        ${isExpanded ? "absolute right-4" : "flex items-center justify-center w-full h-full"}
      `}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div
            className={`
            absolute w-full h-0.5 bg-white/70 transition-transform duration-300
            ${isExpanded ? "rotate-45" : "rotate-0"}
          `}
          ></div>
          <div
            className={`
            absolute w-0.5 h-full bg-white/70 transition-transform duration-300
            ${isExpanded ? "rotate-45" : "rotate-0"}
          `}
          ></div>
        </div>
      </div>
    </div>
  );
}
