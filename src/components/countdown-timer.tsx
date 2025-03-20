"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface TimeUnitProps {
  value: number;
  label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <Card className="flex flex-col items-center justify-center overflow-hidden w-20 h-20 md:w-24 md:h-24 shadow">
      <CardContent className="flex flex-col items-center justify-center p-0 h-full">
        <motion.span
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl md:text-3xl font-bold text-foreground"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
        <span className="text-xs text-muted-foreground mt-1">{label}</span>
      </CardContent>
    </Card>
  );
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg mb-4 text-muted-foreground">Lancement dans:</p>
      <div className="flex gap-2 md:gap-4">
        <TimeUnit value={timeLeft.days} label="Jours" />
        <TimeUnit value={timeLeft.hours} label="Heures" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Secondes" />
      </div>
    </div>
  )
}

