import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, MapPin, Crown, Shield, Scroll, Clock } from "lucide-react"
import { races as racesData, timelineEvents as timelineEventsData } from "@/lib/data.json"

export default function AboutPage() {
  // Race data from data.json
  const races = racesData

  // Timeline events from data.json
  const timelineEvents = timelineEventsData

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section
        className="bg-muted py-12 md:py-20 relative"
        style={{
          backgroundImage: "url('/primary/about.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-500 green-text-glow">About Ashea</h1>
            <p className="text-lg text-muted-foreground mb-8 text-white">
              Discover the rich history, unique features, and vibrant community that make Ashea special.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Community 3+ Years in the Making</h2>
              <p className="text-muted-foreground mb-6">
                Ashea began as a small project among friends who shared a passion for roleplay, worldbuilding, and
                Minecraft. Over three years, it has grown into a thriving community with a rich history, custom lore,
                and dedicated players from around the world.
              </p>
              <p className="text-muted-foreground mb-8">
                We're a small and friendly community of roleplayers, nerds, and wannabe dictators who play on a
                Minecraft server with custom fantasy races, quests, Regions, wars, diplomacy, and a continuously
                evolving world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join">
                  <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">Join Our Community</Button>
                </Link>
                <Link href="/Regions">
                  <Button variant="outline" className="gap-2">
                    Explore Regions
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="fantasy-border rounded-lg overflow-hidden">
                <Image
                  src="/primary/payments.png"
                  alt="Ashea Community"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center border border-primary/30">
                <p className="font-cinzel font-bold text-lg">3+</p>
                <p className="text-xs text-center text-muted-foreground">Years of History</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World of Agiya */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">World Lore</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The World of Agiya</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our server is themed around roleplay in a fictional fantasy world called Agiya, a vast and diverse
              landscape with a rich history and unique cultures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-cinzel font-bold text-2xl mb-4">A Custom-Built World</h3>
              <p className="text-muted-foreground mb-6">
                Agiya spans 144km² of entirely custom-made terrain, featuring diverse biomes from lush forests and
                towering mountains to vast deserts and mysterious swamplands. Each region has its own history,
                resources, and challenges.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Diverse biomes with unique resources and challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <Crown className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Ancient ruins and dungeons filled with treasures</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Player-built cities and monuments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Scroll className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Hidden lore and mysteries to discover</span>
                </li>
              </ul>
              <Link href="/map">
                <Button variant="outline" className="gap-2">
                  Explore the Map
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="fantasy-border rounded-lg overflow-hidden">
                <Image
                  src="/primary/world-map.jpg"
                  alt="World of Agiya Landscape"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fantasy Races */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Character Creation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nine Unique Fantasy Races</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from nine distinct races, each with their own abilities, culture, and place in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {races.map((race, index) => (
              <Card key={index} className="region-card bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
                <div className="h-40 relative">
                  <Image src={race.imageSrc || "/primary/background-img.png"} alt={race.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-cinzel font-bold text-xl mb-2">{race.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{race.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Abilities:</p>
                    <ul className="space-y-1">
                      {race.abilities.map((ability, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{ability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Server History Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">History</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Timeline of Ashea</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the key events that have shaped our server over the past three years.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 top-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2">{event.year}</Badge>
                    <h3 className="font-cinzel font-bold text-xl mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes Ashea Special</h2>
              <p className="text-muted-foreground mb-6">
                At the heart of Ashea is a commitment to creating a welcoming, creative, and engaging environment for
                all players. Our community values:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Inclusive Community</h3>
                    <p className="text-sm text-muted-foreground">
                      We welcome players from all backgrounds and experience levels.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Scroll size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Creative Freedom</h3>
                    <p className="text-sm text-muted-foreground">
                      Express yourself through roleplay, building, and region development.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Player-Driven World</h3>
                    <p className="text-sm text-muted-foreground">
                      The actions and decisions of players shape the world and its history.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Crown size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Over Quantity</h3>
                    <p className="text-sm text-muted-foreground">
                      We focus on creating meaningful experiences rather than growing for the sake of numbers.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/join">
                <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">Join Our Community</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="fantasy-border rounded-lg overflow-hidden">
                <Image
                  src="/primary/Regions.png"
                  alt="Ashea Community Values"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Story?</h2>
            <p className="text-muted-foreground mb-6">
              Join Ashea today and become part of our growing community of roleplayers, builders, and adventurers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
                  Join Ashea
                </Button>
              </Link>
              <Link href="/Regions">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Regions
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

