import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ExternalLink } from "lucide-react"

export default function StorePage() {
  const ranks = [
    {
      name: "Surf Rank",
      price: "$3",
      description: "Support the server and get some basic perks to enhance your gameplay.",
      features: ["Exclusive Discord role", "In-game title", "Access to special cosmetics", "1 home teleport"],
      imageSrc: "/surf-rank.jpg",
      kofiLink: "https://ko-fi.com/ashea/surf",
    },
    {
      name: "Knight Rank",
      price: "$10",
      description: "Unlock additional features and show your support for the server.",
      features: [
        "All Surf Rank perks",
        "Custom colored name in Discord",
        "2 additional home teleports",
        "Access to particle effects",
        "Priority server access",
      ],
      imageSrc: "/knight-rank.jpg",
      kofiLink: "https://ko-fi.com/ashea/knight",
      recommended: true,
    },
    {
      name: "Noble Rank",
      price: "$20",
      description: "Get premium features and help keep the server running smoothly.",
      features: [
        "All Knight Rank perks",
        "Custom Discord emoji",
        "5 total home teleports",
        "Access to premium cosmetics",
        "Ability to use colored text in chat",
        "Early access to new features",
      ],
      imageSrc: "/noble-rank.jpg",
      kofiLink: "https://ko-fi.com/ashea/noble",
    },
    {
      name: "Lord Rank",
      price: "$50",
      description: "The ultimate supporter package with exclusive perks and recognition.",
      features: [
        "All Noble Rank perks",
        "Custom item in the server museum",
        "10 total home teleports",
        "Exclusive monthly cosmetic items",
        "Input on future server features",
        "Special mention on the website",
        "Custom title creation",
      ],
      imageSrc: "/lord-rank.jpg",
      kofiLink: "https://ko-fi.com/ashea/lord",
    },
  ]

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Ashea</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Don't feel any pressure to donate, but if you do, thanks! This server is a passion project, and paying for
              the server can get expensive. :)
            </p>
          </div>
        </div>
      </section>

      {/* Ranks Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ranks.map((rank, index) => (
              <Card
                key={index}
                className={`rank-card border-primary/20 overflow-hidden ${rank.recommended ? "ring-2 ring-primary" : ""}`}
              >
                {rank.recommended && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="h-40 relative">
                  <Image src={rank.imageSrc || "/placeholder.svg"} alt={rank.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="font-cinzel">{rank.name}</span>
                    <Badge variant="outline" className="font-bold text-primary">
                      {rank.price}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{rank.description}</p>
                  <ul className="space-y-2">
                    {rank.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={rank.kofiLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full gap-2">
                      View on Ko-fi
                      <ExternalLink size={16} />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Support</h2>
            <p className="text-muted-foreground mb-6">
              There are many ways to support Ashea beyond donations. Participate in the community, help new players,
              create content, or spread the word about our server!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button variant="outline" className="gap-2">
                  Join Our Community
                  <ExternalLink size={16} />
                </Button>
              </Link>
              <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  Join Discord
                  <ExternalLink size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

