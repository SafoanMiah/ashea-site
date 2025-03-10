import type React from "react"

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen pt-16">
      <div className="flex-1">
        <div className="container py-8 px-4 md:px-8">{children}</div>
      </div>
    </div>
  )
}

