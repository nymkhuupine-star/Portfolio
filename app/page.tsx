
import { About } from "./components/about";
import { Contact } from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import { Projects } from "./components/project";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
      <HeroSection />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      </main>
      <Footer />
    </>
  );
}

