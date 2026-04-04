"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { SiCredly } from "react-icons/si";

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

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
              style={{ background: "rgba(59,130,246,0.1)", color: "var(--accent)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              style={{ color: "var(--foreground)" }}>
              Christian{" "}
              <span style={{ color: "var(--accent)" }}>Dela Cruz</span>
            </h1>

            <h2 className="text-lg sm:text-xl font-semibold mb-4"
              style={{ color: "var(--muted)" }}>
              Information Technology &amp; Cybersecurity Specialist
            </h2>

            <p className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              style={{ color: "var(--muted)" }}>
              Full-stack developer with expertise in mobile app development,
              networking, and cloud infrastructure. Passionate about building
              secure, scalable, and user-centric solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                View My Work
                <FaArrowRight size={14} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "transparent",
                  color: "var(--foreground)",
                  border: "1px solid var(--card-border)",
                }}
              >
                Contact Me
              </Link>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "var(--card-bg)",
                  color: "var(--muted)",
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
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--muted)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--card-border)";
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
                boxShadow: "0 0 40px rgba(59,130,246,0.25)",
              }}
            >
              <Image
                src="/profile-placeholder.svg"
                alt="Christian Dela Cruz"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Quick stats */}
            <div
              className="grid grid-cols-3 gap-3 w-full max-w-xs"
            >
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
    </div>
  );
}

