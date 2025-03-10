import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/glass-card"

export interface Nation {
  name: string;
  imageSrc: string;
  race: string;
  government: string;
  description: string;
  discordLink: string;
}

export function NationCard({ nation }: { nation: Nation }) {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="aspect-video relative mb-4 overflow-hidden rounded-md">
        <Image
          src={nation.imageSrc}
          alt={nation.name}
          width={400}
          height={225}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-cinzel font-bold text-xl text-primary mb-2">{nation.name}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="outline" className="bg-primary/10 border-primary/30">
          {nation.race}
        </Badge>
        <Badge variant="outline" className="bg-primary/10 border-primary/30">
          {nation.government}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-4 h-[80px] overflow-hidden">{nation.description}</p>
      <div className="mt-auto w-full">
        <Link href={nation.discordLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/80 text-primary-foreground hover:green-glow w-full"
          >
            <ExternalLink size={16} className="mr-1" />
            Join Discord
          </Button>
        </Link>
      </div>
    </GlassCard>
  )
}

