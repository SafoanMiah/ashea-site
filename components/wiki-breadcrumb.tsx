import Link from "next/link"
import { ChevronRight, Home } from 'lucide-react'

interface WikiBreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
}

export function WikiBreadcrumb({ items }: WikiBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6 bg-background/40 backdrop-blur-sm p-2 rounded-md border border-border/30">
      <Link
        href="/wiki"
        className="flex items-center gap-1 hover:text-primary transition-colors"
      >
        <Home size={14} className="text-primary" />
        <span>Wiki Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight size={14} className="text-primary/70" />
          <Link
            href={item.href}
            className={`hover:text-primary transition-colors ${
              index === items.length - 1 ? "font-medium text-foreground" : ""
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

