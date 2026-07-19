export type Project = {
  name: string;
  link: string;
  description: string;
  image: string;
  imagePosition?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "AACE",
    link: "https://github.com/nxpTeam1/AACE",
    description:
      "Agentic Abstraction for Chip Engineering, a multi-agent pipeline that turns RTL code into clean, single-page chip block diagrams.",
    image: "/uploads/aace-cover.png",
    imagePosition: "center",
    tags: ["LangGraph", "FastAPI", "AWS Bedrock", "EC2", "S3", "Graphviz"],
  },
  {
    name: "3Dify",
    link: "https://github.com/matttwh0/3Dify",
    description:
      "Turns short videos into 3D-print-ready meshes via gaussian splatting. Led a team of 3, React UI, Firebase auth, Three.js preview.",
    image: "/uploads/3dify-demo.gif",
    imagePosition: "top",
    tags: ["React", "Three.js", "Flask", "Firebase"],
  },
  {
    name: "Susty",
    link: "https://susty.app/",
    description:
      "Marketing site for a consumer-first sustainability ratings platform, built and shipped from Figma designs to production on Vercel.",
    image: "https://susty.app/opengraph-image.png",
    imagePosition: "center",
    tags: ["Next.js", "TypeScript", "Tailwind v4", "Vercel"],
  },
  {
    name: "KL Milky Nails",
    link: "https://klmilkynails.com/",
    description:
      "Website for a nail salon in Encino, CA, designed and built end-to-end with Claude, from art direction to deployed site.",
    image: "https://klmilkynails.com/assets/og-image.jpg",
    imagePosition: "center",
    tags: ["Sanity CMS", "HTML/CSS/JS", "Vercel"],
  },
];
