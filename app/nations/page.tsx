"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, MapPin, Users, Search, Filter } from "lucide-react"

// Import data from the data.json file
import data from "@/lib/data.json"

export default function NationsPage() {
  // Add client-side only rendering
  const [isClient, setIsClient] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRace, setSelectedRace] = useState("all")
  const [races, setRaces] = useState<string[]>([])

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true)
    // Get unique races for filter
    setRaces([...new Set(data.nations.map((nation) => nation.race))])
  }, [])

  // Filter nations
  const filteredNations = data.nations
    .filter((nation) => {
      const matchesSearch =
        nation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nation.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRace = selectedRace === "all" || nation.race === selectedRace

      return matchesSearch && matchesRace
    })

  // Only render content on the client to avoid hydration mismatch
  if (!isClient) {
    return <div className="page-transition pt-20">Loading...</div>
  }

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section
        className="bg-muted py-12 md:py-20 relative"
        style={{
          backgroundImage: "url('/primary/nations.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-500 green-text-glow">Nation Picker</h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore the diverse nations of Ashea and find your perfect home in our fantasy world.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search nations..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select value={selectedRace} onValueChange={setSelectedRace}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Filter size={18} />
                  <SelectValue placeholder="Filter by race" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Races</SelectItem>
                {races.map((race) => (
                  <SelectItem key={race} value={race}>
                    {race}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>


          </div>
        </div>
      </section>

      {/* Nations Grid */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          {filteredNations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNations.map((nation) => (
                <Card
                  key={nation.id}
                  className="nation-card bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden"
                >
                  <div className="h-40 relative">
                    <Image
                      src={nation.imageSrc || "/primary/background-img.png"}
                      alt={nation.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Users size={14} className="text-primary" />
                      <span className="text-xs text-white">{nation.population}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-cinzel font-bold text-xl mb-2">{nation.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{nation.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-background/50">
                        {nation.race}
                      </Badge>
                      <Badge variant="outline" className="bg-background/50">
                        {nation.government}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin size={16} className="text-primary" />
                      <span>{nation.location}</span>
                    </div>
                    <Link href={nation.discordLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full gap-2">
                        Join {nation.name}
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No nations found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedRace("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Create Your Own Nation */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find Your Perfect Fit?</h2>
            <p className="text-muted-foreground mb-6">
              Create your own nation and leave your mark on the world of Ashea!
            </p>
            <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Join Our Discord to Learn More
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

