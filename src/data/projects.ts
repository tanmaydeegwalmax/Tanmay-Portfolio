export type Project = {
  id: number;
  title: string;
  subtitle: string;
  stats: string;
  emoji: string;
  tag: string;
  youtubeId?: string;
  localVideo?: string;
  localThumbnail?: string;
  externalLink?: string;
  objectFit?: "cover" | "contain";
};

export const categories = ["Long Form", "Short Form", "Motion Graphics", "AI Special"];

export const projects: Project[] = [
  // FEATURED
  {
    id: 101,
    title: "10 Items I Don't Buy",
    subtitle: "Featured Video",
    stats: "",
    emoji: "🌟",
    tag: "FEATURED",
    localVideo: "/work/videos/10 Items I Don't Buy.mp4",
    localThumbnail: "/work/thumbnails/10 Items I Don't BUY.jpg"
  },
  {
    id: 102,
    title: "How To Pick The Best Mutual Fund",
    subtitle: "Featured Video",
    stats: "",
    emoji: "📈",
    tag: "FEATURED",
    localVideo: "/work/videos/How To Pick The Best Mutual Fund - Featured Videos.mp4",
    localThumbnail: "/work/thumbnails/How to Pick the Best Mutual Fund - Featured Videos.jpg"
  },
  {
    id: 103,
    title: "Important Things Before Buying A Solar",
    subtitle: "Featured Video",
    stats: "",
    emoji: "☀️",
    tag: "FEATURED",
    localVideo: "/work/videos/Important Things Before Buying A Solar.mp4",
    localThumbnail: "/work/thumbnails/Important Things Before Buying A Solar.jpg"
  },

  // AI SPECIAL
  {
    id: 201,
    title: "How To Use Credits Cards",
    subtitle: "AI Generated",
    stats: "",
    emoji: "💳",
    tag: "AI SPECIAL",
    localVideo: "/work/videos/How To Use Credits Cards - AI Special.mp4",
    localThumbnail: "/work/thumbnails/How to Use Credits Cards - AI Special.jpg"
  },
  {
    id: 202,
    title: "Wealth Inequality",
    subtitle: "AI Generated",
    stats: "",
    emoji: "💰",
    tag: "AI SPECIAL",
    localVideo: "/work/videos/Wealth Inequality.mp4",
    localThumbnail: "/work/thumbnails/Wealth Inequality.jpg"
  },
  {
    id: 203,
    title: "Gold Trade",
    subtitle: "AI Generated",
    stats: "",
    emoji: "🪙",
    tag: "AI SPECIAL",
    localVideo: "/work/videos/Gold Trade.mp4",
    localThumbnail: "/work/thumbnails/Gold Trade.jpg"
  },

  // LONG FORM
  {
    id: 301,
    title: "How to Invest in US Stocks",
    subtitle: "YouTube Long Form",
    stats: "",
    emoji: "🇺🇸",
    tag: "LONG FORM",
    youtubeId: "-iSk-usAlFU"
  },
  {
    id: 302,
    title: "What is LLP",
    subtitle: "YouTube Long Form",
    stats: "",
    emoji: "🏢",
    tag: "LONG FORM",
    youtubeId: "MpSCLsYg_UQ"
  },
  {
    id: 303,
    title: "Solar Subsidy 2026 QNA",
    subtitle: "YouTube Long Form",
    stats: "",
    emoji: "🌞",
    tag: "LONG FORM",
    youtubeId: "102c216YwFE"
  },
  {
    id: 304,
    title: "Why Indian shows are Dumb",
    subtitle: "YouTube Long Form",
    stats: "",
    emoji: "📺",
    tag: "LONG FORM",
    youtubeId: "ZA09MfZy8JU"
  },

  // SHORT FORM
  {
    id: 401,
    title: "Graphic Design Theory",
    subtitle: "YouTube Short",
    stats: "",
    emoji: "🎨",
    tag: "SHORT FORM",
    youtubeId: "4KKda64i7OU"
  },
  {
    id: 402,
    title: "Term Insurance Masterclass",
    subtitle: "YouTube Short",
    stats: "",
    emoji: "🛡️",
    tag: "SHORT FORM",
    youtubeId: "kUkug9xOeas"
  },
  {
    id: 403,
    title: "Censor Board Duopoly",
    subtitle: "YouTube Short",
    stats: "",
    emoji: "🎬",
    tag: "SHORT FORM",
    youtubeId: "luGf9Eex5yc"
  },
  {
    id: 404,
    title: "How Zoho Saved Tax",
    subtitle: "YouTube Short",
    stats: "",
    emoji: "💸",
    tag: "SHORT FORM",
    youtubeId: "ZcfvmEqRK-4"
  },
  {
    id: 405,
    title: "AI killed This Industry",
    subtitle: "YouTube Short",
    stats: "",
    emoji: "🤖",
    tag: "SHORT FORM",
    youtubeId: "ZRKj1fdtRXI"
  },
  {
    id: 406,
    title: "Future of Video Editing",
    subtitle: "YouTube Short",
    stats: "",
    emoji: "✂️",
    tag: "SHORT FORM",
    youtubeId: "kDCO4wRHnsw"
  },

  // MOTION GRAPHICS
  {
    id: 501,
    title: "Aoronary Arteries Angioplasty",
    subtitle: "Motion Graphics",
    stats: "",
    emoji: "🫀",
    tag: "MOTION GRAPHICS",
    localVideo: "/work/videos/Aoronary Arteries Angioplasty.mp4",
    localThumbnail: "/work/thumbnails/Aoronary Arteries Angioplasty.jpg"
  },
  {
    id: 502,
    title: "Gold Investing Guide",
    subtitle: "Motion Graphics",
    stats: "",
    emoji: "🥇",
    tag: "MOTION GRAPHICS",
    localVideo: "/work/videos/Gold Investing Guide.mp4",
    localThumbnail: "/work/thumbnails/Gold Investing Guide.jpg"
  },
  {
    id: 503,
    title: "How To Pick The Best Mutual Fund",
    subtitle: "Motion Graphics",
    stats: "",
    emoji: "📈",
    tag: "MOTION GRAPHICS",
    localVideo: "/work/videos/How To Pick The Best Mutual Fund - Motion Graphics.mp4",
    localThumbnail: "/work/thumbnails/How to Pick the Best Mutual Fund - Motion Graphics.jpg"
  },
  {
    id: 504,
    title: "How To Use Credits Cards",
    subtitle: "Motion Graphics",
    stats: "",
    emoji: "💳",
    tag: "MOTION GRAPHICS",
    localVideo: "/work/videos/How To Use Credits Cards - Motion Graphics.mp4",
    localThumbnail: "/work/thumbnails/How to Use Credits Cards - Motion Graphics.jpg"
  },
  {
    id: 505,
    title: "Meta Logo Animation",
    subtitle: "Motion Graphics",
    stats: "",
    emoji: "♾️",
    tag: "MOTION GRAPHICS",
    localVideo: "/work/videos/Meta Logo Animation.mp4",
    localThumbnail: "/work/thumbnails/Meta Logo Animation.jpg"
  },
  {
    id: 506,
    title: "Viral 3D Reel",
    subtitle: "Motion Graphics",
    stats: "",
    emoji: "🧊",
    tag: "MOTION GRAPHICS",
    localVideo: "/work/videos/Viral 3D Reel.mp4",
    localThumbnail: "/work/thumbnails/Viral 3D Reel.jpg",
    objectFit: "contain"
  }
];
