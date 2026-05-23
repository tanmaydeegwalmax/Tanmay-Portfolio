export type Project = {
  id: number;
  title: string;
  subtitle: string;
  stats: string;
  emoji: string;
  tag: string;
  youtubeId?: string;
  localVideo?: string;
};

export const categories = ["Featured", "Documentary", "Long Form", "Short Form", "Motion Graphics"];

export const projects: Project[] = [
  {
    id: 101,
    title: "Motion Reel 1",
    subtitle: "Animations",
    stats: "",
    emoji: "✨",
    tag: "FEATURED",
    localVideo: "/videos/animations.mp4"
  },
  {
    id: 102,
    title: "Motion Reel 2",
    subtitle: "Animations",
    stats: "",
    emoji: "✨",
    tag: "FEATURED",
    localVideo: "/videos/animations.mp4"
  },
  {
    id: 103,
    title: "Motion Reel 3",
    subtitle: "Animations",
    stats: "",
    emoji: "✨",
    tag: "FEATURED",
    localVideo: "/videos/animations.mp4"
  },
  {
    id: 2,
    title: "The Hidden Himalayas",
    subtitle: "YouTube Documentary",
    stats: "1.2M Views • Editing, Color, Sound Design",
    emoji: "🏔️",
    tag: "DOCUMENTARY",
    youtubeId: "f5OHHihl7yw"
  },
  {
    id: 3,
    title: "Long Form Video 1",
    subtitle: "YouTube Long Form",
    stats: "",
    emoji: "🎥",
    tag: "LONG FORM",
    youtubeId: "-iSk-usAlFU"
  },
  {
    id: 8,
    title: "Long Form Video 2",
    subtitle: "YouTube Long Form",
    stats: "",
    emoji: "🎞️",
    tag: "LONG FORM",
    youtubeId: "MpSCLsYg_UQ"
  },
  {
    id: 9,
    title: "Long Form Video 3",
    subtitle: "YouTube Long Form",
    stats: "",
    emoji: "📺",
    tag: "LONG FORM",
    youtubeId: "ZA09MfZy8JU"
  },
  {
    id: 4,
    title: "Stock Market Explained",
    subtitle: "Groww",
    stats: "530K Views • Motion Graphics",
    emoji: "📊",
    tag: "MOTION GRAPHICS",
    youtubeId: "f5OHHihl7yw"
  },
  {
    id: 5,
    title: "YouTube Short 1",
    subtitle: "Vertical Edit",
    stats: "",
    emoji: "📱",
    tag: "SHORT FORM",
    youtubeId: "ZRKj1fdtRXI"
  },
  {
    id: 6,
    title: "YouTube Short 2",
    subtitle: "Vertical Edit",
    stats: "",
    emoji: "⚡",
    tag: "SHORT FORM",
    youtubeId: "kDCO4wRHnsw"
  },
  {
    id: 7,
    title: "YouTube Short 3",
    subtitle: "Vertical Edit",
    stats: "",
    emoji: "🎬",
    tag: "SHORT FORM",
    youtubeId: "fz4MtJ1aEMg"
  }
];
