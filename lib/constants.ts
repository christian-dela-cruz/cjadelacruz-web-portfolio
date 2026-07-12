export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  duration?: string | null;
  github: string;
  status: "completed" | "in-progress" | "planned";
  screenshots?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  credlyUrl: string | null;
}

export interface Seminar {
  title: string;
  organizer: string;
  date: string;
  image: string;
}

export interface Experience {
  id?: string;
  title: string;
  company: string;
  duration: string;
  hours: string | null;
  bullets: string[];
  tech: string[];
}

export interface Education {
  id?: string;
  degree: string;
  specialization: string | null;
  school: string;
  duration: string;
  description: string;
  honors: string | null;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  profile_image_url: string;
  resume_url: string;
  cv_url: string;
  logo_image_url: string;
}

export const initialProfile: Profile = {
  name: "Christian Dela Cruz",
  title: "Information Technology & Cybersecurity Specialist",
  description: "Full-stack developer with expertise in system development, networking, and cloud infrastructure. Passionate about building secure, scalable, and user-centric solutions.",
  profile_image_url: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Hero%20Assets/683780893_1640906230542278_3183331104777219875_n.jpg",
  resume_url: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/PDF's/ChristianDelaCruz_Resume.pdf",
  cv_url: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/PDF's/ChristianDelaCruz_CV.pdf",
  logo_image_url: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Logo/Gemini_Generated_Image_3rzmmw3rzmmw3rzm%20-%20Edited.png"
};

export const initialSkills: Record<string, string[]> = {
  Programming: [
    "Python",
    "C#",
    "Kotlin",
    "HTML",
    "TypeScript",
    "ASP.NET MVC"
  ],
  Networking: [
    "Routing & Switching",
    "Network Infrastructure",
    "IEEE 802.15.4"
  ],
  "Systems & Cloud": [
    "Systems Administration",
    "Oracle VirtualBox",
    "Google Cloud Platform",
    "Windows Server",
    "Red Hat Enterprise Linux"
  ],
  Security: [
    "Kali Linux",
    "Security Fundamentals",
    "Ethical Hacking"
  ],
  Databases: [
    "MySQL",
    "Oracle"
  ],
  "Tools & Platforms": [
    "Cisco Packet Tracer",
    "Visual Studio Code",
    "Visual Studio",
    "Arduino IDE",
    "Figma",
    "GitHub",
    "Canva",
    "Next.js",
    "XAMPP"
  ]
};

export const initialProjects: Project[] = [
  {
    title: "Seat and Table Reservation Management System",
    description: "- Bellevue",
    bullets: [],
    tech: [
      "React",
      "Laravel"
    ],
    duration: "May 2026 - July 2026",
    github: "https://github.com/christian-dela-cruz/bellevue-seat-table-management",
    status: "in-progress",
    screenshots: []
  },
  {
    title: "EliteFitness Mobile Application",
    description: "A native Android fitness application built with Xamarin.Android (C#) helping users manage and track their fitness journey with real-time data sync.",
    bullets: [
      "Native Android application using Xamarin.Android (C#)",
      "Firebase integration for real-time data storage and sync",
      "User profiles, workout logs, and progress metrics tracking"
    ],
    tech: [
      "Xamarin.Android",
      "C#",
      "Firebase",
      "Android"
    ],
    duration: null,
    github: "#",
    status: "completed",
    screenshots: []
  },
  {
    title: "MaluPET",
    description: "Your Pet's Best Friend — A native Android app for managing your pets and scheduling their care appointments. Helps pet owners keep track of pets and manage feeding, grooming, and veterinary visits.",
    bullets: [
      "Register & Login — Create an account and securely sign in",
      "Manage Pets — Add and view pet profiles (name, type, breed, age)",
      "Schedule Appointments — Track feeding times, grooming dates, and veterinary visits"
    ],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Ktor Client",
      "Gradle"
    ],
    duration: null,
    github: "https://github.com/christian-dela-cruz/MaluPET",
    status: "completed",
    screenshots: [
      "/projects/malupet1.png"
    ]
  },
  {
    title: "Darwin's Game",
    description: "A C# Windows Forms sidescroller game inspired by the theory of evolution. Guide your character through five stages of life — from a primordial creature all the way to modern humanity — dodging obstacles and surviving each era.",
    bullets: [
      "Side-scrolling game with five evolutionary stages",
      "Built with C# Windows Forms",
      "Dodge obstacles and survive each era of evolution"
    ],
    tech: [
      "C#",
      "Windows Forms",
      ".NET"
    ],
    duration: null,
    github: "https://github.com/christian-dela-cruz/Darwins-Game",
    status: "completed",
    screenshots: [
      "/projects/darwin1.jpeg",
      "/projects/darwin2.jpeg"
    ]
  },
  {
    title: "HOPFOG: Multi-Hop Messaging and Communication Application (Mobile)",
    description: "A community-based communication solution designed for low-connectivity or disaster-prone environments. Leverages fog computing concepts and a multi-hop mesh architecture.",
    bullets: [
      "Multi-hop communication system utilizing IEEE 802.15.4 standard",
      "Implemented fog computing concepts for localized data processing",
      "Community-based solution for low-connectivity or disaster-prone environments"
    ],
    tech: [
      "IEEE 802.15.4",
      "Fog Computing",
      "Mobile",
      "Networking",
      "Kotlin",
      "Android"
    ],
    duration: "September 2025 – April 2026",
    github: "https://github.com/christian-dela-cruz/HopFogMobile.git",
    status: "completed",
    screenshots: [
      "/projects/hopfog1.png",
      "/projects/hopfog2.png"
    ]
  },
  {
    title: "TollGate Web AppLication",
    description: "An IoT-based automated toll gate system with a web dashboard for real-time monitoring and manual control.",
    bullets: [
      "IoT-based automated toll gate hardware integration",
      "Web dashboard for real-time monitoring",
      "Manual override and control capabilities"
    ],
    tech: [
      "C++",
      "IoT",
      "Web Dashboard"
    ],
    duration: null,
    github: "https://github.com/christian-dela-cruz/TollGate-Web-App",
    status: "completed",
    screenshots: []
  },
  {
    title: "TriHex Cipher",
    description: "A custom symmetric encryption algorithm implemented in Python that combines substitution, transposition, and bit-level transformations for enhanced confusion and diffusion.",
    bullets: [
      "Custom symmetric encryption combining substitution and transposition",
      "Bit-level transformations for enhanced confusion and diffusion",
      "Implemented entirely in Python"
    ],
    tech: [
      "Python",
      "Cryptography",
      "Algorithms"
    ],
    duration: null,
    github: "https://github.com/christian-dela-cruz/TriHex-Cipher",
    status: "completed",
    screenshots: [
      "/projects/trihex1.jpeg",
      "/projects/trihex2.jpeg"
    ]
  },
  {
    title: "Crossroads Coffee House",
    description: "A comprehensive UI/UX design project for Crossroads Coffee House, developed as part of a fully documented system development process following the Software Development Life Cycle (SDLC).",
    bullets: [
      "Full UI/UX design following SDLC methodology",
      "Comprehensive documentation at each phase of development",
      "Wireframes, mockups, and prototypes created in Figma"
    ],
    tech: [
      "UI/UX",
      "Figma",
      "SDLC"
    ],
    duration: null,
    github: "https://github.com/christian-dela-cruz/Crossroads-Coffee-House",
    status: "completed",
    screenshots: [
      "/projects/crossroad1.png",
      "/projects/crossroad2.png"
    ]
  }
];

export const initialCertifications: Certification[] = [
  {
    name: "Apply AI: Update Your Resume",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    badge: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Certification%20Badges/Apply%20AI%20Badge.png",
    credlyUrl: "https://www.credly.com/badges/f8961314-bd5e-4dc7-a283-c6be9c1622a5"
  },
  {
    name: "CompTIA Tech+",
    issuer: "CompTIA",
    date: "December 2025",
    badge: "/comptia.png",
    credlyUrl: "https://www.credly.com/badges/1577cccf-5f34-46bd-8d09-b7e837a28d03/public_url"
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    badge: "/ccna.png",
    credlyUrl: "https://www.credly.com/badges/b78ed2f8-74f1-4fbc-8cb2-a7f622e80ea6/public_url"
  },
  {
    name: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    badge: "/ethicalhacker.png",
    credlyUrl: "https://www.credly.com/badges/7781dbd5-da20-4852-ab68-84dda25f6895/public_url"
  },
  {
    name: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "March 2025",
    badge: "/cgc.png",
    credlyUrl: "https://www.credly.com/badges/cffe1fbf-7b99-4b79-a873-03031e7fd62d/public_url"
  },
  {
    name: "TOEIC",
    issuer: "ETS",
    date: "L&R: 940/990 | S: 160 | W: 190",
    badge: "/toeic.jpeg",
    credlyUrl: null
  }
];

export const initialSeminars: Seminar[] = [
  {
    title: "Beyond the Code: Next-Gen Skills for the Cloud-Native Era",
    organizer: "Mapúa Malayan Colleges Laguna",
    date: "June 27, 2026",
    image: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Seminars/BTC-CoA_DelaCruz,ChristianJosephA._page-0001.jpg"
  },
  {
    title: "Beyond the Breach: Leadership and Cybersecurity in the Age of Digital ",
    organizer: "Mapúa Malayan Colleges Laguna",
    date: "June 20, 2026",
    image: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Seminars/BTB-CoA_Dela%20Cruz,ChristianJosephA._page-0001.jpg"
  },
  {
    title: "AI at Work",
    organizer: "Diretcho Trabaho Program",
    date: "June 13, 2026",
    image: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Seminars/Certificate_DT%20AI%20at%20Work%20-%20CHRISTIAN%20JOSEPH%20A%20DELA%20CRUZ_page-0001.jpg"
  },
  {
    title: "Learning Advocate 2026 Series: Creative Future of A.I.",
    organizer: "UpskillTechPH Training Services",
    date: "June 06, 2026",
    image: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Seminars/UpskillTechPH_Verified_Record_page-0001.jpg"
  },
  {
    title: "From Mac to Linux: Understanding Powerful Operating Systems",
    organizer: "Computer Programming Services",
    date: "June 01, 2026",
    image: "https://fxjenzzffykyccctnmkk.supabase.co/storage/v1/object/public/portfolio-assets/Seminars/PARTICIPATION%20(39).png"
  },
  {
    title: "Pathways to Employability: Career Readiness Toolkit",
    organizer: "Mapúa Malayan Colleges Laguna & Arizona State University",
    date: "April 21, 2026",
    image: "https://github.com/user-attachments/assets/bead45aa-3aa9-4650-abf2-145886afe857"
  },
  {
    title: "Architecting the Future with Decentralization: An Introduction to Blockchain",
    organizer: "JPCS Mapúa MCL",
    date: "February 5, 2025",
    image: "https://github.com/user-attachments/assets/7e92d12b-92f8-45a5-87da-86df7e956a60"
  },
  {
    title: "Technopreneurship: A Journey in Building Your Own Tech Start Up",
    organizer: "CCIS – Mapúa MCL & Prosperna",
    date: "March 7, 2024",
    image: "https://github.com/user-attachments/assets/a435f8ad-382a-4fe0-88de-e5cd85acdff9"
  }
];

export const initialExperience: Experience[] = [
  {
    id: "1b8b922c-3419-47e5-86f0-31a24a622b8b",
    title: "Full Stack Developer Intern",
    company: "The Bellevue Manila",
    duration: "April 2026 – July 2026",
    hours: "486 Hours",
    bullets: [
      "Developed an end-to-end venue reservation system using React 19 and Laravel 12 (SQLite), enabling guests to book specific seats and tables in real-time.",
      "Built a custom layout designer using @dnd-kit and GSAP/Framer Motion, allowing administrators to create and modify floor plans via an interactive, drag-and-drop canvas.",
      "Engineered a real-time sync system using a custom Node.js WebSocket server and Laravel event broadcasting.",
      "Configured secure API authentication via Laravel Sanctum and automated backend workflows, including scheduled SQLite backups and email reminder queues."
    ],
    tech: [
      "Next.js",
      "React",
      "Laravel",
      "MailPit"
    ]
  },
  {
    id: "7c82ec3b-2816-4f32-9977-887df3c84d2e",
    title: "Freelance Mobile App Developer",
    company: "EliteFitness",
    duration: "Mar 2025 – Jun 2025",
    hours: null,
    bullets: [
      "Developed a native Android fitness application using Xamarin.Android (C#) to help users manage and track their fitness journey.",
      "Integrated Firebase for real-time data storage and synchronization of user profiles, workout logs, and progress metrics.",
      "Designed and implemented a user-friendly interface for managing fitness schedules, tracking progress, and setting personal goals."
    ],
    tech: [
      "Xamarin.Android",
      "C#",
      "Firebase",
      "Android"
    ]
  }
];

export const initialEducation: Education[] = [
  {
    id: "328c5832-c92a-467d-aa55-711fb2110354",
    degree: "Bachelor of Science in Information Technology",
    specialization: "Cybersecurity Specialization",
    school: "Mapúa Malayan Colleges Laguna",
    duration: "2022 – Present",
    description: "Currently enrolled. Gained strong fundamentals in cybersecurity, networking, software engineering, cloud infrastructure, and full-stack development. Active in hands-on projects including multi-hop mesh networking systems, mobile app development, and ethical hacking implementations.",
    honors: "🏅 Dean's Lister: T1 & T3 (AY 2022–2023), T1 (AY 2024–2025)"
  }
];
