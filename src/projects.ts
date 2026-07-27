export type PreviewId = "globe" | "blindspot" | "toes-down" | "deforestation";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  preview: PreviewId;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Forest Clearing & Permit Map",
    subtitle: "Environmental geospatial analysis",
    description:
      "Detects vegetation loss in southern Pará via Sentinel-2 change detection (2019 vs 2023), then cross-references cleared patches against ANM SIGMINE mining permits. NDVI baseline live on the map; Siamese U-Net planned. A public-data flagging tool, not a legal determination.",
    url: "https://illegal-deforestation-detector.vercel.app/",
    preview: "deforestation",
    image: "/projects/deforestation.png"
  },
  {
    title: "Globe of Earthquakes",
    subtitle: "Interactive data visualization",
    description:
      "USGS earthquake data on a 3D globe. Spike height shows frequency; color shows average magnitude.",
    url: "https://globe-of-earthquakes.vercel.app/",
    preview: "globe",
    image: "/projects/globe.png"
  },
  {
    title: "Blindspot Tracker",
    subtitle: "Media analysis tool",
    description:
      "Per-article political bias analysis from the text itself, framing, sources, and coverage gaps over time.",
    url: "https://political-bias-analysis.vercel.app/analyze",
    preview: "blindspot",
    image: "/projects/blindspot.png"
  },
  {
    title: "Toes Down",
    subtitle: "Fitness app",
    description: "Web version of heads up with emphasis on custom packs, minimalist UI, and studying.",
    url: "https://toes-down-deployed.vercel.app/",
    preview: "toes-down",
    image: "/projects/toes-down.png"
  }
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Node.js",
  "Three.js",
  "Earth Engine",
  "Data Viz",
  "Vercel",
  "Git"
];
