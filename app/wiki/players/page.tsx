import { WikiBreadcrumb } from "@/components/wiki-breadcrumb"
import { WikiTable } from "@/components/wiki-table"
import { Users, User, Crown, Shield } from "lucide-react"
import Image from "next/image"
import wikiData from "@/lib/wiki-data.json"

export default function PlayersPage() {
  // Convert players data to table rows
  const playersRows = wikiData.players.list.map((player) => [player.name, player.rank, player.ocs])

  // Sample featured players
  const featuredPlayers = [
    {
      name: "Scar883",
      rank: "Owner",
      ocs: "Unknown",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "TunaFishy",
      rank: "Leadership (Lead of Moderation & Events)",
      ocs: "Empress Koyuki Akaimo and Valeria Hadroni",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Voleia",
      rank: "Leadership (Lead of Development)",
      ocs: "Unknown",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="page-transition">
      <WikiBreadcrumb items={[{ label: "Players", href: "/wiki/players" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">Players</h1>
        <p className="text-muted-foreground">
          This page contains information about the players of Ashea and their characters.
        </p>
      </div>

      {/* Staff Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <Crown className="text-primary" /> Server Staff
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPlayers.map((player, index) => (
            <div key={index} className="wiki-card glass-panel-hover text-center">
              <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <Image src={player.imageSrc || "/placeholder.svg"} alt={player.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-primary">{player.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{player.rank}</p>
              <div>
                <h4 className="font-medium mb-1">Characters:</h4>
                <p className="text-sm">{player.ocs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Player Directory */}
      <div className="wiki-card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Users size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-primary">Player Directory</h2>
        </div>
        <p className="mb-4">A comprehensive list of all players on the Ashea server.</p>
        <WikiTable headers={["Player Name", "Player Rank", "OCs"]} rows={playersRows} />
      </div>

      {/* Player Statistics */}
      <div className="wiki-card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-primary">Player Statistics</h2>
        </div>
        <p className="mb-4">Statistics about the player base of Ashea.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 wiki-image">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Player Race Distribution"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <p className="text-white font-bold text-lg">Race Distribution</p>
            </div>
          </div>

          <div className="relative h-64 wiki-image">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Player Nation Distribution"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <p className="text-white font-bold text-lg">Nation Distribution</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pages Section */}
      <div className="wiki-card">
        <h2 className="text-xl font-bold mb-4 text-primary">Pages in category "Players"</h2>
        <p className="mb-4">This category contains the following pages:</p>
        {wikiData.players.pages.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wikiData.players.pages.map((page, index) => (
              <li key={index} className="wiki-card p-4 glass-panel-hover">
                <a
                  href={`/wiki/players/${page.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <User size={16} className="text-primary" />
                  {page}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">This category currently contains no pages or media.</p>
        )}
      </div>
    </div>
  )
}

