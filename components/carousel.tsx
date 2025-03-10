"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode[]
  itemsToShow?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
  autoPlay?: boolean
  autoPlaySpeed?: number
  pauseOnHover?: boolean
}

export function Carousel({
  children,
  itemsToShow = 1,
  showDots = false,
  showArrows = false,
  className = "",
  autoPlay = false,
  autoPlaySpeed = 3000,
  pauseOnHover = true
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const totalItems = children.length
  const maxIndex = Math.max(0, totalItems - itemsToShow)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // When we reach the end, loop back to the beginning
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      // When we reach the beginning, loop back to the end
      return prevIndex <= 0 ? maxIndex : prevIndex - 1
    })
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
  }

  useEffect(() => {
    if (autoPlay && (!pauseOnHover || !isHovered)) {
      const interval = setInterval(() => {
        goToNext()
      }, autoPlaySpeed)

      return () => clearInterval(interval)
    }
  }, [currentIndex, autoPlay, pauseOnHover, isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / totalItems}%)`,
            width: `${totalItems * (100 / itemsToShow)}%`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              style={{
                width: `${100 / totalItems}%`,
                flexShrink: 0,
                height: '100%'
              }}
              className="flex items-stretch"
            >
              <div className="w-full h-full flex-1">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${currentIndex === index ? "w-4 bg-primary" : "w-2 bg-primary/30"
                }`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

