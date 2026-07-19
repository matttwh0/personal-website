export type Experience = {
  title: string;
  org: string;
  orgAccent?: "green" | "orange";
  dates: string;
  logo: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    title: "Software Engineering Intern",
    org: "Susty",
    orgAccent: "green",
    dates: "feb – may 2026",
    logo: "/uploads/logo-susty-sq.png",
    bullets: [
      "Built and deployed the company's web application on Vercel, owning the full development lifecycle from design to launch.",
      "Launched a production web app from scratch by translating Figma designs into Next.js.",
      "Improved on-page SEO score by 33% with XML sitemaps and robots.txt.",
      "Collaborated directly with the CEO to align product direction and ship features on a startup timeline.",
    ],
    tags: ["Next.js (App Router)", "TypeScript", "Tailwind CSS v4", "GitHub", "Vercel", "Figma"],
  },
  {
    title: "Cloud AI Engineering Fellow",
    org: "NXP × CTRL SDSU",
    orgAccent: "orange",
    dates: "feb – apr 2026",
    logo: "/uploads/logo-nxp-sq.png",
    bullets: [
      "Architected a multi-agent AI workflow with LangGraph on a team of 5 to generate chip block diagrams from RTL code.",
      "Developed a unit & integration test suite for AI agents to catch failed JSON schemas and drive LLM self-correction.",
      "Wired the AWS Bedrock API, IAM roles, token usage, and cost tracking across models.",
      "Built a Graphviz diagram pipeline with hierarchical node abstraction, plus a local interactive visualization server for engineers.",
    ],
    tags: ["LangGraph", "AWS Bedrock", "Graphviz", "Python"],
  },
  {
    title: "Software Engineering Intern",
    org: "Dynamic Active",
    orgAccent: "green",
    dates: "oct 2025 – jan 2026",
    logo: "/uploads/logo-da-sq.png",
    bullets: [
      "Designed and implemented the FastAPI backend of a Learning Management System from the ground up.",
      "Shipped 14+ RESTful APIs powering auth, assignments, submissions, and event workflows.",
      "Designed the PostgreSQL schema for users, assignments, submissions, grading, and event tracking.",
    ],
    tags: ["FastAPI", "PostgreSQL", "Python"],
  },
  {
    title: "Robotics Perception Intern",
    org: "Real-Time Embedded & Control Systems Lab · SDSU",
    orgAccent: "orange",
    dates: "feb 2025 – now",
    logo: "/uploads/logo-sdsu.png",
    bullets: [
      "Improved vehicle object detection to 92% mAP50-95 at 85 ms average latency, reducing crash rate.",
      "Integrated a YOLOv8-nano model trained on 833 custom-labeled images into an autonomous F1Tenth racing platform's Intel RealSense setup for real-time localization and obstacle detection.",
      "Developed a ROS2 node that dynamically crops and resizes the camera feed to cut noise and boost performance.",
      "Integrated the CARLA simulator with the F1Tenth platform for faster perception testing and validation.",
    ],
    tags: ["YOLOv8", "ROS2", "CARLA", "RealSense"],
  },
  {
    title: "Machine Learning Research Assistant",
    org: "AI4Business Lab · SDSU",
    orgAccent: "green",
    dates: "sep 2024 – aug 2025",
    logo: "/uploads/logo-sdsu.png",
    bullets: [
      "Developed automatic pavement distress detection algorithms with CNNs on a research team.",
      "Processed 1,000+ images using a weakly supervised learning approach.",
      "Trained distillation models on high-performance remote servers with large pavement distress datasets.",
    ],
    tags: ["CNNs", "PyTorch", "Distillation"],
  },
  {
    title: "Information Technology Intern",
    org: "Lavner Education · University of San Diego",
    orgAccent: "orange",
    dates: "jun – aug 2023",
    logo: "/uploads/logo-lavner.png",
    bullets: [
      "Instructed cohorts of 10–13 students in Lua, robotics, and object-oriented programming.",
      "Developed streamlined curriculums spanning computer science, robotics, and game development.",
    ],
    tags: ["Lua", "Robotics", "Teaching"],
  },
];
