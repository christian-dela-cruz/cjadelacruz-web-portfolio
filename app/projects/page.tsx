import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  duration?: string;
  github?: string;
  demo?: string;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    title: "HOPFOG: Multi-Hop Messaging and Communication Application",
    description:
      "A community-based communication solution designed for low-connectivity or disaster-prone environments. Leverages fog computing concepts and a multi-hop mesh architecture.",
    bullets: [
      "Multi-hop communication system utilizing IEEE 802.15.4 standard",
      "Implemented fog computing concepts for localized data processing",
      "Community-based solution for low-connectivity or disaster-prone environments",
    ],
    tech: ["IEEE 802.15.4", "Fog Computing", "Mobile", "Networking"],
    duration: "September 2025 – April 2026",
    status: "in-progress",
  },
  {
    title: "EliteFitness Mobile App",
    description:
      "A native Android fitness application built with Xamarin.Android (C#) helping users manage and track their fitness journey with real-time data sync.",
    bullets: [
      "Native Android application using Xamarin.Android (C#)",
      "Firebase integration for real-time data storage and sync",
      "User profiles, workout logs, and progress metrics tracking",
    ],
    tech: ["Xamarin.Android", "C#", "Firebase", "Android"],
    status: "completed",
  },
  {
    title: "Darwin's Game",
    description:
      "Game project currently in development. Description and technical details will be updated as the project progresses.",
    bullets: ["Details to be added once the project is finalized."],
    tech: ["TBD"],
    status: "planned",
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.2)",
  },
  "in-progress": {
    label: "In Progress",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
  },
  planned: {
    label: "Planned",
    color: "#9ca3af",
    bg: "rgba(156,163,175,0.1)",
    border: "rgba(156,163,175,0.2)",
  },
};

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen py-20 px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Page heading */}
        <div className="mb-14 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            My <span style={{ color: "var(--accent)" }}>Projects</span>
          </h1>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            A showcase of selected work spanning mobile development, networking,
            and software engineering.
          </p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => {
            const status = statusConfig[project.status];
            return (
              <article
                key={idx}
                className="rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <h2
                      className="text-lg sm:text-xl font-bold mb-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium self-start flex items-center gap-1.5"
                    style={{
                      color: status.color,
                      background: status.bg,
                      border: `1px solid ${status.border}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: status.color }}
                    />
                    {status.label}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2 mb-5">
                  {project.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Duration */}
                {project.duration && (
                  <div
                    className="flex items-center gap-2 text-xs mb-5"
                    style={{ color: "var(--muted)" }}
                  >
                    <HiCalendar size={14} style={{ color: "var(--accent)" }} />
                    {project.duration}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg"
                      style={{
                        background: "rgba(59,130,246,0.08)",
                        color: "var(--accent)",
                        border: "1px solid rgba(59,130,246,0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.demo) && (
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--muted)",
                          border: "1px solid var(--card-border)",
                        }}
                      >
                        <FaGithub size={14} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
                        style={{
                          background: "rgba(59,130,246,0.1)",
                          color: "var(--accent)",
                          border: "1px solid rgba(59,130,246,0.2)",
                        }}
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
