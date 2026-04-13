import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Christian Dela Cruz | IT",
  description:
    "Full-stack developer with expertise in mobile app development, networking, and cloud infrastructure.",
  icons: {
    icon: "/favicon.png?v=" + new Date().getTime(), // Cache buster
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}


