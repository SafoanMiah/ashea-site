import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ASHEA - Fantasy Roleplay & Geopolitics Minecraft Server",
  description:
    "Join Ashea, a fantasy roleplay and geopolitics Minecraft server with custom races, nations, quests, and a rich 3+ year history.",
    generator: 'v0.dev'
}

// Add the custom-scrollbar class to the html or body element
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'