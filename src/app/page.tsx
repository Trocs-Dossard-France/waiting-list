import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProcessSteps } from "@/components/process-steps";
import { ComparisonSection } from "@/components/comparison-section";
import { SignupSection } from "@/components/signup-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessSteps />
      <ComparisonSection />
      <SignupSection />
    </>
  );
}
