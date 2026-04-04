# Christian Dela Cruz — Web Portfolio

A modern, professional web portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with profile, social links, and CTAs |
| About | `/about` | Education, experience, skills, and certifications |
| Projects | `/projects` | Project showcase cards |
| Contact | `/contact` | Contact information and message form |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: react-icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/christian-dela-cruz/cjadelacruz-web-portfolio.git
cd cjadelacruz-web-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Adding Your Profile Photo

Replace `public/profile-placeholder.svg` with your photo:

1. Add your image to the `public/` folder (e.g., `public/profile.jpg`)
2. Update the `src` prop in `app/page.tsx`:

```tsx
<Image src="/profile.jpg" alt="Christian Dela Cruz" fill className="object-cover" priority />
```

## Deployment

Deploy to [Vercel](https://vercel.com/) in one click:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Click **Deploy**

Your portfolio will be live at `https://your-project.vercel.app`.

