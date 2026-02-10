import { HeroSection } from "../components/HeroSection";
import { PriceTable } from "../components/PriceTable";
import { InfoSections } from "../components/InfoSections";
import { MarketplaceSection } from "../components/MarketplaceSection";
import { NewsletterSection } from "../components/NewsletterSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PriceTable />
      <InfoSections />
      <MarketplaceSection />
      <NewsletterSection />
    </>
  );
}
