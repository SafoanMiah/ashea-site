"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChevronDown,
  ChevronRight,
  Flag,
  Swords,
  MapPin,
  Users,
  User,
  FileQuestion,
  BookOpen,
  Sword,
  Scroll,
  FileEdit,
  HelpCircle,
  Search,
  Menu,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import wikiData from "@/lib/wiki-data.json"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface WikiSidebarProps {
  className?: string
}

export function WikiSidebar({ className }: WikiSidebarProps) {
  const pathname = usePathname()
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchFocused, setSearchFocused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Auto-expand the category of the current page
  useEffect(() => {
    if (pathname) {
      const pathParts = pathname.split("/")
      if (pathParts.length > 2) {
        const currentCategory = pathParts[2]

        // Find which main category contains this subcategory
        wikiData.categories.forEach((category) => {
          const hasSubcategory = category.subcategories.some((sub) => sub.slug === currentCategory)

          if (hasSubcategory && !openCategories.includes(category.title)) {
            setOpenCategories((prev) => [...prev, category.title])
          }
        })
      }
    }
  }, [pathname])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => (prev.includes(title) ? prev.filter((cat) => cat !== title) : [...prev, title]))
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flag":
        return <Flag size={16} className="text-primary" />
      case "Swords":
        return <Swords size={16} className="text-primary" />
      case "MapPin":
        return <MapPin size={16} className="text-primary" />
      case "Users":
        return <Users size={16} className="text-primary" />
      case "User":
        return <User size={16} className="text-primary" />
      case "FileQuestion":
        return <FileQuestion size={16} className="text-primary" />
      case "BookOpen":
        return <BookOpen size={16} className="text-primary" />
      case "Sword":
        return <Sword size={16} className="text-primary" />
      case "Scroll":
        return <Scroll size={16} className="text-primary" />
      case "FileEdit":
        return <FileEdit size={16} className="text-primary" />
      case "HelpCircle":
        return <HelpCircle size={16} className="text-primary" />
      default:
        return <ChevronRight size={16} className="text-primary" />
    }
  }

  const isActive = (slug: string) => {
    return pathname?.includes(`/wiki/${slug}`)
  }

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b border-primary/20">
        <div className={`relative transition-all duration-300 ${searchFocused ? "scale-105" : ""}`}>
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
          <Input
            type="search"
            placeholder="Search wiki..."
            className="pl-8 bg-background/30 border-primary/30 focus:border-primary/60 focus:ring-primary/30"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <div className="p-4">
          {wikiData.categories.map((category) => (
            <div key={category.title} className="mb-4 slide-in">
              <Button
                variant="ghost"
                className="w-full justify-between font-medium hover:bg-primary/20 hover:text-primary"
                onClick={() => toggleCategory(category.title)}
              >
                {category.title}
                {openCategories.includes(category.title) ? (
                  <ChevronDown size={16} className="text-primary" />
                ) : (
                  <ChevronRight size={16} className="text-primary" />
                )}
              </Button>
              {openCategories.includes(category.title) && (
                <div className="ml-4 mt-1 space-y-1 fade-in">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.slug}
                      href={`/wiki/${subcategory.slug}`}
                      className={`wiki-sidebar-item ${isActive(subcategory.slug) ? "active" : ""}`}
                    >
                      {getIcon(subcategory.icon)}
                      <span>{subcategory.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-primary/20">
        <Link href="/wiki/contribute">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/20 text-primary"
          >
            Contribute to Wiki
          </Button>
        </Link>
      </div>
    </>
  )

  if (isMobile) {
    return (
      <div className="fixed top-16 left-4 z-40 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm border-primary/20">
              <Menu className="h-5 w-5 text-primary" />
              <span className="sr-only">Open wiki navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0 bg-background/95 backdrop-blur-md">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    )
  }

  return (
    <div className={cn("w-64 border-r border-primary/20 glass-panel bg-background/40", className)}>
      <SidebarContent />
    </div>
  )
}

