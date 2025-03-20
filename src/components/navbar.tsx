"use server";

import Link from "next/link";
import { cn } from "@/lib/utils";

export async function Navbar() {
  return (
      <header className="py-6 px-4 md:px-8 lg:px-12 fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <span className="ml-2 font-bold text-xl">DossardSwap</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">Comment ça marche</NavLink>
            <NavLink href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">Pourquoi nous</NavLink>
            <NavLink href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Témoignages</NavLink>
          </nav>
          <a href="#waitlist" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-sm hover:shadow-md">Rejoindre</a>
        </div>
      </header>
  );
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children, className }: Readonly<NavLinkProps>) {
  return (
    <Link 
      href={href} 
      className={cn(
        "text-md font-medium text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
} 