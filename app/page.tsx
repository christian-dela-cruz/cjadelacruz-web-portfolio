"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaExternalLinkAlt,
  FaImage,
  FaPaperPlane,
  FaContao,
  FaEnvelopeOpen,    // ✉️ Open envelope
  FaPhone,           // ☎️ Phone icon
  FaPhoneSquare,     // ☎️ Phone in square
  FaAddressCard,     // 📋 Address card


} from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { HiChip, HiCalendar } from "react-icons/hi";

// ─── Data ────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/christian-dela-cruz",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/christian-dela-cruz-629aa6345",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:cjadelacruz.it@gmail.com",
    label: "Gmail",
  },
  {
    icon: SiCredly,
    href: "https://www.credly.com/users/christian-joseph-dela-cruz/badges#credly",
    label: "Credly",
  },
];

const skills: Record<string, string[]> = {
  Programming: ["Python", "C#", "Kotlin", "HTML", "ASP.NET MVC"],
  Networking: [
    "Routing & Switching",
    "Network Infrastructure",
    "IEEE 802.15.4",
  ],
  "Systems & Cloud": [
    "Systems Administration",
    "Oracle VirtualBox",
    "Google Cloud Platform",
  ],
  Security: ["Kali Linux", "Security Fundamentals", "Ethical Hacking"],
  Databases: ["MySQL", "Oracle"],
  "Tools & Platforms": [
    "Cisco Packet Tracer",
    "Visual Studio Code",
    "Visual Studio",
    "Arduino IDE",
    "Figma",
    "GitHub",
    "Canva",
  ],
};

const certifications = [
  {
    name: "CompTIA Tech+",
    issuer: "CompTIA",
    date: "December 2025",
    credlyUrl:
      "https://www.credly.com/badges/1577cccf-5f34-46bd-8d09-b7e837a28d03/public_url",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    credlyUrl:
      "https://www.credly.com/earner/earned/badge/b78ed2f8-74f1-4fbc-8cb2-a7f622e80ea6",
  },
  {
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    credlyUrl:
      "https://www.credly.com/earner/earned/badge/7781dbd5-da20-4852-ab68-84dda25f6895",
  },
  {
    name: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "March 2025",
    credlyUrl:
      "https://www.credly.com/badges/cffe1fbf-7b99-4b79-a873-03031e7fd62d/public_url",
  },
  {
    name: "TOEIC",
    issuer: "ETS",
    date: "L&R: 940/990 | S: 160 | W: 190",
    credlyUrl: null,
  },
];

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  duration?: string;
  github: string; // TODO: Replace placeholder "#" with actual GitHub repository URL
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
    github: "#", // TODO: Replace with GitHub repository URL
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
    github: "#", // TODO: Replace with GitHub repository URL
    status: "completed",
  },
  {
    title: "Darwin's Game",
    description:
      "Game project currently in development. Description and technical details will be updated as the project progresses.",
    bullets: ["Details to be added once the project is finalized."],
    tech: ["TBD"],
    github: "#", // TODO: Replace with GitHub repository URL
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

const contactInfo = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/christian-dela-cruz",
    display: "github.com/christian-dela-cruz",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christian-dela-cruz-629aa6345",
    display: "linkedin.com/in/christian-dela-cruz-629aa6345",
  },
  {
    icon: FaEnvelope,
    label: "Gmail",
    href: "mailto:cjadelacruz.it@gmail.com",
    display: "cjadelacruz.it@gmail.com",
  },
  {
    icon: SiCredly,
    label: "Credly",
    href: "https://www.credly.com/users/christian-joseph-dela-cruz/badges#credly",
    display: "credly.com/users/christian-joseph-dela-cruz",
  },
];

// ─── Shared style helpers ─────────────────────────────────────────────────────

const accentBg = "rgba(6,182,212,0.1)";
const accentBorder = "rgba(6,182,212,0.2)";
const accentBgMd = "rgba(6,182,212,0.15)";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div style={{ background: "var(--background)" }}>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 py-20 scroll-mt-16"
      >
        <div className="max-w-6xl w-full mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
                style={{
                  background: accentBg,
                  color: "var(--accent)",
                  border: `1px solid ${accentBorder}`,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                style={{ color: "var(--foreground)" }}
              >
                Christian{" "}
                <span style={{ color: "var(--accent)" }}>Dela Cruz</span>
              </h1>

              <h2
                className="text-lg sm:text-xl font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                Information Technology &amp; Cybersecurity Specialist
              </h2>

              <p
                className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                style={{ color: "var(--foreground)" }}
              >
                Full-stack developer with expertise in mobile app development,
                networking, and cloud infrastructure. Passionate about building
                secure, scalable, and user-centric solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  View My Work
                  <FaArrowRight size={14} />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: "var(--card-bg)",
                    color: "var(--foreground)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                    <FaEnvelope size={13} />
                  Contact Me
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: "var(--card-bg)",
                    color: "var(--foreground)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <FaDownload size={13} />
                  Download Resume
                </a>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: "var(--card-bg)",
                      color: "var(--muted)",
                      border: "1px solid var(--card-border)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--accent)";
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--muted)";
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderColor = "var(--card-border)";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile image */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden"
                style={{
                  border: "3px solid var(--accent)",
                  boxShadow: "0 0 40px rgba(6,182,212,0.25)",
                }}
              >
                <Image
                  src="/Formal_Picture.jpg"
                  alt="Christian Dela Cruz"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                {[
                  { value: "3+", label: "Projects" },
                  { value: "1+", label: "Experience" },
                  { value: "5+", label: "Certs" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center p-3 rounded-xl"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <div
                      className="text-lg font-bold"
                      style={{ color: "var(--accent)" }}
                    >
                      {value}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-24 px-6 scroll-mt-16"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              About <span style={{ color: "var(--accent)" }}>Me</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              IT professional with a passion for cybersecurity, full-stack
              development, and building meaningful software.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Education */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: accentBgMd }}
                  >
                    <FaGraduationCap
                      size={18}
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <h3
                    className="font-semibold text-base"
                    style={{ color: "var(--foreground)" }}
                  >
                    Education
                  </h3>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(6,182,212,0.05)",
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    B.S. Information Technology
                  </p>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "var(--muted)" }}
                  >
                    Cybersecurity Specialization
                  </p>
                  <p
                    className="text-xs mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    Mapúa Malayan Colleges Laguna
                  </p>
                  <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ background: accentBg, color: "var(--accent)" }}
                  >
                    2022 – Present
                  </span>
                </div>
              </div>

              {/* Certifications */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: accentBgMd }}
                  >
                    <FaCertificate
                      size={18}
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <h3
                    className="font-semibold text-base"
                    style={{ color: "var(--foreground)" }}
                  >
                    Certifications
                  </h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {certifications.map((cert) =>
                    cert.credlyUrl ? (
                      <li key={cert.name}>
                        <a
                          href={cert.credlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-xl transition-all hover:-translate-y-0.5 group"
                          style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid var(--card-border)",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor =
                              "var(--accent)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.borderColor =
                              "var(--card-border)";
                          }}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p
                              className="text-xs font-semibold mb-1"
                              style={{ color: "var(--foreground)" }}
                            >
                              {cert.name}
                            </p>
                            <FaExternalLinkAlt
                              size={10}
                              style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}
                            />
                          </div>
                          <p
                            className="text-xs"
                            style={{ color: "var(--muted)" }}
                          >
                            {cert.issuer}
                          </p>
                          <p
                            className="text-xs mt-1"
                            style={{ color: "var(--accent)" }}
                          >
                            {cert.date}
                          </p>
                        </a>
                      </li>
                    ) : (
                      <li
                        key={cert.name}
                        className="p-3 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid var(--card-border)",
                        }}
                      >
                        <p
                          className="text-xs font-semibold mb-1"
                          style={{ color: "var(--foreground)" }}
                        >
                          {cert.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--muted)" }}
                        >
                          {cert.issuer}
                        </p>
                        <p
                          className="text-xs mt-1"
                          style={{ color: "var(--accent)" }}
                        >
                          {cert.date}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Experience */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: accentBgMd }}
                  >
                    <FaBriefcase size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-semibold text-base"
                    style={{ color: "var(--foreground)" }}
                  >
                    Experience
                  </h3>
                </div>

                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(6,182,212,0.04)",
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h4
                        className="font-semibold text-sm"
                        style={{ color: "var(--foreground)" }}
                      >
                        Freelance Mobile App Developer
                      </h4>
                      <p className="text-sm" style={{ color: "var(--accent)" }}>
                        EliteFitness
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full self-start"
                      style={{
                        background: accentBg,
                        color: "var(--accent)",
                        border: `1px solid ${accentBorder}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Mar 2025 – Jun 2025
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {[
                      "Developed a native Android fitness application using Xamarin.Android (C#) to help users manage and track their fitness journey.",
                      "Integrated Firebase for real-time data storage and synchronization of user profiles, workout logs, and progress metrics.",
                      "Designed and implemented a user-friendly interface for managing fitness schedules, tracking progress, and setting personal goals.",
                    ].map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Skills */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: accentBgMd }}
                  >
                    <HiChip size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-semibold text-base"
                    style={{ color: "var(--foreground)" }}
                  >
                    Technical Skills
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <div className="flex items-center gap-2 mb-2">
                        <FaCode
                          size={12}
                          style={{ color: "var(--accent)" }}
                        />
                        <h4
                          className="text-xs font-semibold uppercase tracking-wide"
                          style={{ color: "var(--accent)" }}
                        >
                          {category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2.5 py-1 rounded-lg"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              color: "var(--muted)",
                              border: "1px solid var(--card-border)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-24 px-6 scroll-mt-16"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              My <span style={{ color: "var(--accent)" }}>Projects</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              A showcase of selected work spanning mobile development,
              networking, and software engineering.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => {
              const status = statusConfig[project.status];
              const hasLink = project.github && project.github !== "#";
              return (
                <article
                  key={idx}
                  className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Screenshot placeholder */}
                  <div
                    className="h-48 relative flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #0d1625 0%, #0a1c30 100%)",
                      borderBottom: "1px solid var(--card-border)",
                    }}
                  >
                    <div className="text-center">
                      <FaImage
                        size={36}
                        style={{
                          color: "var(--muted)",
                          margin: "0 auto 8px",
                          opacity: 0.4,
                        }}
                      />
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--muted)", opacity: 0.5 }}
                      >
                        Project Screenshot
                      </p>
                    </div>
                    {/* Status badge overlay */}
                    <span
                      className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5"
                      style={{
                        color: status.color,
                        background: status.bg,
                        border: `1px solid ${status.border}`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: status.color }}
                      />
                      {status.label}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3
                      className="text-lg sm:text-xl font-bold mb-3"
                      style={{ color: "var(--foreground)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{ color: "var(--muted)" }}
                    >
                      {project.description}
                    </p>

                    {/* Bullets */}
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
                        <HiCalendar
                          size={14}
                          style={{ color: "var(--accent)" }}
                        />
                        {project.duration}
                      </div>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-lg"
                          style={{
                            background: accentBg,
                            color: "var(--accent)",
                            border: `1px solid ${accentBorder}`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link */}
                    <a
                      href={hasLink ? project.github : undefined}
                      target={hasLink ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-disabled={!hasLink}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105"
                      style={{
                        background: hasLink
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(255,255,255,0.02)",
                        color: hasLink ? "var(--muted)" : "var(--card-border)",
                        border: "1px solid var(--card-border)",
                        cursor: hasLink ? "pointer" : "default",
                        pointerEvents: hasLink ? "auto" : "none",
                      }}
                    >
                      <FaGithub size={14} />
                      {hasLink ? "View on GitHub" : "GitHub (link pending)"}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 px-6 scroll-mt-16"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              Get In <span style={{ color: "var(--accent)" }}>Touch</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Whether you have a project in mind, a question, or just want to
              say hello — my inbox is always open.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Contact Details
              </h3>

              {contactInfo.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:-translate-y-0.5"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--card-border)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: accentBg, color: "var(--accent)" }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm truncate"
                      style={{ color: "var(--muted)" }}
                    >
                      {display}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Send a Message
              </h3>

              <form className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "var(--muted)" }}
                      htmlFor="contact-name"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--card-border)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: "var(--muted)" }}
                      htmlFor="contact-email"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--card-border)",
                        color: "var(--foreground)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--muted)" }}
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="How can I help?"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--muted)" }}
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  <FaPaperPlane size={14} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

