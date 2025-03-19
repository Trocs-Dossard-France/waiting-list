import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xs border-b border-white/10">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">RunSwap</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-white/80" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" className="text-white hover:text-white/80" asChild>
            <Link href="/features">How It Works</Link>
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 