import Link from "next/link"
import Image from "next/image"
import { Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/glass-card"

interface StoreItem {
  name: string;
  price: string;
  description: string;
  imageSrc: string;
  features: string[];
  kofiLink: string;
}

export function StoreItemCard({ item }: { item: StoreItem }) {
  return (
    <GlassCard className="relative h-full flex flex-col">
      <div className="aspect-[3/2] w-[40%] mx-auto mb-4">
        <Image
          src={item.imageSrc}
          alt={item.name}
          width={300}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-cinzel font-bold text-xl text-primary">{item.name}</h3>
        <Badge variant="outline" className="font-bold text-primary border-primary/30 bg-primary/10">
          {item.price}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-4 h-[40px] overflow-hidden">{item.description}</p>
      <div className="h-[180px] overflow-y-auto mb-6 custom-scrollbar">
        <ul className="space-y-2">
          {item.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <Check size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href={item.kofiLink} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
        <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground green-glow">
          View on Ko-fi
          <ExternalLink size={16} />
        </Button>
      </Link>
    </GlassCard>
  )
}

