import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Research } from "@/components/Research/Research";

export default function Home() {
  return (
    <div className="isolate flex flex-col gap-16 pb-16">
      <HeroSection />
      <SocialMedia />
      <Research />
    </div>
  );
}
