import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { StackSection } from "@/components/sections/stack-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <Work />
        <About />
        <StackSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
