
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

import Header from "./components/header";
import HeroSection from "./components/hero-section";
import { Projects } from "./components/project";
import { Skills } from "./components/skills";
import { cookies } from "next/headers";
import { resolveLocale } from "./i18n";

export default async function Home() {
  const locale = resolveLocale((await cookies()).get("lang")?.value);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
      <HeroSection locale={locale} />
      <About locale={locale} />
      <Projects locale={locale} />
      <Skills locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
      </main>
    </>
  );
}

