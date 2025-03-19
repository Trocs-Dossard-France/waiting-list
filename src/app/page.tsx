import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
    </main>
  );
}
