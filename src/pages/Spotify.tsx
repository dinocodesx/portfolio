import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { itemVariants, containerVariants } from "../constants/animations";
import { PageLayout } from "../components/layout/PageLayout";
import { SEO } from "../components/layout/SEO";
import { NowPlaying } from "../components/portfolio/NowPlaying";
import { SPOTIFY_DATA } from "../constants/data";

export function Spotify() {
  return (
    <PageLayout maxWidth="max-w-4xl" className="space-y-16">
      <SEO
        title="Spotify | Debarshee Chakraborty"
        description="A curated look into my musical taste, currently playing tracks, and favorite playlists."
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* Sidebar */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group italic font-serif text-lg sticky top-32"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Index
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="space-y-20">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-white font-medium text-3xl tracking-tight flex items-center gap-4">
              <Music2 className="w-8 h-8 text-emerald-500" />
              Spotify
            </h1>
            <p className="text-white/40 text-lg max-w-xl">
              A real-time reflection of what's fueling my development sessions and late-night architectural deep-dives.
            </p>
          </motion.div>

          {/* 1. Now Playing Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-widest text-white/20 font-mono">01_Live_Status</h2>
            <NowPlaying />
          </motion.div>

          {/* 2. Curated Playlists */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-[11px] uppercase tracking-widest text-white/20 font-mono">02_Curated_Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SPOTIFY_DATA.playlists.map((playlist) => (
                <a 
                  key={playlist.id}
                  href={playlist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col p-4 bg-[#0A0A0A] border border-white/5 rounded-2xl hover:border-white/20 transition-all active:scale-[0.98]"
                >
                  <div className="aspect-square w-full rounded-lg overflow-hidden border border-white/5 mb-4">
                    <img 
                      src={playlist.coverImage} 
                      alt={playlist.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-medium group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                      {playlist.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {playlist.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* 3. Top Artists */}
          <motion.div variants={itemVariants} className="space-y-8 pb-20">
            <h2 className="text-[11px] uppercase tracking-widest text-white/20 font-mono">03_Top_Artists</h2>
            <div className="space-y-1 group/artists">
              {SPOTIFY_DATA.artists.map((artist) => (
                <a 
                  key={artist.id}
                  href={artist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-white/[0.02] group/artist group-hover/artists:opacity-40 hover:!opacity-100"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 grayscale group-hover/artist:grayscale-0 transition-all">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{artist.name}</h3>
                    <p className="text-white/30 text-[11px] uppercase tracking-widest">{artist.genre}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover/artist:text-emerald-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
