"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, Suspense, lazy, Component } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaArrowUp,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaExternalLinkAlt,
  FaImage,
  FaPaperPlane,
  FaContao,
  FaEnvelopeOpen,
  FaPhone,
  FaPhoneSquare,
  FaAddressCard,
  FaChevronLeft,
  FaChevronRight,
  FaChalkboardTeacher,
  FaTimes,
  FaShieldAlt,
  FaDatabase,
  FaNetworkWired,
  FaToolbox,
  FaPlug,
  FaMagic,
} from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { HiChip, HiCalendar } from "react-icons/hi";
import { HiCloud } from "react-icons/hi2";
import { supabase } from "@/lib/supabase";
import { detectWebGL } from "@/lib/webgl";
import { ShaderFallback } from "@/components/ShaderFallback";
import {
  initialProfile,
  initialSkills,
  initialProjects,
  initialCertifications,
  initialSeminars,
  initialExperience,
  initialEducation,
  type Project
} from "@/lib/constants";

const Dithering = typeof window !== "undefined" && detectWebGL()
  ? lazy(() => import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering })))
  : () => <div className="absolute inset-0 bg-transparent" />;

class ShaderErrorBoundary extends React.Component<{ children: React.ReactNode; onError?: () => void }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn("Shader WebGL error caught:", error);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      return <div className="absolute inset-0 bg-transparent" />;
    }
    return this.props.children;
  }
}

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

interface PortfolioClientProps {
  databaseProfile: any;
  databaseSkills: any;
  databaseProjects: any;
  databaseCertifications: any;
  databaseSeminars: any;
  databaseExperience: any;
  databaseEducation: any;
}

export default function PortfolioClient({
  databaseProfile,
  databaseSkills,
  databaseProjects,
  databaseCertifications,
  databaseSeminars,
  databaseExperience,
  databaseEducation
}: PortfolioClientProps) {
  const [shaderError, setShaderError] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(false);

  useEffect(() => {
    setIsWebGLSupported(detectWebGL());

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason &&
        event.reason.message &&
        (event.reason.message.includes("Paper Shaders") || event.reason.message.includes("WebGL"))
      ) {
        event.preventDefault();
        setShaderError(true);
      }
    };

    window.addEventListener("unhandledrejection", handleRejection);
    return () => window.removeEventListener("unhandledrejection", handleRejection);
  }, []);

  const certScrollRef = useRef<HTMLDivElement>(null);

  // Dynamic State variables initialized with server-fetched database data or local seed fallbacks
  const [skills, setSkills] = useState<Record<string, string[]>>(() => {
    if (databaseSkills && databaseSkills.length > 0) {
      const skillsObj: Record<string, string[]> = {};
      databaseSkills.forEach((s: any) => {
        skillsObj[s.category] = s.items;
      });
      return skillsObj;
    }
    return initialSkills;
  });

  const [certifications, setCertifications] = useState<any[]>(() => {
    if (databaseCertifications && databaseCertifications.length > 0) {
      return databaseCertifications.map((c: any) => ({
        name: c.name,
        issuer: c.issuer,
        date: c.date,
        badge: c.badge_url || "/placeholder.png",
        credlyUrl: c.credly_url,
      }));
    }
    return initialCertifications;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    if (databaseProjects && databaseProjects.length > 0) {
      return databaseProjects.map((p: any) => ({
        title: p.title,
        description: p.description,
        bullets: p.bullets || [],
        tech: p.tech || [],
        duration: p.duration,
        github: p.github,
        status: p.status,
        screenshots: (p.screenshots || []).map((url: string) => 
          url.replace("/portfolio-assets/Project/", "/portfolio-assets/Projects/")
        ),
      }));
    }
    return initialProjects;
  });

  const [seminars, setSeminars] = useState<any[]>(() => {
    if (databaseSeminars && databaseSeminars.length > 0) {
      return databaseSeminars.map((s: any) => ({
        title: s.title,
        organizer: s.organizer,
        date: s.date,
        image: s.image_url || "/placeholder.png",
      }));
    }
    return initialSeminars;
  });

  const [experience, setExperience] = useState<any[]>(() => {
    if (databaseExperience && databaseExperience.length > 0) {
      return databaseExperience.map((exp: any) => ({
        id: exp.id,
        title: exp.title,
        company: exp.company,
        duration: exp.duration,
        hours: exp.hours,
        bullets: exp.bullets || [],
        tech: exp.tech || []
      }));
    }
    return initialExperience;
  });

  const [education, setEducation] = useState<any[]>(() => {
    if (databaseEducation && databaseEducation.length > 0) {
      return databaseEducation.map((edu: any) => ({
        id: edu.id,
        degree: edu.degree,
        specialization: edu.specialization,
        school: edu.school,
        duration: edu.duration,
        description: edu.description,
        honors: edu.honors
      }));
    }
    return initialEducation;
  });

  const [profile, setProfile] = useState<any>(() => {
    if (databaseProfile) {
      return {
        name: databaseProfile.name || initialProfile.name,
        title: databaseProfile.title || initialProfile.title,
        description: databaseProfile.description || initialProfile.description,
        profile_image_url: databaseProfile.profile_image_url || initialProfile.profile_image_url,
        resume_url: databaseProfile.resume_url || initialProfile.resume_url,
        cv_url: databaseProfile.cv_url || initialProfile.cv_url,
        show_resume: databaseProfile.show_resume !== false,
        show_cv: databaseProfile.show_cv !== false
      };
    }
    return {
      ...initialProfile,
      show_resume: true,
      show_cv: true
    };
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredEntry, setHoveredEntry] = useState<string | null>(null);
  const [projectPage, setProjectPage] = useState(0);
  const [selectedSeminar, setSelectedSeminar] = useState<(typeof initialSeminars)[number] | null>(null);
  const [selectedCert, setSelectedCert] = useState<(typeof initialCertifications)[number] | null>(null);
  const [activeSeminarIndex, setActiveSeminarIndex] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const seminarSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = seminarSliderRef.current;
    if (!el) return;

    const handleScroll = () => {
      const children = el.children;
      if (children.length === 0) return;

      let closestIndex = 0;
      let minDistance = Infinity;
      const containerLeft = el.getBoundingClientRect().left;

      for (let i = 0; i < children.length; i++) {
        const childRect = children[i].getBoundingClientRect();
        const distance = Math.abs(childRect.left - containerLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      setActiveSeminarIndex(closestIndex);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(handleScroll, 100);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [seminars]);

  const navigateSeminar = (direction: "prev" | "next") => {
    const el = seminarSliderRef.current;
    if (!el) return;

    const children = el.children;
    if (children.length === 0) return;

    let targetIndex = activeSeminarIndex;
    if (direction === "prev") {
      targetIndex = Math.max(0, activeSeminarIndex - 1);
    } else {
      targetIndex = Math.min(children.length - 1, activeSeminarIndex + 1);
    }

    const child = children[targetIndex] as HTMLElement;
    if (child) {
      el.scrollTo({
        left: child.offsetLeft - el.offsetLeft,
        behavior: "smooth"
      });
    }
  };

  const scrollToSeminarIndex = (index: number) => {
    const el = seminarSliderRef.current;
    if (!el) return;
    const children = el.children;
    const child = children[index] as HTMLElement;
    if (child) {
      el.scrollTo({
        left: child.offsetLeft - el.offsetLeft,
        behavior: "smooth"
      });
    }
  };

  const handleSeminarCardMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleSeminarCardMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const [slideshowIdx, setSlideshowIdx] = useState(0);
  const slideshowIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [isCTAHovered, setIsCTAHovered] = useState(false);

  const startSlideshow = (screenshots: string[]) => {
    setSlideshowIdx(0);
    if (screenshots.length > 1) {
      slideshowIntervalRef.current = setInterval(() => {
        setSlideshowIdx((i) => (i + 1) % screenshots.length);
      }, 2200);
    }
  };

  const stopSlideshow = () => {
    if (slideshowIntervalRef.current) {
      clearInterval(slideshowIntervalRef.current);
      slideshowIntervalRef.current = null;
    }
    setSlideshowIdx(0);
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current);
      }
    };
  }, []);

  // Scroll-linked fade transitions for Hero and About Me sections
  useEffect(() => {
    const heroEl = document.querySelector(".hero-content-wrapper") as HTMLElement;
    const aboutEl = document.querySelector(".about-content-wrapper") as HTMLElement;
    const heroSection = document.getElementById("home") as HTMLElement;

    if (!heroEl && !aboutEl) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroSection?.offsetHeight || 600;

      // 1. Hero scroll effects: fade out, translate down (parallax), scale down slightly
      if (heroEl) {
        const heroFadeRange = 500;
        const heroOpacity = Math.max(0, 1 - scrollY / heroFadeRange);
        const heroScale = 1 - (scrollY / heroFadeRange) * 0.04;
        const heroTranslateY = scrollY * 0.35; // Parallax translation down

        if (scrollY < heroFadeRange + 100) {
          heroEl.style.opacity = heroOpacity.toString();
          heroEl.style.transform = `translateY(${heroTranslateY}px) scale(${heroScale})`;
          heroEl.style.visibility = "visible";
        } else {
          heroEl.style.visibility = "hidden";
        }
      }

      // 2. About Me scroll effects: fade in, translate up smoothly
      if (aboutEl) {
        // Starts revealing after scrollY > 80, fully visible at scrollY = 500
        const startScroll = 80;
        const endScroll = 500;
        const aboutOpacity = Math.min(1, Math.max(0, (scrollY - startScroll) / (endScroll - startScroll)));
        const aboutTranslateY = Math.max(0, 40 - aboutOpacity * 40); // Translates from 40px down to 0px

        aboutEl.style.opacity = aboutOpacity.toString();
        aboutEl.style.transform = `translateY(${aboutTranslateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial call to set initial offsets
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollCerts = (dir: "left" | "right") => {
    certScrollRef.current?.scrollBy({ left: dir === "left" ? -275 : 275, behavior: "smooth" });
  };

  return (
    <div style={{ background: "var(--background)" }}>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20 scroll-mt-24 relative overflow-hidden pulsing-gradient-bg"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* WebGL Shader Dithering Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 dark:opacity-20 mix-blend-normal transition-opacity duration-500">
          {!shaderError && isWebGLSupported ? (
            <ShaderErrorBoundary onError={() => setShaderError(true)}>
              <Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
                <Dithering
                  colorBack="#00000000" // Transparent background
                  colorFront="#FF7F50"  // Accent Coral color
                  shape="warp"
                  type="4x4"
                  speed={isHeroHovered ? 0.5 : 0.15}
                  className="size-full"
                  minPixelRatio={1}
                />
              </Suspense>
            </ShaderErrorBoundary>
          ) : (
            <ShaderFallback color="#FF7F50" speed={isHeroHovered ? 0.5 : 0.15} />
          )}
        </div>

        <div className="max-w-6xl w-full mx-auto relative z-10 hero-content-wrapper">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                style={{ color: "var(--foreground)" }}
              >
                {profile.name.split(" ")[0]}{" "}
                <span style={{ color: "var(--accent)" }}>
                  {profile.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <h2
                className="text-lg sm:text-xl font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                {profile.title}
              </h2>

              <p
                className="text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                style={{ color: "var(--foreground)" }}
              >
                {profile.description}
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

                {profile.show_resume !== false && (
                  <a
                    href={profile.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: "var(--card-bg)",
                      color: "var(--foreground)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <FaDownload size={13} />
                    View Resume
                  </a>
                )}

                {profile.show_cv !== false && (
                  <a
                    href={profile.cv_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: "var(--card-bg)",
                      color: "var(--foreground)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <FaDownload size={13} />
                    View CV
                  </a>
                )}
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
            <div className="flex-shrink-0 flex flex-col items-center gap-4 mb-auto">
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden"
                style={{
                  border: "3px solid var(--accent)",
                  boxShadow: "0 0 40px rgba(6,182,212,0.25)",
                }}
              >
                <Image
                  src={profile.profile_image_url}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                  className="object-cover"
                  priority
                  unoptimized={profile.profile_image_url.startsWith("http")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-28 px-6 scroll-mt-16"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="max-w-6xl mx-auto about-content-wrapper" style={{ opacity: 0, transform: "translateY(40px)" }}>
          <div className="mb-16 text-center">
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

          <div className="flex flex-col gap-8">

            {/* ── Row 1: Technical Skills ──────────────────────────────────── */}
            <div className="w-full">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: accentBgMd }}
                >
                  <HiChip size={20} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  Technical Skills
                </h3>
                <div style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, var(--card-border) 0%, transparent 100%)",
                  marginLeft: "0.5rem",
                }} />
              </div>

              {(() => {
                const skillCategoryIcons: Record<string, React.ReactNode> = {
                  "Programming": <FaCode size={13} />,
                  "Networking": <FaNetworkWired size={13} />,
                  "Systems & Cloud": <HiCloud size={14} />,
                  "Security": <FaShieldAlt size={13} />,
                  "Databases": <FaDatabase size={13} />,
                  "Tools & Platforms": <FaToolbox size={13} />,
                  "Web Protocols & APIs": <FaPlug size={13} />,
                  "Interactive UI & Animations": <FaMagic size={13} />,
                };
                const categories = Object.keys(skills);

                return (
                  <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
                    {categories.map((cat, categoryIdx) => {
                      const currentItems = skills[cat] || [];
                      const isExpanded = !!expandedCategories[cat];
                      const visibleItems = isExpanded ? currentItems : currentItems.slice(0, 3);

                      return (
                        <div
                          key={cat}
                          className="skill-category-card skill-category-animated p-5 rounded-2xl flex flex-col justify-between animate-fade-in break-inside-avoid mb-6"
                          style={{
                            animationDelay: `${categoryIdx * 45}ms`,
                            height: isExpanded ? "auto" : "260px",
                          }}
                        >
                          <div style={{ paddingBottom: isExpanded ? "0px" : "44px" }}>
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2.5">
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                                  style={{ background: accentBgMd }}
                                >
                                  <span style={{ color: "var(--accent)", display: "flex", alignItems: "center" }}>
                                    {skillCategoryIcons[cat] || <FaCode size={13} />}
                                  </span>
                                </div>
                                <h4
                                  className="font-semibold text-sm"
                                  style={{ color: "var(--foreground)" }}
                                >
                                  {cat}
                                </h4>
                              </div>
                              <span
                                className="text-[10px] px-2.5 py-0.5 rounded-full font-bold"
                                style={{
                                  background: "rgba(255,127,80,0.08)",
                                  color: "var(--accent)",
                                }}
                              >
                                {currentItems.length}
                              </span>
                            </div>

                            {/* Skill Pills Container */}
                            <div className="flex flex-wrap gap-2 content-start">
                              {visibleItems.map((skill) => (
                                <span
                                  key={`${cat}-${skill}`}
                                  className="skill-pill"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* View All / View Less button */}
                          {currentItems.length > 3 && (
                            <div
                              className="pt-3 flex items-center justify-start animate-fade-in"
                              style={isExpanded ? {
                                borderTop: "1px solid var(--card-border)",
                                marginTop: "1rem",
                              } : {
                                borderTop: "1px solid var(--card-border)",
                                position: "absolute",
                                bottom: "1.25rem",
                                left: "1.25rem",
                                right: "1.25rem",
                              }}
                            >
                              <button
                                onClick={() => {
                                  setExpandedCategories((prev) => ({
                                    ...prev,
                                    [cat]: !prev[cat],
                                  }));
                                }}
                                className="text-xs font-semibold flex items-center gap-1 transition-colors duration-200 cursor-pointer"
                                style={{ color: "var(--accent)" }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "var(--accent-hover)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = "var(--accent)";
                                }}
                              >
                                {isExpanded ? (
                                  <>View Less</>
                                ) : (
                                  <>View All (+{currentItems.length - 3})</>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>

            {/* ── Row 2: Experience + Education ───────────────────────────── */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: accentBgMd }}
                  >
                    <FaBriefcase size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "var(--foreground)" }}
                  >
                    Experience
                  </h3>
                </div>

                {/* Timeline */}
                <div className="relative pl-9">
                  {/* Vertical line */}
                  <div
                    className="absolute left-[13px] top-1 bottom-1 w-px"
                    style={{ background: accentBorder }}
                  />

                  {experience.map((exp, index) => (
                    <div
                      key={exp.id || index}
                      className={`relative ${index < experience.length - 1 ? "mb-5" : ""}`}
                      onMouseEnter={() => setHoveredEntry(`exp-${index}`)}
                      onMouseLeave={() => setHoveredEntry(null)}
                    >
                      {/* Dot */}
                      <div
                        className="absolute -left-7 top-3 w-3 h-3 rounded-full transition-all duration-300"
                        style={{
                          background: "var(--accent)",
                          boxShadow: hoveredEntry === `exp-${index}`
                            ? `0 0 0 5px ${accentBg}, 0 0 12px rgba(6,182,212,0.5)`
                            : `0 0 0 3px ${accentBg}`,
                          transform: hoveredEntry === `exp-${index}` ? "scale(1.35)" : "scale(1)",
                        }}
                      />
                      <div
                        className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: "rgba(6,182,212,0.04)",
                          border: `1px solid ${accentBorder}`,
                          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(6,182,212,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = accentBorder;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
                        }}
                      >
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <h4
                              className="font-semibold text-sm"
                              style={{ color: "var(--foreground)" }}
                            >
                              {exp.title}
                            </h4>
                            <span
                              className="text-xs px-3 py-1 rounded-full"
                              style={{
                                background: accentBg,
                                color: "var(--accent)",
                                border: `1px solid ${accentBorder}`,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {exp.duration}
                            </span>
                          </div>
                          <p className="text-sm" style={{ color: "var(--accent)" }}>
                            {exp.company}
                          </p>
                          {exp.hours && (
                            <p className="text-xs" style={{ color: "var(--muted)" }}>
                              {exp.hours}
                            </p>
                          )}
                        </div>

                        {exp.bullets && exp.bullets.length > 0 && (
                          <ul className="flex flex-col gap-2">
                            {exp.bullets.map((point: string, i: number) => (
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
                        )}

                        {/* Tech stack badges */}
                        {exp.tech && exp.tech.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4 pt-4" style={{ borderTop: "1px solid var(--card-border)" }}>
                            {exp.tech.map((techItem: string) => (
                              <span
                                key={techItem}
                                className="text-xs px-2.5 py-1 rounded-lg"
                                style={{
                                  background: accentBg,
                                  color: "var(--accent)",
                                  border: `1px solid ${accentBorder}`,
                                }}
                              >
                                {techItem}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {experience.length === 0 && (
                    <div className="text-[var(--muted)] text-sm italic py-4">No experience entries found.</div>
                  )}
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: accentBgMd }}
                  >
                    <FaGraduationCap size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "var(--foreground)" }}
                  >
                    Education
                  </h3>
                </div>

                {/* Timeline */}
                <div className="relative pl-9">
                  {/* Vertical line */}
                  <div
                    className="absolute left-[13px] top-1 bottom-1 w-px"
                    style={{ background: accentBorder }}
                  />

                  {education.map((edu, index) => (
                    <div
                      key={edu.id || index}
                      className={`relative ${index < education.length - 1 ? "mb-5" : ""}`}
                      onMouseEnter={() => setHoveredEntry(`edu-${index}`)}
                      onMouseLeave={() => setHoveredEntry(null)}
                    >
                      {/* Dot */}
                      <div
                        className="absolute -left-7 top-3 w-3 h-3 rounded-full transition-all duration-300"
                        style={{
                          background: "var(--accent)",
                          boxShadow: hoveredEntry === `edu-${index}`
                            ? `0 0 0 5px ${accentBg}, 0 0 12px rgba(6,182,212,0.5)`
                            : `0 0 0 3px ${accentBg}`,
                          transform: hoveredEntry === `edu-${index}` ? "scale(1.35)" : "scale(1)",
                        }}
                      />
                      <div
                        className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: "rgba(6,182,212,0.04)",
                          border: `1px solid ${accentBorder}`,
                          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(6,182,212,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = accentBorder;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
                        }}
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div className="flex-1">
                            <h4
                              className="font-semibold text-sm mb-1"
                              style={{ color: "var(--foreground)" }}
                            >
                              {edu.degree}
                            </h4>
                            {edu.specialization && (
                              <p className="text-xs" style={{ color: "var(--foreground)" }}>
                                {edu.specialization}
                              </p>
                            )}
                          </div>
                          <span
                            className="text-xs px-3 py-1 rounded-full whitespace-nowrap"
                            style={{
                              background: accentBg,
                              color: "var(--accent)",
                              border: `1px solid ${accentBorder}`,
                            }}
                          >
                            {edu.duration}
                          </span>
                        </div>

                        <p className="text-sm mb-3" style={{ color: "var(--accent)" }}>
                          {edu.school}
                        </p>

                        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                          {edu.description}
                        </p>
                        {edu.honors && (
                          <p className="text-xs mt-3 font-medium" style={{ color: "var(--accent)" }}>
                            {edu.honors}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  {education.length === 0 && (
                    <div className="text-[var(--muted)] text-sm italic py-4">No education entries found.</div>
                  )}
                </div>
              </div>
            </div>

            {/* ── Row 3: Certifications ────────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: accentBgMd }}
                >
                  <FaCertificate size={20} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  Certifications
                </h3>
              </div>

              {/* Infinite marquee slider */}
              <div className="relative infinite-slider-container">
                {/* Gradient fade – left */}
                <div
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
                  style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
                />
                {/* Gradient fade – right */}
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
                  style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
                />

                {/* Scrolling track — cards duplicated for seamless loop */}
                <div className="overflow-hidden py-6">
                  <div className="infinite-slider-track gap-5">
                    {/* First set */}
                    {certifications.map((cert, i) => {
                      const CardComponent = cert.credlyUrl ? "a" : "div";
                      return (
                        <CardComponent
                          key={`cert-a-${i}`}
                          href={cert.credlyUrl || undefined}
                          target={cert.credlyUrl ? "_blank" : undefined}
                          rel={cert.credlyUrl ? "noopener noreferrer" : undefined}
                          className="cert-card flex-shrink-0 flex flex-col items-center p-6 rounded-2xl text-center"
                          style={{
                            width: 240,
                            minWidth: 240,
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid var(--card-border)",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                            marginRight: 20,
                            cursor: cert.credlyUrl ? "pointer" : "default",
                          }}
                        >
                          {/* Badge */}
                          <div
                            className="w-28 h-28 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0 overflow-hidden"
                            style={{
                              background: cert.badge ? "transparent" : "rgba(255,127,80,0.08)",
                              border: cert.badge ? "none" : "2px dashed rgba(255,127,80,0.3)",
                            }}
                          >
                            {cert.badge ? (
                              <Image
                                src={cert.badge}
                                alt={`${cert.name} badge`}
                                width={112}
                                height={112}
                                className="object-contain"
                              />
                            ) : (
                              <FaImage size={24} style={{ color: "var(--accent)", opacity: 0.4 }} />
                            )}
                          </div>
                          <p className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--foreground)" }}>
                            {cert.name}
                          </p>
                          <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                            {cert.issuer}
                          </p>
                          <p className="text-[11px]" style={{ color: "var(--accent)" }}>
                            {cert.date}
                          </p>
                        </CardComponent>
                      );
                    })}
                    {/* Second set (duplicate for infinite loop) */}
                    {certifications.map((cert, i) => {
                      const CardComponent = cert.credlyUrl ? "a" : "div";
                      return (
                        <CardComponent
                          key={`cert-b-${i}`}
                          href={cert.credlyUrl || undefined}
                          target={cert.credlyUrl ? "_blank" : undefined}
                          rel={cert.credlyUrl ? "noopener noreferrer" : undefined}
                          className="cert-card flex-shrink-0 flex flex-col items-center p-6 rounded-2xl text-center"
                          style={{
                            width: 240,
                            minWidth: 240,
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid var(--card-border)",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                            marginRight: 20,
                            cursor: cert.credlyUrl ? "pointer" : "default",
                          }}
                        >
                          {/* Badge */}
                          <div
                            className="w-28 h-28 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0 overflow-hidden"
                            style={{
                              background: cert.badge ? "transparent" : "rgba(255,127,80,0.08)",
                              border: cert.badge ? "none" : "2px dashed rgba(255,127,80,0.3)",
                            }}
                          >
                            {cert.badge ? (
                              <Image
                                src={cert.badge}
                                alt={`${cert.name} badge`}
                                width={112}
                                height={112}
                                className="object-contain"
                              />
                            ) : (
                              <FaImage size={24} style={{ color: "var(--accent)", opacity: 0.4 }} />
                            )}
                          </div>
                          <p className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--foreground)" }}>
                            {cert.name}
                          </p>
                          <p className="text-xs mb-0.5" style={{ color: "var(--muted)" }}>
                            {cert.issuer}
                          </p>
                          <p className="text-[11px]" style={{ color: "var(--accent)" }}>
                            {cert.date}
                          </p>
                        </CardComponent>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>            {/* ── Row 4: Seminars Attended ──────────────────────────────────── */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: accentBgMd }}
                  >
                    <FaChalkboardTeacher size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "var(--foreground)" }}
                  >
                    Seminars & Affiliations
                  </h3>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => navigateSeminar("prev")}
                    disabled={activeSeminarIndex === 0}
                    className="seminar-nav-button w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
                    aria-label="Previous Seminar"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={() => navigateSeminar("next")}
                    disabled={activeSeminarIndex === seminars.length - 1}
                    className="seminar-nav-button w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
                    aria-label="Next Seminar"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>
              </div>

              {/* Interactive Carousel */}
              <div className="relative seminar-slider-container">
                {/* Gradient fade – left */}
                <div
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
                  style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
                />
                {/* Gradient fade – right */}
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
                  style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
                />

                {/* Scrolling track */}
                <div
                  ref={seminarSliderRef}
                  className="seminar-slider-track no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory py-4"
                >
                  {seminars.map((seminar, i) => (
                    <div
                      key={`seminar-wrap-${i}`}
                      className="seminar-card-wrapper snap-center w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333%]"
                    >
                      <button
                        onClick={() => setSelectedSeminar(seminar)}
                        onMouseMove={handleSeminarCardMouseMove}
                        onMouseLeave={handleSeminarCardMouseLeave}
                        className="seminar-card-tilt cursor-pointer relative w-full text-left"
                      >
                        {/* Spotlight Glow Overlay */}
                        <div className="seminar-card-glow" />

                        {/* Certificate thumbnail container */}
                        <div className="seminar-image-container w-full h-48 overflow-hidden relative z-10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={seminar.image}
                            alt={seminar.title}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                            style={{ background: "rgba(255, 127, 80, 0.15)" }}
                          >
                            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "var(--accent)", color: "#fff" }}>
                              Click to expand
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-5 flex flex-col gap-1.5 relative z-10">
                          <p
                            className="text-sm font-semibold leading-snug"
                            style={{ color: "var(--foreground)" }}
                          >
                            {seminar.title}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: "var(--muted)" }}
                          >
                            {seminar.organizer}
                          </p>
                          <p
                            className="text-xs mt-auto font-medium"
                            style={{ color: "var(--accent)" }}
                          >
                            {seminar.date}
                          </p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {seminars.map((_, idx) => (
                    <button
                      key={`seminar-dot-${idx}`}
                      onClick={() => scrollToSeminarIndex(idx)}
                      className={`seminar-dot cursor-pointer ${activeSeminarIndex === idx ? 'active' : ''}`}
                      aria-label={`Go to seminar slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* End of section */}
          </div>
        </div>
      </section>

      {/* ── SEMINAR LIGHTBOX ──────────────────────────────────────────────── */}
      {selectedSeminar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setSelectedSeminar(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedSeminar(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(0,0,0,0.6)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <FaTimes size={14} />
            </button>
            {/* Full image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedSeminar.image}
              alt={selectedSeminar.title}
              className="w-full h-auto"
            />
            {/* Caption */}
            <div className="p-4">
              <p className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                {selectedSeminar.title}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                {selectedSeminar.organizer} · {selectedSeminar.date}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-24 px-6 scroll-mt-16"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <div className="max-w-6xl mx-auto">
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

          {(() => {
            const projectsPerPage = 4;
            const totalPages = Math.ceil(projects.length / projectsPerPage);
            const pageProjects = projects.slice(
              projectPage * projectsPerPage,
              projectPage * projectsPerPage + projectsPerPage
            );
            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pageProjects.map((project, idx) => {
                    const globalIdx = projectPage * projectsPerPage + idx;
                    const status = statusConfig[project.status];
                    const hasLink = project.github && project.github !== "#";
                    const isHovered = hoveredProject === globalIdx;
                    return (
                      <article
                        key={globalIdx}
                        className="rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                          background: "var(--card-bg)",
                          border: "1px solid var(--card-border)",
                          boxShadow: isHovered ? "0 8px 32px rgba(6,182,212,0.15)" : "0 4px 24px rgba(0,0,0,0.3)",
                          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                          borderColor: isHovered ? "var(--accent)" : "var(--card-border)",
                        }}
                        onMouseEnter={() => {
                          setHoveredProject(globalIdx);
                          if (project.screenshots && project.screenshots.length > 0) {
                            startSlideshow(project.screenshots);
                          }
                        }}
                        onMouseLeave={() => {
                          setHoveredProject(null);
                          stopSlideshow();
                        }}
                      >
                        {/* Screenshot area */}
                        <div
                          className="h-68 relative flex items-center justify-center overflow-hidden"
                          style={{
                            background:
                              "linear-gradient(135deg, #0d1625 0%, #0a1c30 100%)",
                            borderBottom: "1px solid var(--card-border)",
                          }}
                        >
                          {project.screenshots && project.screenshots.length > 0 ? (
                            <>
                              {project.screenshots.map((src, sIdx) => (
                                <Image
                                  key={src}
                                  src={src}
                                  alt={`${project.title} screenshot ${sIdx + 1}`}
                                  fill
                                  className="object-cover transition-opacity duration-500"
                                  style={{ opacity: slideshowIdx === sIdx ? 1 : 0, objectPosition: "fit" }}
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              ))}
                            </>
                          ) : (
                            <div className="text-center">
                              <FaImage
                                size={30}
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
                          )}
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
                          {/* GitHub link overlay — visible on hover */}
                          <a
                            href={hasLink ? project.github : undefined}
                            target={hasLink ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            aria-disabled={!hasLink}
                            onClick={(e) => { if (!hasLink) e.preventDefault(); }}
                            className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold"
                            style={{
                              background: "rgba(0,0,0,0.65)",
                              color: "var(--accent)",
                              border: `1px solid ${accentBorder}`,
                              backdropFilter: "blur(4px)",
                              cursor: hasLink ? "pointer" : "default",
                              pointerEvents: isHovered ? "auto" : "none",
                              opacity: isHovered ? 1 : 0,
                              transform: isHovered ? "translateY(0)" : "translateY(6px)",
                              transition: "opacity 0.2s ease, transform 0.2s ease",
                              textDecoration: "none",
                            }}
                          >
                            <FaGithub size={12} />
                            {hasLink ? "View on GitHub" : "GitHub (link pending)"}
                          </a>
                        </div>

                        <div className="p-5 sm:p-6">
                          <h3
                            className="text-base sm:text-lg font-bold mb-2"
                            style={{ color: "var(--foreground)" }}
                          >
                            {project.title}
                          </h3>

                          <p
                            className="text-sm leading-relaxed mb-4"
                            style={{ color: "var(--muted)" }}
                          >
                            {project.description}
                          </p>

                          {/* Duration */}
                          {project.duration && (
                            <div
                              className="flex items-center gap-2 text-xs mb-4"
                              style={{ color: "var(--muted)" }}
                            >
                              <HiCalendar
                                size={13}
                                style={{ color: "var(--accent)" }}
                              />
                              {project.duration}
                            </div>
                          )}

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-2">
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
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Pagination controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-10">
                    <button
                      onClick={() => { setProjectPage((p) => Math.max(0, p - 1)); setHoveredProject(null); }}
                      disabled={projectPage === 0}
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{
                        background: "var(--card-bg)",
                        border: "1px solid var(--card-border)",
                        color: "var(--foreground)",
                      }}
                      aria-label="Previous page"
                    >
                      <FaChevronLeft size={12} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => { setProjectPage(i); setHoveredProject(null); }}
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                        style={{
                          background: projectPage === i ? "var(--accent)" : "var(--card-bg)",
                          border: `1px solid ${projectPage === i ? "var(--accent)" : "var(--card-border)"}`,
                          color: projectPage === i ? "#fff" : "var(--foreground)",
                        }}
                        aria-label={`Page ${i + 1}`}
                        aria-current={projectPage === i ? "page" : undefined}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => { setProjectPage((p) => Math.min(totalPages - 1, p + 1)); setHoveredProject(null); }}
                      disabled={projectPage === totalPages - 1}
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{
                        background: "var(--card-bg)",
                        border: "1px solid var(--card-border)",
                        color: "var(--foreground)",
                      }}
                      aria-label="Next page"
                    >
                      <FaChevronRight size={12} />
                    </button>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────────────────── */}
      <section
        className="w-full relative z-10 py-12"
        onMouseEnter={() => setIsCTAHovered(true)}
        onMouseLeave={() => setIsCTAHovered(false)}
      >
        <div className="relative overflow-hidden w-full border-y border-[var(--card-border)] bg-[var(--card-bg)]/35 backdrop-blur-sm shadow-xl min-h-[600px] flex flex-col items-center justify-center transition-all duration-500 hover:border-y-[#FF7F50]/30 hover:shadow-2xl py-16">
          {/* WebGL Shader Dithering Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-35 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500 w-full h-full">
            {!shaderError && isWebGLSupported ? (
              <ShaderErrorBoundary onError={() => setShaderError(true)}>
                <Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
                  <Dithering
                    colorBack="#00000000" // Transparent
                    colorFront="#FF7F50"  // Accent Coral
                    shape="warp"
                    type="4x4"
                    speed={isCTAHovered ? 0.5 : 0.15}
                    className="size-full"
                    minPixelRatio={1}
                  />
                </Suspense>
              </ShaderErrorBoundary>
            ) : (
              <ShaderFallback color="#FF7F50" speed={isCTAHovered ? 0.5 : 0.15} />
            )}
          </div>

          <div className="relative z-10 px-6 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Pulsing Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF7F50]/20 bg-[rgba(255,127,80,0.05)] px-4 py-1.5 text-xs font-semibold text-[#FF7F50] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7F50] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7F50]"></span>
              </span>
              Open for Collaborations
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-[var(--foreground)] mb-6 leading-tight">
              Ready to elevate <br />
              <span className="text-[var(--muted)]">your next project?</span>
            </h2>

            {/* Description */}
            <p className="text-[var(--muted)] text-sm sm:text-base max-w-xl mb-8 leading-relaxed font-medium">
              Looking for a skilled IT & Cybersecurity Specialist or a Full-Stack Developer?
              Let's discuss how we can build secure, reliable, and premium systems together.
            </p>

            {/* Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#FF7F50] hover:bg-[#ff6a35] px-8 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-[#FF7F50]/20 cursor-pointer shadow-lg shadow-[#FF7F50]/25"
            >
              <span className="relative z-10">Let's Work Together</span>
              <FaArrowRight size={12} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 px-6 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, label, href, display }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="contact-card group relative p-6 rounded-2xl flex flex-col justify-between"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  textDecoration: "none",
                  height: "240px",
                }}
              >
                {/* Visual hover radial glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, rgba(255, 127, 80, 0.08), transparent 60%)`,
                  }}
                />

                <div className="flex flex-col gap-4">
                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{ background: accentBg, color: "var(--accent)" }}
                    >
                      <Icon size={18} />
                    </div>
                    <h4
                      className="text-xs font-bold uppercase tracking-wider transition-colors duration-300 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--foreground)" }}
                    >
                      {label}
                    </h4>
                  </div>

                  {/* Details / Handle */}
                  <p
                    className="text-[13px] font-medium break-all leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {display}
                  </p>
                </div>

                {/* Interactive indicator at bottom */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors duration-300">
                  <span>{href.startsWith("mailto") ? "Send Email" : "Visit Profile"}</span>
                  <FaArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <div className="w-full h-px bg-[var(--card-border)] mt-12" />
      <footer className="footer-container py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted)] text-center sm:text-left">
            &copy; {new Date().getFullYear()} Christian Dela Cruz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider">
              Built with Next.js &amp; Tailwind CSS
            </span>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="back-to-top-btn text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Back to Top</span>
              <FaArrowUp size={10} className="transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

