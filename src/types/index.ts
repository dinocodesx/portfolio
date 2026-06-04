export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: Record<string, string>;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Building {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface UIItem {
  title: string;
  link: string;
  description?: string;
  label?: string;
  gridSpan?: 1 | 2 | 3;
}

export interface SpotifySong {
  id: number;
  title: string;
  artist: string;
  albumArt: string;
  link: string;
}

export interface SpotifyAlbum {
  id: number;
  title: string;
  artist: string;
  coverImage: string;
  link: string;
}

export interface SpotifyArtist {
  id: number;
  name: string;
  genre: string;
  link: string;
  image: string;
}

export interface SpotifyData {
  songs: SpotifySong[];
  albums: SpotifyAlbum[];
  artists: SpotifyArtist[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export interface Book {
  id: number;
  title: string;
  authors: string;
  description: string;
  link: string;
}

export interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  link: string;
}

export interface Talk {
  id: number;
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  link: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  link?: string;
}

export type AlertType = "info" | "success" | "error" | "warning";

// Component Props Interfaces
export interface BlogProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  readTime: string;
}

export interface BookProps {
  title: string;
  authors: string;
  description: string;
  link: string;
}

export interface BuildingProps {
  id?: number;
  title: string;
  description: string;
  link?: string;
}

export interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: Record<string, string>;
  technologies: string[];
  link?: string;
  [key: string]: any;
}

export interface ProjectProps {
  title: string;
  description: string;
  github?: string;
  live?: string;
}

export interface SkillCategoryProps {
  category: string;
  skills: { name: string }[];
  [key: string]: any;
}

export interface SocialsProps {
  name: string;
  url: string;
  description: string;
  icon: string;
  [key: string]: any;
}

export interface TalkProps {
  title: string;
  date: string;
  location: string;
  event: string;
  link: string;
  description: string;
}

export interface Shortcut {
  id: number;
  keys: string[];
  command: string;
  description: string;
  category: "Navigation" | "General" | "System" | "Apps" | "Other";
}
