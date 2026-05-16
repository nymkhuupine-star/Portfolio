import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/loading-screen";

const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = stored === 'dark' || stored === 'light' ? stored : system;
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pine Nymkhuu — Full Stack Developer Portfolio",
  description:
    "Portfolio of Pine Nymkhuu — building modern, responsive web apps with Next.js, Tailwind, and animations.",
  openGraph: {
    title: "Pine Nymkhuu — Full Stack Developer Portfolio",
    description:
      "Modern portfolio showcasing full stack projects, UI/UX design, and web development skills.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning // 1. Энд хэвээр үлдэнэ
    >
      {/* 2. ШИНЭЧЛЭГДСЭН: Броузерын өргөтгөлүүдийн алдааг дарахын тулд body дээр нэмэв */}
      <body className="min-h-full text-foreground font-sans" suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <LoadingScreen />
        <div className="site-background flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
