import { motion } from "motion/react";

/**
 * A small animated equalizer icon to signal live audio activity.
 */
function Equalizer() {
  return (
    <div className="flex items-end gap-[2px] h-3 w-4">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-emerald-500 rounded-full"
          animate={{
            height: ["20%", "100%", "40%", "80%", "20%"],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function NowPlaying() {
  // Static state for UI demonstration. 
  // In a real scenario, this would fetch from the Spotify API.
  const isPlaying = true;
  const track = {
    title: "Time",
    artist: "Hans Zimmer",
    album: "Inception (Original Motion Picture Soundtrack)",
    albumArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    link: "https://open.spotify.com/track/6ZFbSTe3vmi2n7p7v29ZpR",
  };

  return (
    <div className="w-full p-6 bg-[#0A0A0A] border border-white/5 rounded-2xl group transition-all hover:border-white/10">
      <div className="flex items-center gap-6">
        {/* Album Art */}
        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-white/10">
          <img 
            src={track.albumArt} 
            alt={track.album} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Equalizer />
            </div>
          )}
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-emerald-500">
            {isPlaying ? "Now Playing" : "Last Played"}
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          
          <h3 className="text-white font-medium text-lg truncate group-hover:text-emerald-400 transition-colors">
            <a href={track.link} target="_blank" rel="noopener noreferrer">
              {track.title}
            </a>
          </h3>
          
          <p className="text-white/40 text-sm truncate">
            {track.artist} — {track.album}
          </p>
        </div>
      </div>
    </div>
  );
}
