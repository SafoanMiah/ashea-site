import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  accentBorder?: boolean
}

export function GlassCard({ 
  children, 
  className, 
  hoverEffect = false,
  accentBorder = false
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-background/40 p-6 backdrop-blur-md shadow-sm",
        accentBorder ? "border-primary/30" : "border-border/50",
        hoverEffect &&
          "transition-all duration-300 hover:border-primary/40 hover:bg-background/60 hover:shadow-md hover:shadow-primary/5 transform hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  )
}

