"use client";

import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaExternalLinkAlt,
  FaUser,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";

const skills = {
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

export default function AboutPage() {
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
            About <span style={{ color: "var(--accent)" }}>Me</span>
          </h1>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            IT professional with a passion for cybersecurity, full-stack
            development, and building meaningful software.
          </p>
        </div>

        {/* Bio Card */}
        <div
          className="rounded-2xl p-6 mb-8"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "var(--accent-bg)",
                color: "var(--accent)",
                border: "1px solid var(--accent-border)",
              }}
            >
              <FaUser size={18} />
            </div>
            <div>
              <h2
                className="text-base font-semibold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Who I Am
              </h2>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--muted)" }}
              >
                I&apos;m a 4th-year BS Information Technology student
                specializing in Cybersecurity at Mapúa Malayan Colleges Laguna.
                I&apos;m passionate about building secure applications, exploring
                network architectures, and developing solutions that bridge
                technology and real-world needs. When I&apos;m not coding,
                I&apos;m studying for certifications or tinkering with
                networking setups.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cybersecurity",
                  "Full-Stack Dev",
                  "Networking",
                  "Mobile Apps",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Education */}
            <section
              className="rounded-2xl p-6"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-bg-md)" }}
                >
                  <FaGraduationCap size={18} style={{ color: "var(--accent)" }} />
                </div>
                <h2
                  className="font-semibold text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Education
                </h2>
              </div>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: "var(--foreground)" }}
                >
                  B.S. Information Technology
                </p>
                <p className="text-xs mb-1" style={{ color: "var(--accent)" }}>
                  Cybersecurity Specialization
                </p>
                <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>
                  Mapúa Malayan Colleges Laguna
                </p>
                <span
                  className="text-xs px-2 py-1 rounded-md font-medium"
                  style={{
                    background: "var(--accent-bg-md)",
                    color: "var(--accent)",
                  }}
                >
                  2022 – Present
                </span>
              </div>
            </section>

            {/* Certifications */}
            <section
              className="rounded-2xl p-6"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-bg-md)" }}
                >
                  <FaCertificate
                    size={18}
                    style={{ color: "var(--accent)" }}
                  />
                </div>
                <h2
                  className="font-semibold text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Certifications
                </h2>
              </div>

              <ul className="flex flex-col gap-2">
                {certifications.map((cert) =>
                  cert.credlyUrl ? (
                    <li key={cert.name}>
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 p-3 rounded-xl transition-all hover:-translate-y-0.5 group"
                        style={{
                          background: "var(--background)",
                          border: "1px solid var(--card-border)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderColor = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderColor = "var(--card-border)";
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: "var(--accent-bg)",
                            color: "var(--accent)",
                          }}
                        >
                          <FaCertificate size={12} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-1">
                            <p
                              className="text-xs font-semibold leading-snug"
                              style={{ color: "var(--foreground)" }}
                            >
                              {cert.name}
                            </p>
                            <FaExternalLinkAlt
                              size={9}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: "var(--accent)", opacity: 0.7 }}
                            />
                          </div>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: "var(--muted)" }}
                          >
                            {cert.issuer}
                          </p>
                          <span
                            className="inline-block text-xs px-2 py-0.5 rounded-md mt-1.5 font-medium"
                            style={{
                              background: "var(--accent-bg)",
                              color: "var(--accent)",
                            }}
                          >
                            {cert.date}
                          </span>
                        </div>
                      </a>
                    </li>
                  ) : (
                    <li
                      key={cert.name}
                      className="flex gap-3 p-3 rounded-xl"
                      style={{
                        background: "var(--background)",
                        border: "1px solid var(--card-border)",
                      }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "var(--accent-bg)",
                          color: "var(--accent)",
                        }}
                      >
                        <FaCertificate size={12} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-xs font-semibold leading-snug"
                          style={{ color: "var(--foreground)" }}
                        >
                          {cert.name}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--muted)" }}
                        >
                          {cert.issuer}
                        </p>
                        <span
                          className="inline-block text-xs px-2 py-0.5 rounded-md mt-1.5 font-medium"
                          style={{
                            background: "var(--accent-bg)",
                            color: "var(--accent)",
                          }}
                        >
                          {cert.date}
                        </span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </section>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Experience */}
            <section
              className="rounded-2xl p-6"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-bg-md)" }}
                >
                  <FaBriefcase size={16} style={{ color: "var(--accent)" }} />
                </div>
                <h2
                  className="font-semibold text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Experience
                </h2>
              </div>

              <div
                className="rounded-xl p-5"
                style={{
                  background: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="font-semibold text-sm"
                      style={{ color: "var(--foreground)" }}
                    >
                      Freelance Mobile App Developer
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--accent)" }}
                    >
                      EliteFitness
                    </p>
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full self-start font-medium"
                    style={{
                      background: "var(--accent-bg-md)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-border)",
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
            </section>

            {/* Technical Skills */}
            <section
              className="rounded-2xl p-6"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-bg-md)" }}
                >
                  <HiChip size={18} style={{ color: "var(--accent)" }} />
                </div>
                <h2
                  className="font-semibold text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  Technical Skills
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <div className="flex items-center gap-2 mb-2">
                      <FaCode
                        size={12}
                        style={{ color: "var(--accent)" }}
                      />
                      <h3
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: "var(--accent)" }}
                      >
                        {category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-lg"
                          style={{
                            background: "var(--background)",
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
