import Image from "next/image";
import SidebarNav from "@/components/SidebarNav";
import RightRail from "@/components/RightRail";
import RevealManager from "@/components/RevealManager";
import SectionTitle from "@/components/SectionTitle";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/data/site";
import { stack } from "@/data/stack";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <RevealManager />
      <SidebarNav />
      <RightRail />

      <div className="page">
        <div className="bento">
          {/* banner */}
          <div data-anim="" className="banner span-6">
            <Image
              src="/uploads/banner.jpg"
              alt="Tuolumne Meadows at sunset"
              fill
              priority
              sizes="(max-width: 1020px) 100vw, 1020px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <div className="banner-fade" />
          </div>

          {/* intro */}
          <div data-anim="" className="intro span-4">
            {site.showDoodles && <span className="intro-doodle">&gt;&lt;(((&#39;&gt;</span>}
            <div className="intro-row">
              <div className="intro-avatar">
                <Image
                  src="/uploads/profile-head.jpg"
                  alt="profile photo"
                  width={208}
                  height={208}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <div className="intro-hi">
                  hi, i&#39;m <span>{site.handle}</span>
                </div>
                <div className="intro-name">{site.name}</div>
                <div className="intro-tagline">{site.tagline}</div>
              </div>
            </div>
          </div>

          {/* socials */}
          <div data-anim="" className="socials span-2">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="#cfdcd2">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
              </svg>
              github
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="#cfdcd2">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
              </svg>
              linkedin
            </a>
            <a href={`mailto:${site.email}`} className="social-link accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="#f0c8ac" strokeWidth="2" strokeLinejoin="round">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="M3 6l9 6.5L21 6" />
              </svg>
              email
            </a>
          </div>

          {/* about */}
          <div data-anim="" data-section="about" className="card card-hover span-6" style={{ padding: "28px 32px" }}>
            <SectionTitle>About</SectionTitle>
            <div className="about-row">
              <div className="about-photo">
                <Image
                  src="/uploads/fishing.jpg"
                  alt="Matthew fishing at sunset on the beach"
                  width={200}
                  height={200}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="about-text">
                {site.about[0]}
                <br />
                <br />
                {site.about[1]}
              </p>
            </div>
          </div>

          {/* stack */}
          <div data-anim="" data-section="stack" className="card card-hover span-6" style={{ padding: "28px 32px" }}>
            <SectionTitle>Stack</SectionTitle>
            <div className="chips">
              {stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* experience */}
          <div data-anim="" data-section="experience" className="card card-hover span-6" style={{ padding: "28px 32px" }}>
            <SectionTitle>Experience</SectionTitle>
            <div className="exp-list">
              {experience.map((exp) => (
                <ExperienceItem key={`${exp.org}-${exp.title}`} exp={exp} />
              ))}
            </div>
          </div>

          {/* projects */}
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} sectionId={i === 0 ? "projects" : undefined} />
          ))}

          {/* education */}
          <div data-anim="" className="card education span-6">
            <SectionTitle>Education</SectionTitle>
            <div className="education-school">{site.education.school}</div>
            <div className="exp-dates">{site.education.dates}</div>
          </div>
        </div>

        {/* footer */}
        <div className="footer">
          {site.showDoodles && (
            <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24">
              <g fill="none" stroke="#9db3a6" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 20L18 5M18 5v9" />
                <circle cx="6.5" cy="17.5" r="2.2" />
              </g>
            </svg>
          )}
          <span>© matthew tran {new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  );
}
