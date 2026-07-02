export type PreviewId = "globe" | "blindspot" | "toes-down";

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
    title: "Globe of Earthquakes",
    subtitle: "Interactive data visualization",
    description:
      "USGS earthquake data on a 3D globe. Spike height shows frequency; color shows average magnitude.",
    url: "https://globe-of-earthquakes.vercel.app/",
    preview: "globe",
    image: "/projects/globe.png"
  },
  {
    title: "Toes Down",
    subtitle: "Fitness app",
    description: "Web version of heads up with emphasis on custom packs, minimalist UI, and studying.",
    url: "https://toes-down-deployed.vercel.app/",
    preview: "toes-down",
    image: "/projects/toes-down.png"
  },
  {
    title: "Blindspot Tracker",
    subtitle: "Media analysis tool",
    description:
      "Per-article political bias analysis from the text itself, framing, sources, and coverage gaps over time.",
    url: "https://political-bias-analysis.vercel.app/analyze",
    preview: "blindspot",
    image: "/projects/blindspot.png"
  }
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Three.js",
  "Data Viz",
  "Vercel",
  "Git"
];
