import { DarkBackground } from "@/components/dark-background";
import { GradientHeading } from "@/components/gradient-heading";
import { PlatformStats } from "@/components/platform-stats";
import { CountdownTimer } from "@/components/countdown-timer";
import { CTAButton } from "@/components/cta-button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  // Set launch date 10 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 10);
  
  return (
    <DarkBackground className="min-h-screen flex flex-col items-center justify-center py-12">
      <div className="container px-4 flex flex-col items-center text-center">
        {/* Main heading */}
        <GradientHeading className="mb-6">
          Sell & Buy Bib Numbers, Instantly.
        </GradientHeading>
        
        {/* Subheading */}
        <p className="text-xl text-muted-foreground max-w-2xl mb-16">
          The first marketplace dedicated to race bib transfers. Secure, instant,
          and hassle-free.
        </p>
        
        {/* Platform statistics */}
        <PlatformStats />
        
        {/* Countdown timer */}
        <div className="my-12">
          <CountdownTimer targetDate={launchDate} />
        </div>
        
        {/* Call to action button */}
        <CTAButton className="mt-8">
          Join the Waiting List
        </CTAButton>
        
        {/* Scroll indicator */}
        <div className="mt-24 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/50" />
        </div>
      </div>
    </DarkBackground>
  );
} 