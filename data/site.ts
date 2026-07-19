export type RightRailStyle =
  | "now status"
  | "location clock"
  | "fly-line doodle"
  | "back-to-top bobber"
  | "off";

export const site = {
  name: "Matthew Tran",
  handle: "@matttwh0",
  tagline: "cs @ sdsu · full-stack + ai",
  email: "matttran2004@gmail.com",
  github: "https://github.com/matttwh0",
  linkedin: "https://www.linkedin.com/in/matthewtran7",
  about: [
    "Hey, thanks for visiting my website! My name is Matthew and I'm a developer from SDSU. I build full-stack apps and AI agents, and I've shipped production code in fast-moving startups. At NXP, my team and I built an agent that generates diagrams to speed up chip design and debugging.",
    "In my free time, I like to help my local community by building websites for their businesses. I also love fly fishing and playing basketball at my local recreational center.",
  ],
  showDoodles: true,
  rightRail: "fly-line doodle" as RightRailStyle,
  education: {
    school: "San Diego State University, B.S. Computer Science",
    dates: "aug 2022 – may 2026",
  },
};
