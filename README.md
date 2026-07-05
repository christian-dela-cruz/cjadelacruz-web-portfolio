# 🌌 Christian Dela Cruz — Web Portfolio & CMS

A premium, modern web portfolio and Content Management System (CMS) custom-designed for IT and Cybersecurity Specialists. Powered by **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Supabase**.

Featuring an immersive WebGL-powered 3D background shader and a fully-integrated secure administrator dashboard, this platform goes beyond a simple portfolio website to serve as a complete, live-updating personal brand hub.

---

## ✨ Features

- **🎮 Immersive Visuals**: High-performance interactive 3D WebGL `Dithering` shader background (built with `@paper-design/shaders-react` and `Three.js`), featuring smooth, canvas-based SVG fallback logic for unsupported environments.
- **🎛️ Live Admin Dashboard (`/admin`)**: A comprehensive, secure content management console to add, edit, or delete portfolio entries in real time without touching code.
- **⚡ Dynamic Database Integration**: Fully integrated with **Supabase** for client-side state fetching with optimized Next.js force-dynamic loading to serve the freshest data.
- **🔒 Secure Row-Level Security (RLS)**: Public access is strictly read-only, while update, creation, and deletion operations require authenticated admin credentials via Supabase Auth.
- **🎨 Glassmorphic Dark/Light Design**: Curated color palettes with HSL variables, smooth transitions, custom-designed status badges, and browser-synced local storage theme preference memory.
- **📱 Responsive Layout & Navigation**: Dynamic scroll-spy navbar utilizing HTML5 Intersection Observers, coupled with mobile-first sliding layouts.

---

## 🛠️ Tech Stack

- **Frontend Core**: [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database & Auth**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- **Styling & Theme**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS variables
- **Interactive 3D / Shaders**: [Three.js](https://threejs.org/) & `@paper-design/shaders-react`
- **Icons Pack**: `react-icons` (FontAwesome, SimpleIcons, HeroIcons, SiliconIcons)

---

## 📂 Codebase Structure

```
├── app/
│   ├── admin/
│   │   └── page.tsx          # Comprehensive Admin CMS Panel (120KB+ of content-management utility)
│   ├── globals.css           # Tailwind v4 import & curated CSS design tokens
│   ├── layout.tsx            # Global HTML/Body wrapper with theme sync script
│   └── page.tsx              # Server-side page fetching Supabase data
├── components/
│   ├── Navbar.tsx            # Theme-toggling, scroll-spy sticky desktop/mobile header
│   ├── PortfolioClient.tsx   # Premium Client portfolio page showing all data and WebGL shaders
│   └── ShaderFallback.tsx    # Responsive canvas-based fallback when WebGL isn't supported
├── lib/
│   ├── supabase.ts           # Supabase client instantiation with fallback helpers
│   └── webgl.ts              # WebGL support checking & custom React hook
├── public/                   # Static assets (images, logos, certifications, resume)
├── supabase_schema.sql       # Full database migration query (Tables, RLS Policies, Seed Mock Data)
└── package.json              # Project dependencies & build/run configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** 18 or higher
- **npm** or **yarn** / **pnpm**
- A **Supabase** account (Free tier is perfectly fine)

### 2. Setup the Database in Supabase

1. Go to the [Supabase Dashboard](https://supabase.com/) and create a new project.
2. Navigate to the **SQL Editor** in the left sidebar.
3. Open the local file [supabase_schema.sql](file:///c:/Users/Christian/Desktop/web-portfolio/supabase_schema.sql) in your workspace, copy its contents, paste them into the SQL Editor, and click **Run**.
4. This script automatically:
   - Creates all tables (`profile`, `skills`, `projects`, `certifications`, `seminars`, `experience`, `education`).
   - Enables Row Level Security (RLS) on all tables.
   - Establishes read-only policies for public clients.
   - Restricts write permissions to authenticated users.
   - Seeds your database with beautiful initial profile, project, and certification mock data.

### 3. Environment Variables Configuration

In the root of your project directory, create a `.env.local` file by duplicating the `.env.example` file:

```bash
cp .env.example .env.local
```

Populate it with your project URL and public anon key from the Supabase Dashboard (**Settings -> API**):

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project-id.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-public-key"
```

### 4. Create an Admin Account

To access and manage the Admin Dashboard at `/admin`, create your login credentials:
1. In the Supabase Dashboard, navigate to **Authentication -> Users**.
2. Click **Add User** -> **Create User**.
3. Enter your email and a strong password, then click **Save**. *(You can disable "Confirm email" in authentication settings if you want immediate access without validating).*

### 5. Installation & Local Development

Install the project dependencies and launch the hot-reloading development server:

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000) to see the live portfolio in action, or [http://localhost:3000/admin](http://localhost:3000/admin) to log into the management console.

---

## 🛠️ Configuration & Customization

### Adding / Replacing Assets

- **Profile Image**: The default path is set to `/Formal_Picture.jpg`. You can place your image in the `public/` folder and name it `Formal_Picture.jpg` or modify the profile settings inside the `/admin` panel to point to any custom URL.
- **Resume File**: Place your resume PDF in the `public/` directory as `resume.pdf` to allow visitors to download it directly using the primary landing page CTA.
- **Logo Icon**: Replace `public/favicon.png` or `public/favicon.ico` to customize the browser tab icon and the navigation header logo.

### Database Production Builds

During development or production compilation (`npm run build`), Next.js will dynamically compile pages. If the Supabase environment variables are missing during CI/CD build environments, the helper in `lib/supabase.ts` handles this by applying temporary placeholder variables to ensure the build compiles successfully without breaking.

---

## ⚡ Production Deployment

Deploy the system seamlessly to **Vercel**:

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **New Project**.
3. Select and import your GitHub repository.
4. Add the two environment variables under **Environment Variables** in the Vercel project configuration:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**. Your app will build, optimize, and go live!
