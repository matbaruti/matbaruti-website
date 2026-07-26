// Shared content types. Every fact on this site lives in src/content/*.
// Add entries here and every page, filter, and the Ask Mat AI knowledge base
// picks them up automatically. Never invent facts — leave a field out instead.

export type Stat = {
  /** Leave as "—" until the real, verified number is known. */
  value: string;
  label: string;
};

export type ProjectSection = {
  heading: string;
  body?: string;
  points?: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type MediaLink = {
  title: string;
  outlet?: string;
  date?: string;
  url?: string;
  summary?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** One-line description shown on the card. */
  summary: string;
  category: ProjectCategory;
  year?: string;
  role?: string;
  location?: string;
  cover?: string;
  /** Free-text tags used by portfolio search. */
  tags?: string[];
  overview?: string;
  objectives?: string[];
  planning?: string;
  challenges?: string[];
  impact?: string;
  results?: string[];
  skills?: string[];
  lessons?: string[];
  gallery?: GalleryImage[];
  media?: MediaLink[];
  featured?: boolean;
};

export type ProjectCategory =
  | "Technology"
  | "Leadership"
  | "Community"
  | "Science"
  | "Publishing"
  | "Events";

export const projectCategories: ProjectCategory[] = [
  "Technology",
  "Leadership",
  "Community",
  "Science",
  "Publishing",
  "Events",
];

export type TimelineEntry = {
  period: string;
  title: string;
  detail?: string;
  place?: string;
};

export type ExperienceEntry = {
  title: string;
  organization: string;
  period?: string;
  location?: string;
  description?: string;
  points?: string[];
};

export type ExperienceGroup = {
  id: string;
  label: string;
  description?: string;
  entries: ExperienceEntry[];
};

export type Award = {
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
  url?: string;
};

export type AwardGroup = {
  id: string;
  label: string;
  description?: string;
  items: Award[];
};

export type Recommendation = {
  quote: string;
  author: string;
  role?: string;
};

export type SkillGroup = {
  label: string;
  description?: string;
  skills: string[];
};

export type GalleryAlbum = {
  id: string;
  label: string;
  description?: string;
  images: GalleryImage[];
};
