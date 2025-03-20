"use server"

import {CountdownTimer} from "@/components/countdown-timer";
import {ArrowDown} from "lucide-react";
import Image from "next/image";
import {env} from "@/env";

export async function HeroSection() {
    // Set launch date to March 30, 2025
    const launchDate = new Date(env.NEXT_PUBLIC_RELEASE_DATE);

    const weekday = launchDate.toLocaleString('fr-FR', { weekday: 'long' });
    const year = launchDate.getFullYear();
    const month = launchDate.toLocaleString('fr-FR', { month: 'long' });
    const day = launchDate.getDate();

    const launchDateStr = `${weekday} ${day} ${month} ${year}`

    return (
        <section className="pt-32 md:pt-48 pb-20 px-4 md:px-8 lg:px-12" id="hero">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center">
                        Achetez & Vendez vos dossards en quelques clics.
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 text-center">
                        La première marketplace sécurisée pour dossards sportifs.
                    </p>
                    <div className="my-6">
                        <CountdownTimer targetDate={launchDate} />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#waitlist"
                            className="cta-button bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 hover:shadow-lg flex-shrink-0 w-full sm:w-auto text-center"
                        >
                            {"Rejoindre la liste d'attente"}
                        </a>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                            <p className="text-gray-600">Lancement le <span className="font-medium">{launchDateStr}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 pl-0 md:pl-12 flex justify-center md:justify-end">
                    <div className="relative w-full h-[40rem] ">
                        <Image
                            src="/images/hero-bg.png"
                            alt="Coureurs avec dossards"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* Scroll indicator */}
            <div className="flex justify-center mt-16 animate-bounce">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </div>
        </section>
    );
} 