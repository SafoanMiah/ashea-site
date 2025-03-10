"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2 green-shadow" : "bg-transparent py-4"
        }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/primary/logo.png" alt="Ashea Logo" width={40} height={40} className="w-10 h-10" />
          <span className="font-cinzel font-bold text-2xl text-primary green-text-glow">ASHEA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/store" className="text-foreground/80 hover:text-primary transition-colors">
            Store
          </Link>
          <Link href="/nations" className="text-foreground/80 hover:text-primary transition-colors">
            Nation Picker
          </Link>
          <Link href="/wiki" className="text-foreground/80 hover:text-primary transition-colors">
            Wiki
          </Link>
          <Link href="/join">
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground green-glow">Join Ashea</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md green-shadow">
          <nav className="container flex flex-col py-4 gap-4">
            <Link
              href="/about"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/store"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/nations"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nation Picker
            </Link>
            <Link
              href="/wiki"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wiki
            </Link>
            <Link href="/join" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground green-glow">
                Join Ashea
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar

