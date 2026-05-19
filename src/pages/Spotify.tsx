import { motion } from "motion/react";
import { SidebarLink } from "../components/layout/SidebarLink";
import { Music2, ArrowUpRight } from "lucide-react";
import { itemVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import { SectionHeading } from "../components/layout/SectionHeading";
import { SPOTIFY_DATA } from "../constants/data";

export function Spotify() {
  return (
    <PageLayout maxWidth="max-w-4xl">
      <SEO
        title="Spotify | Debarshee Chakraborty"
        description="A curated look into my musical taste, top tracks, artists, and albums."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <SidebarLink />

        {/* Main content */}
        <div className="space-y-16">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-xl">Spotify</h1>
          </motion.div>

          {/* 1. Top Songs */}
          <motion.div variants={itemVariants} className="space-y-8">
            <SectionHeading title="01_Top_Songs" />
            <div className="space-y-2">
              {SPOTIFY_DATA.songs.map((song, i) => (
                <a
                  key={song.link + i}
                  href={song.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/3 transition-all active:scale-[0.99]"
                >
                  <span className="text-xs font-mono text-white/20 w-4">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/5 shrink-0">
                    <img
                      src={song.albumArt}
                      alt={song.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-[15px] truncate group-hover:text-emerald-400 transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-white/40 text-xs truncate">
                      {song.artist}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white/40 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. Top Albums */}
          <motion.div variants={itemVariants} className="space-y-8">
            <SectionHeading title="02_Top_Albums" />
            <div className="space-y-2">
              {SPOTIFY_DATA.albums.map((album, i) => (
                <a
                  key={album.link + i}
                  href={album.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/3 transition-all active:scale-[0.99]"
                >
                  <span className="text-xs font-mono text-white/20 w-4">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/5 shrink-0">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-[15px] truncate group-hover:text-emerald-400 transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-white/40 text-[11px] truncate uppercase tracking-widest font-mono">
                      {album.artist}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white/40 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 3. Top Artists */}
          <motion.div variants={itemVariants} className="space-y-8 pb-20">
            <SectionHeading title="03_Top_Artists" />
            <div className="grid grid-cols-1 gap-1">
              {SPOTIFY_DATA.artists.map((artist) => (
                <a
                  key={artist.link}
                  href={artist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-white/2 group/artist active:scale-[0.99]"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 grayscale group-hover/artist:grayscale-0 transition-all">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{artist.name}</h3>
                    <p className="text-white/30 text-[11px] uppercase tracking-widest font-mono">
                      {artist.genre}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/10 group-hover/artist:text-emerald-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
