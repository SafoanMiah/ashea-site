import type React from "react"
import { WikiSidebar } from "@/components/wiki-sidebar"

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen pt-16">
      <WikiSidebar className="fixed left-0 top-16 h-[calc(100vh-4rem)] hidden md:block" />
      <div className="flex-1 md:ml-64">
        <div className="container py-8 px-4 md:px-8">{children}</div>
      </div>
    </div>
  )
}

