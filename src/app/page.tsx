import { AboutSection } from "@/components/about-section";
import { ArchiveSection } from "@/components/archive-section";
import { CommunitySection } from "@/components/community-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="hlavny-obsah">
        <HeroSection />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal delay={0.06}>
          <ArchiveSection />
        </Reveal>
        <Reveal delay={0.04}>
          <CommunitySection />
        </Reveal>
        <Reveal delay={0.06}>
          <ContactSection />
        </Reveal>
      </main>
      <Reveal delay={0.08}>
        <SiteFooter />
      </Reveal>
    </>
  );
}
