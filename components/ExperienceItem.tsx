import Image from "next/image";
import type { Experience } from "@/data/experience";

export default function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <div data-anim="" className="exp-item">
      <div className="exp-logo">
        <Image src={exp.logo} alt={exp.org} width={44} height={44} />
      </div>
      <div style={{ flex: 1 }}>
        <div className="exp-head">
          <div className="exp-title">{exp.title}</div>
          <div className="exp-dates">{exp.dates}</div>
        </div>
        <div className={`exp-org ${exp.orgAccent ?? "green"}`}>{exp.org}</div>
        <ul className="exp-bullets">
          {exp.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="tags">
          {exp.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
