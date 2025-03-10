import { WikiBreadcrumb } from "@/components/wiki-breadcrumb"
import { WikiTable } from "@/components/wiki-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import wikiData from "@/lib/wiki-data.json"
import { races as racesData } from "@/lib/data.json"

export default function RacesPage() {
  // Convert races data to table rows
  const racesRows = wikiData.races.mainSpecies.map((race) => [race.race, race.subspecies])

  // Featured races from data.json
  const featuredRaces = [
    racesData[0], // Human
    racesData[1], // Neko
    racesData[3], // Dragonborn
  ].map(race => ({
    ...race,
    imageSrc: race.imageSrc || "/primary/background-img.png?height=200&width=300"
  }))

  return (
    <div className="page-transition">
      <WikiBreadcrumb items={[{ label: "Races", href: "/wiki/races" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">Races</h1>
        <p className="text-muted-foreground">
          This page contains information about all the playable races and their subspecies in the world of Ashea.
        </p>
      </div>

      {/* Featured Races */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Featured Races</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRaces.map((race, index) => (
            <div key={index} className="wiki-card glass-panel-hover">
              <div className="relative h-40 wiki-image mb-4">
                <Image src={race.imageSrc || "/primary/background-img.png"} alt={race.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{race.name}</h3>
              <p className="text-muted-foreground mb-4">{race.description}</p>
              <div>
                <h4 className="font-medium mb-2">Abilities:</h4>
                <ul className="space-y-1">
                  {race.abilities.map((ability, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary">•</span>
                      <span>{ability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Tabs defaultValue="main" className="mb-8">
        <TabsList className="mb-6 bg-background/50 backdrop-blur-sm border border-primary/10 p-1">
          <TabsTrigger
            value="main"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <Users size={16} className="mr-2" /> Main Species
          </TabsTrigger>
          <TabsTrigger
            value="pages"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <User size={16} className="mr-2" /> Race Pages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="main" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <Users size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">Main Species</h2>
            </div>
            <p className="mb-4">The playable races in Ashea and their subspecies.</p>
            <WikiTable headers={["Race", "Subspecies"]} rows={racesRows} />
          </div>
        </TabsContent>

        <TabsContent value="pages" className="fade-in">
          <div className="wiki-card">
            <h2 className="text-xl font-bold mb-4 text-primary">Pages in category "Races"</h2>
            <p className="mb-4">This category contains the following pages:</p>
            {wikiData.races.pages.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wikiData.races.pages.map((page, index) => (
                  <li key={index} className="wiki-card p-4 glass-panel-hover">
                    <Link
                      href={`/wiki/races/${page.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <User size={16} className="text-primary" />
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No pages found in this category.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Race Distribution Map */}
      <div className="wiki-card">
        <h2 className="text-xl font-bold mb-4 text-primary">Race Distribution</h2>
        <p className="mb-4">Map showing the distribution of races across the world of Ashea.</p>
        <div className="relative h-80 wiki-image">
          <Image
            src="/primary/background-img.png?height=500&width=800"
            alt="Ashea Race Distribution Map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

