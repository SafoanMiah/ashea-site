import { WikiBreadcrumb } from "@/components/wiki-breadcrumb"
import { WikiTable } from "@/components/wiki-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Swords, Shield, Scroll } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import wikiData from "@/lib/wiki-data.json"

export default function WarsPage() {
  // Convert wars data to table rows
  const agiyanWarsRows = wikiData.wars.agiyanWars.map((war) => [
    war.name,
    war.battles.join(", "),
    war.belligerents.join(", "),
    war.winner,
    war.startDate,
    war.endDate,
  ])

  const battlesRows = wikiData.wars.battles.map((battle) => [battle.name, battle.war, battle.winner, battle.date])

  const loreWarsRows = wikiData.wars.loreWars.map((war) => [
    war.name,
    war.type,
    war.belligerents.join(", "),
    war.winner,
    war.date,
  ])

  return (
    <div className="page-transition">
      <WikiBreadcrumb items={[{ label: "Wars", href: "/wiki/wars" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">Wars</h1>
        <p className="text-muted-foreground">
          This page contains information about all the wars, battles, and conflicts in the world of Ashea.
        </p>
      </div>

      {/* Featured Battle Banner */}
      <div className="wiki-card mb-8 glass-panel-hover">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative h-48 md:h-auto md:w-1/3 wiki-image">
            <Image src="/primary/background-img.png?height=300&width=400" alt="Featured Battle" fill className="object-cover" />
          </div>
          <div className="md:w-2/3">
            <Badge className="mb-2 bg-primary/10 text-primary">Featured Battle</Badge>
            <h2 className="text-2xl font-bold mb-2 text-primary">The Chayuthaya-Madarian War</h2>
            <p className="text-muted-foreground mb-4">
              A major conflict that reshaped the political landscape of Ashea, resulting in the victory of the
              Chayuthaya Empire.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium">Start Date</p>
                <p className="text-primary">August 11th, 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">End Date</p>
                <p className="text-primary">October 16th, 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">Major Battles</p>
                <p className="text-primary">6</p>
              </div>
              <div>
                <p className="text-sm font-medium">Victor</p>
                <p className="text-primary">The Chayuthaya Empire</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="agiyan" className="mb-8">
        <TabsList className="mb-6 bg-background/50 backdrop-blur-sm border border-primary/10 p-1">
          <TabsTrigger
            value="agiyan"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <Swords size={16} className="mr-2" /> Agiyan Wars
          </TabsTrigger>
          <TabsTrigger
            value="battles"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <Shield size={16} className="mr-2" /> Battles
          </TabsTrigger>
          <TabsTrigger
            value="lore"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <Scroll size={16} className="mr-2" /> Lore Wars
          </TabsTrigger>
          <TabsTrigger
            value="pages"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            War Pages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="agiyan" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <Swords size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">Agiyan Wars</h2>
            </div>
            <p className="mb-4">
              This section is dedicated to the records of the history and all battles within a war.
            </p>
            <WikiTable
              headers={["War Name", "Battles", "Main Belligerents", "Winner", "Start Date", "End Date"]}
              rows={agiyanWarsRows}
            />
          </div>
        </TabsContent>

        <TabsContent value="battles" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">Battles</h2>
            </div>
            <p className="mb-4">This section is dedicated to the events and records of single battles.</p>
            <WikiTable headers={["Battle Name", "War", "Winner", "Date"]} rows={battlesRows} />
          </div>
        </TabsContent>

        <TabsContent value="lore" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <Scroll size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">Lore Wars</h2>
            </div>
            <p className="mb-4">
              This section is dedicated to wars that happened in lore/RP, but didn't have any in-game events. Official
              RP wars, such as the Mythros event are included in here.
            </p>
            <WikiTable
              headers={["War Name", "Type of War", "Main Belligerents", "Winner", "Date"]}
              rows={loreWarsRows}
            />
          </div>
        </TabsContent>

        <TabsContent value="pages" className="fade-in">
          <div className="wiki-card">
            <h2 className="text-xl font-bold mb-4 text-primary">Pages in category "Wars"</h2>
            <p className="mb-4">This category contains the following pages:</p>
            {wikiData.wars.pages.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wikiData.wars.pages.map((page, index) => (
                  <li key={index} className="wiki-card p-4 glass-panel-hover">
                    <a
                      href={`/wiki/wars/${page.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <Swords size={16} className="text-primary" />
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No pages found in this category.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Battle Map */}
      <div className="wiki-card">
        <h2 className="text-xl font-bold mb-4 text-primary">Battle Locations</h2>
        <p className="mb-4">Map showing the locations of major battles in Ashea's history.</p>
        <div className="relative h-80 wiki-image">
          <Image src="/primary/background-img.png?height=500&width=800" alt="Ashea Battle Map" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

