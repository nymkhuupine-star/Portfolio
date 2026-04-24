import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

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
  title: "Pine Nymkhuu — Frontend Developer Portfolio",
  description:
    "Portfolio of Pine Nymkhuu — building modern, responsive web apps with Next.js, Tailwind, and animations.",
  openGraph: {
    title: "Pine Nymkhuu — Frontend Developer Portfolio",
    description:
      "Modern portfolio showcasing projects, UI/UX design, and frontend development skills.",
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
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
