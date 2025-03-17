import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ExternalLink } from "lucide-react"
import data from "@/lib/data.json"

export default function StorePage() {
  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20"
        style={{
          backgroundImage: "url('/primary/payments.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-500 green-text-glow">Support Ashea</h1>
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
            {data.storeItems.map((rank, index) => (
              <Card
                key={index}
                className={`rank-card border-primary/20 overflow-hidden h-full flex flex-col ${rank.name === "Knight Rank" ? "" : (rank.recommended ? "ring-2 ring-primary" : "")}`}
              >
                {rank.recommended && rank.name !== "Knight Rank" && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="h-20 relative flex items-center justify-center py-2">
                  <Image
                    src={rank.imageSrc || "/primary/background-img.png"}
                    alt={rank.name}
                    width={150}
                    height={100}
                    className="object-contain max-h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="font-cinzel">{rank.name}</span>
                    <Badge variant="outline" className="font-bold text-primary">
                      {rank.price}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-sm text-muted-foreground">{rank.description}</p>
                  <div className="h-[180px] overflow-y-auto custom-scrollbar">
                    <ul className="space-y-2">
                      {rank.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href={rank.kofiLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground green-glow">
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
              There are many ways to support Ashea beyond doRegions. Participate in the community, help new players,
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

