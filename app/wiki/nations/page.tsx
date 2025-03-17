import { WikiBreadcrumb } from "@/components/wiki-breadcrumb"
import { WikiTable } from "@/components/wiki-table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flag, Castle, Building, History } from "lucide-react"
import Image from "next/image"
import wikiData from "@/lib/wiki-data.json"

export default function RegionsPage() {
  // Convert Regions data to table rows
  const currentRegionsRows = wikiData.Regions.current.map((region) => [
    region.name,
    region.foundingDate,
    region.lastUpdated,
    region.note || "",
  ])

  const cityStatesRows = wikiData.Regions.cityStates.map((state) => [state.name, state.foundingDate, state.lastUpdated])

  const internalDivisionsRows = wikiData.Regions.internalDivisions.map((division) => [
    division.name,
    division.divisionOf,
    division.foundingDate,
    division.lastUpdated,
  ])

  const collapsedStatesRows = wikiData.Regions.collapsed.map((state) => [
    state.name,
    state.foundingDate,
    state.collapseDate,
    state.type,
    state.lastUpdated,
  ])

  return (
    <div className="page-transition">
      <WikiBreadcrumb items={[{ label: "Regions", href: "/wiki/Regions" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">Regions</h1>
        <p className="text-muted-foreground">
          This page contains information about all the Regions, city-states, and political entities in the world of
          Ashea.
        </p>
      </div>

      {/* Featured region Banner */}
      <div className="wiki-card mb-8 glass-panel-hover">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative h-48 md:h-auto md:w-1/3 wiki-image">
            <Image src="/primary/background-img.png?height=300&width=400" alt="Featured region" fill className="object-cover" />
          </div>
          <div className="md:w-2/3">
            <Badge className="mb-2 bg-primary/10 text-primary">Featured region</Badge>
            <h2 className="text-2xl font-bold mb-2 text-primary">The Akaimo Imperium</h2>
            <p className="text-muted-foreground mb-4">
              A powerful empire with a rich history and diverse culture. The Akaimo Imperium stands as one of the most
              influential Regions in Ashea.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium">Founded</p>
                <p className="text-primary">November 4th, 2024</p>
              </div>
              <div>
                <p className="text-sm font-medium">Government</p>
                <p className="text-primary">Imperial Monarchy</p>
              </div>
              <div>
                <p className="text-sm font-medium">Capital</p>
                <p className="text-primary">Silvaria</p>
              </div>
              <div>
                <p className="text-sm font-medium">Primary Race</p>
                <p className="text-primary">Human</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="current" className="mb-8">
        <TabsList className="mb-6 bg-background/50 backdrop-blur-sm border border-primary/10 p-1">
          <TabsTrigger
            value="current"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <Flag size={16} className="mr-2" /> Current Regions
          </TabsTrigger>
          <TabsTrigger
            value="city-states"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <Castle size={16} className="mr-2" /> City States
          </TabsTrigger>
          <TabsTrigger
            value="divisions"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <Building size={16} className="mr-2" /> Internal Divisions
          </TabsTrigger>
          <TabsTrigger
            value="collapsed"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            <History size={16} className="mr-2" /> Collapsed States
          </TabsTrigger>
          <TabsTrigger
            value="pages"
            className="wiki-tab data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
          >
            region Pages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <Flag size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">Regions</h2>
            </div>
            <p className="mb-4">The section is for existing Regions on Ashea.</p>
            <WikiTable headers={["region Name", "Founding Date", "Last Updated", "Notes"]} rows={currentRegionsRows} />
          </div>
        </TabsContent>

        <TabsContent value="city-states" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <Castle size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">City States</h2>
            </div>
            <p className="mb-4">The section is for existing city-states on Ashea. (one town Regions)</p>
            <WikiTable headers={["State Name", "Founding Date", "Last Updated"]} rows={cityStatesRows} />
          </div>
        </TabsContent>

        <TabsContent value="divisions" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <Building size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">Internal Divisions and Factions</h2>
            </div>
            <p className="mb-4">The section is for existing internal states and smaller factions on Ashea.</p>
            <WikiTable
              headers={["Division Name", "Division of", "Founding Date", "Last Updated"]}
              rows={internalDivisionsRows}
            />
          </div>
        </TabsContent>

        <TabsContent value="collapsed" className="fade-in">
          <div className="wiki-card">
            <div className="flex items-center gap-3 mb-4">
              <History size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-primary">Collapsed States/Regions</h2>
            </div>
            <p className="mb-4">Regions and states that no longer exist in the current timeline.</p>
            <WikiTable
              headers={["region Name", "Founding Date", "Collapse Date", "Type", "Last Updated"]}
              rows={collapsedStatesRows}
            />
          </div>
        </TabsContent>

        <TabsContent value="pages" className="fade-in">
          <div className="wiki-card">
            <h2 className="text-xl font-bold mb-4 text-primary">Pages in category "Regions"</h2>
            <p className="mb-4">This category contains the following pages:</p>
            {wikiData.Regions.pages.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wikiData.Regions.pages.map((page, index) => (
                  <li key={index} className="wiki-card p-4 glass-panel-hover">
                    <a
                      href={`/wiki/Regions/${page.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <Flag size={16} className="text-primary" />
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

      {/* region Map */}
      <div className="wiki-card">
        <h2 className="text-xl font-bold mb-4 text-primary">region Map</h2>
        <p className="mb-4">Current political map of Ashea showing region territories.</p>
        <div className="relative h-80 wiki-image">
          <Image src="/primary/background-img.png?height=500&width=800" alt="Ashea Political Map" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

