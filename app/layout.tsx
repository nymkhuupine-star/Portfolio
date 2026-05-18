import type { Metadata } from "next";
import type { Viewport } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";
import LoadingScreen from "./components/loading-screen";
import { resolveLocale } from "./i18n";

const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = stored === 'dark' || stored === 'light' ? stored : system;
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();`;

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get("lang")?.value);

  return (
    <html
      lang={locale}
      className="h-full antialiased"
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
