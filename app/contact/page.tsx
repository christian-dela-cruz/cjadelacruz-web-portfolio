"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaEnvelopeOpen,
  FaPaperPlane,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiCredly } from "react-icons/si";

const contactInfo = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "christian-dela-cruz",
    href: "https://github.com/christian-dela-cruz",
    display: "github.com/christian-dela-cruz",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Christian Dela Cruz",
    href: "https://www.linkedin.com/in/christian-dela-cruz-629aa6345",
    display: "linkedin.com/in/christian-dela-cruz-629aa6345",
  },
  {
    icon: FaEnvelope,
    label: "Gmail",
    value: "cjadelacruz.it@gmail.com",
    href: "mailto:cjadelacruz.it@gmail.com",
    display: "cjadelacruz.it@gmail.com",
  },
  {
    icon: SiCredly,
    label: "Credly",
    value: "Badges & Certifications",
    href: "https://www.credly.com/users/christian-joseph-dela-cruz/badges#credly",
    display: "credly.com/users/christian-joseph-dela-cruz",
  },
];

export default function ContactPage() {
  return (
    <div
      className="min-h-screen py-20 px-6"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Page heading */}
        <div className="mb-10 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Get In <span style={{ color: "var(--accent)" }}>Touch</span>
          </h1>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Whether you have a project in mind, a question, or just want to say
            hello — my inbox is always open.
          </p>
        </div>

        {/* Availability banner */}
        <div
          className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl mb-10 mx-auto max-w-md"
          style={{
            background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)",
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
            Currently available for freelance &amp; full-time opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <h2
                className="text-lg font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Let&apos;s Connect
              </h2>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                Reach out through any of these channels.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, href, display }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:-translate-y-0.5 group"
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
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
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
                <FaExternalLinkAlt
                  size={11}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--accent)" }}
                />
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
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
              >
                <FaEnvelopeOpen size={15} />
              </div>
              <h2
                className="text-lg font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Send a Message
              </h2>
            </div>

            <form className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--muted)" }}
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--card-border)";
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--muted)" }}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      background: "var(--background)",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--card-border)";
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--muted)" }}
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--card-border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--card-border)";
                  }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--muted)" }}
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--card-border)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--card-border)";
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
    </div>
  );
}
