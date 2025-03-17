import Link from "next/link"
import Image from "next/image"
import { Scroll, Map, ShoppingBag, BookOpen, Flag, Newspaper, Users } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background/95 border-t border-primary/20 pt-12 pb-6 green-bg-subtle">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/primary/logo.png" alt="Ashea Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-cinzel font-bold text-xl text-primary green-text-glow">ASHEA</span>
            </div>
          </div>

          <div>
            <h3 className="font-cinzel font-bold text-lg mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <Scroll size={16} className="text-primary" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Map size={16} className="text-primary" />
                  <span>Map</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <ShoppingBag size={16} className="text-primary" />
                  <span>Store</span>
                </Link>
              </li>
              <li>
                <Link href="/wiki" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" />
                  <span>Server Wiki</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-cinzel font-bold text-lg mb-4 text-primary">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/Regions"
                  className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <Flag size={16} className="text-primary" />
                  <span>region Picker</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Newspaper size={16} className="text-primary" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  <span>Join Ashea</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-cinzel font-bold text-lg mb-4 text-primary">Server Info</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Version:</span> 1.20.1+
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">IP:</span> ashea.org
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Discord:</span> discord.gg/ashea
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Age Requirement:</span> 13+
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Created by Saf for Ashea. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

