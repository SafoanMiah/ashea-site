import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield } from "lucide-react"
import { Carousel } from "@/components/carousel"
import { regionCard } from "@/components/region-card"
import { StoreItemCard } from "@/components/store-item-card"
// Remove this import
// import { PaymentOptions } from "@/components/payment-options"

import data from "@/lib/data.json"

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-section min-h-[90vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: "url('/primary/background-img.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="container px-4 py-16 md:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-green-600 mb-6 drop-shadow-lg green-text-glow animate-pulse-slow">
            {data.homepage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-cinzel font-bold text-white/90 mb-8 drop-shadow-md hover:text-glow">
            {data.homepage.hero.subtitle}
          </p>
          <p className="max-w-3xl text-white/80 mb-10 text-lg hover:text-glow-subtle">
            {data.homepage.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/join">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground green-glow hover:pulse-green"
              >
                Join Ashea
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white hover:green-glow"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background green-bg-subtle">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 border-primary/30">
                {data.homepage.introduction.badge}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{data.homepage.introduction.title}</h2>
              <p className="text-muted-foreground mb-6">{data.homepage.introduction.description}</p>
              <ul className="space-y-3 mb-8">
                {data.homepage.introduction.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="gap-2 border-primary/30 hover:border-primary/60 green-shadow-hover"
                >
                  Discover Our Lore
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="fantasy-border rounded-lg overflow-hidden hover:green-glow">
                <Image
                  src="/primary/world-map.jpg"
                  alt="World of Agiya Map"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-effect rounded-lg p-4 flex flex-col items-center justify-center border border-primary/40 hover:green-glow">
                <p className="font-cinzel font-bold text-lg text-primary">{data.homepage.introduction.worldSize}</p>
                <p className="text-xs text-center text-muted-foreground">
                  {data.homepage.introduction.worldSizeDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remove duplicate Introduction Section and go directly to Featured Regions */}
      {/* Featured Regions Carousel */}
      <section className="py-16 md:py-24 green-bg-light">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Regions of Agiya</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the established Regions in our world, each with their own unique culture, government, and
              history.
            </p>
          </div>

          <Suspense fallback={<div>Loading Regions...</div>}>
            <Carousel
              itemsToShow={3}
              showDots={true}
              showArrows={true}
              className="px-4"
              autoPlay={true}
              autoPlaySpeed={5000}
              pauseOnHover={true}
            >
              {data.Regions.map((region) => (
                <div key={region.id} className="px-2">
                  <regionCard region={region} />
                </div>
              ))}
            </Carousel>
          </Suspense>

          {/* Remove the "View All Regions" button and link */}
        </div>
      </section>

      {/* Featured Store Items */}
      <section className="py-16 md:py-24 bg-background green-bg-subtle">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Ranks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Support the server and get exclusive perks with our premium ranks.
            </p>
          </div>

          <Suspense fallback={<div>Loading store items...</div>}>
            <Carousel
              itemsToShow={3}
              showDots={true}
              showArrows={true}
              className="px-4"
              autoPlay={true}
              autoPlaySpeed={6000}
              pauseOnHover={true}
            >
              {data.storeItems.map((item) => (
                <div key={item.id} className="px-2 h-full">
                  <div className="h-full">
                    <StoreItemCard key={item.id} item={item} />
                  </div>
                </div>
              ))}
            </Carousel>
          </Suspense>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary/15 green-gradient-subtle">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{data.homepage.callToAction.title}</h2>
              <p className="text-muted-foreground mb-8">{data.homepage.callToAction.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/80 text-primary-foreground green-glow pulse-green"
                  >
                    Join Minecraft Server
                  </Button>
                </Link>
                <Link href={data.siteInfo.discordInvite} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-primary/30 hover:border-primary/60 green-shadow-hover"
                  >
                    Join Discord
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="fantasy-border rounded-lg overflow-hidden hover:green-glow">
                <Image
                  src="/primary/payments.png"
                  alt="Join Ashea"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 glass-effect rounded-lg p-4 flex flex-col items-center justify-center border border-primary/40 hover:green-glow animate-float">
                <p className="font-cinzel font-bold text-lg text-primary">3+</p>
                <p className="text-xs text-center text-muted-foreground">Years of History</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

