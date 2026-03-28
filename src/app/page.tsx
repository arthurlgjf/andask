import { AboutSection } from "@/components/about-section";
import { ArchiveSection } from "@/components/archive-section";
import { CommunitySection } from "@/components/community-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="hlavny-obsah">
        <HeroSection />
        <AboutSection />
        <ArchiveSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
