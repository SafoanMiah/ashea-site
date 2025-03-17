import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Flag, Swords, Users, Scroll } from "lucide-react"
import wikiData from "@/lib/wiki-data.json"

export default function WikiHomePage() {
  return (
    <div className="page-transition">
      <div className="max-w-4xl mx-auto">
        {/* Wiki Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary green-text-glow">
            {wikiData.wikiInfo.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{wikiData.wikiInfo.description}</p>
          <div className="wiki-card mb-8 text-center glass-panel-hover green-border">
            <h2 className="text-xl font-bold mb-2 text-primary">Join Today</h2>
            <p className="mb-4">
              Join today at <span className="font-semibold text-primary">{wikiData.wikiInfo.joinInfo.serverIp}</span>,
              with minecraft version {wikiData.wikiInfo.joinInfo.version} or above. No mods are necessary!
            </p>
            <p className="mb-4">
              Also, join our discord at{" "}
              <Link href={`https://${wikiData.wikiInfo.joinInfo.discord}`} className="text-primary hover:underline">
                {wikiData.wikiInfo.joinInfo.discord}
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/join">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-green">
                  Join Server
                </Button>
              </Link>
              <Link href={`https://${wikiData.wikiInfo.joinInfo.discord}`} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 text-primary"
                >
                  Join Discord
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="wiki-image relative h-64 md:h-80 green-glow">
            <Image src="/primary/background-img.png?height=400&width=800" alt="Ashea World Map" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2 green-text-glow">Explore the World of Agiya</h3>
                <p className="text-white/80">Discover the rich history and diverse landscapes of our fantasy world</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wiki Categories */}
        {wikiData.categories.map((category, index) => (
          <div key={index} className="mb-12 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <h2 className="text-2xl font-bold mb-4 border-b border-primary/30 pb-2 text-primary">{category.title}</h2>
            <p className="text-muted-foreground mb-6">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.subcategories.map((subcategory, subIndex) => (
                <Link key={subIndex} href={`/wiki/${subcategory.slug}`}>
                  <div className="wiki-card h-full glass-panel-hover green-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/30">
                        Category
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      {subcategory.icon === "Flag" && <Flag className="text-primary" size={24} />}
                      {subcategory.icon === "Swords" && <Swords className="text-primary" size={24} />}
                      {subcategory.icon === "Users" && <Users className="text-primary" size={24} />}
                      {subcategory.icon === "Scroll" && <Scroll className="text-primary" size={24} />}
                      {subcategory.icon === "BookOpen" && <BookOpen className="text-primary" size={24} />}
                      <h3 className="text-xl font-bold text-primary">{subcategory.name}</h3>
                    </div>
                    <div className="flex justify-end mt-4">
                      <ArrowRight size={16} className="text-primary" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Recent Updates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-primary/30 pb-2 text-primary">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="wiki-card green-border">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-primary">The Chayuthaya Empire Collapse</h3>
                    <p className="text-sm text-muted-foreground">Updated on November 2nd, 2024</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Regions</Badge>
                </div>
                <div className="relative h-32 wiki-image mb-3 green-shadow">
                  <Image
                    src="/primary/Regions.png?height=200&width=400"
                    alt="Chayuthaya Empire"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  The once-mighty Chayuthaya Empire has fallen after a series of internal conflicts and external
                  pressures.
                </p>
                <Link href="/wiki/Regions" className="text-primary hover:underline flex items-center gap-1 group">
                  Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="wiki-card green-border">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-primary">The Battle of Oryza</h3>
                    <p className="text-sm text-muted-foreground">Updated on October 13th, 2024</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Wars</Badge>
                </div>
                <div className="relative h-32 wiki-image mb-3 green-shadow">
                  <Image
                    src="/primary/payments.png?height=200&width=400"
                    alt="Battle of Oryza"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  The decisive battle that ended the Chayuthaya-Madarian War with a victory for the Chayuthaya Empire.
                </p>
                <Link href="/wiki/wars" className="text-primary hover:underline flex items-center gap-1 group">
                  Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contribute */}
        <div className="text-center mb-12">
          <div className="wiki-card glass-panel-hover green-border">
            <h2 className="text-2xl font-bold mb-4 text-primary">Want to Contribute?</h2>
            <p className="text-muted-foreground mb-6">
              Help us expand the Ashea Wiki by adding your knowledge and experiences.
            </p>
            <div className="relative h-40 wiki-image mb-6 green-glow">
              <Image
                src="/primary/.png?height=300&width=600"
                alt="Contribute to Wiki"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <BookOpen size={48} className="text-white" />
              </div>
            </div>
            <Link href="/wiki/contribute">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground green-glow">
                Learn How to Contribute
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

