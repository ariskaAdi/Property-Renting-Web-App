import { HeroSection } from "@/components/layouts/hero/hero";
import HomePage from "@/components/pages/Home";
import DestinationCard from "@/components/layouts/destination-carousel/DestinationCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="promo">
        <DestinationCard />
      </div>
      <div id="property">
        <HomePage />
      </div>
    </div>
  );
}
