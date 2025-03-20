"use server"

import { HeroSection } from "@/components/hero-section";
import { ProcessSteps } from "@/components/process-steps";
import { ComparisonSection } from "@/components/comparison-section";
import { SignupSection } from "@/components/signup-section";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessSteps />
      <ComparisonSection />
      <SignupSection />
    </>
  );
}
