"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Copy, ExternalLink, Info } from "lucide-react"

export default function JoinPage() {
  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section
        className="bg-muted py-12 md:py-20 relative"
        style={{
          backgroundImage: "url('/primary/nations.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-500 green-text-glow">Join Ashea</h1>
            <p className="text-lg text-muted-foreground mb-8 text-white">
              Ready to start your adventure in the world of Agiya? Follow these simple steps to join our community.
            </p>
          </div>
        </div>
      </section>

      {/* Connection Details */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Server Details
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Connection Information</h2>
              <p className="text-muted-foreground mb-8">
                Ashea is a Java Minecraft server that requires version 1.20.1 or above. We recommend using the official
                Minecraft launcher for the best experience.
              </p>

              <Card className="mb-8 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Server IP:</span>
                      <span className="font-mono bg-muted px-2 py-1 rounded">ashea.org</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground"
                      onClick={() => {
                        navigator.clipboard.writeText("ashea.org")
                      }}
                    >
                      <Copy size={16} />
                      <span className="sr-only">Copy IP</span>
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Version:</span>
                    <span>1.20.1 or above</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Age Requirement:</span>
                    <span>13+</span>
                  </div>

                  <div className="flex items-center gap-2 text-amber-500">
                    <Info size={16} />
                    <span className="text-sm">No mods or special clients required</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="minecraft://connect/ashea.org">
                  <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground w-full sm:w-auto">
                    Join Minecraft Server
                  </Button>
                </Link>
                <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    Join Discord
                    <ExternalLink size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="fantasy-border rounded-lg overflow-hidden">
                <Image
                  src="/primary/world-map.jpg"
                  alt="Join Ashea Server"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center border border-primary/30">
                <p className="font-cinzel font-bold text-lg">13+</p>
                <p className="text-xs text-center text-muted-foreground text-white">Age Requirement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Getting Started
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your First Steps in Ashea</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to get started on your adventure in the world of Agiya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6 pt-8 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-cinzel font-bold text-xl text-primary">1</span>
                </div>
                <h3 className="font-cinzel font-bold text-xl mb-3">Join Discord</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our Discord server is where most of the community interaction happens. Join to connect with other
                  players and nations.
                </p>
                <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 w-full">
                    Join Discord
                    <ExternalLink size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 pt-8 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-cinzel font-bold text-xl text-primary">2</span>
                </div>
                <h3 className="font-cinzel font-bold text-xl mb-3">Choose a Nation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our nation advertisements in Discord and find a community that matches your playstyle and
                  interests.
                </p>
                <Link href="/nations">
                  <Button variant="outline" className="gap-2 w-full">
                    Nation Picker
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 pt-8 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-cinzel font-bold text-xl text-primary">3</span>
                </div>
                <h3 className="font-cinzel font-bold text-xl mb-3">Create Your Character</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create your character bio in our #oc-bios channel and choose one of our nine unique fantasy races.
                </p>
                <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 w-full">
                    Character Creation
                    <ExternalLink size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discord Emphasis */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Discord Community</h2>
              <p className="text-muted-foreground mb-6">
                Our Discord server is the heart of the Ashea community. This is where nations form, roleplay happens,
                and you'll find all the resources you need to get started.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1 flex-shrink-0">#nation-advertisements</Badge>
                  <span>Browse existing nations and find your perfect fit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1 flex-shrink-0">#oc-bios</Badge>
                  <span>Create your character and choose your race</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1 flex-shrink-0">#getting-started</Badge>
                  <span>Learn the basics of playing on our server</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1 flex-shrink-0">#community-chat</Badge>
                  <span>Connect with other players and make friends</span>
                </li>
              </ul>
              <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  Join Discord Community
                  <ExternalLink size={16} />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="fantasy-border rounded-lg overflow-hidden">
                <Image
                  src="/primary/about.png"
                  alt="Discord Community"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about joining Ashea? Here are some common questions and answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-cinzel font-bold text-xl mb-3">Do I need any mods to play?</h3>
                <p className="text-muted-foreground">
                  No, Ashea is a vanilla-friendly server. You can join with a standard Minecraft client (version 1.20.1
                  or above). Some optional client-side mods like minimap mods are allowed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-cinzel font-bold text-xl mb-3">Is there an age requirement?</h3>
                <p className="text-muted-foreground">
                  Yes, players must be 13 years or older to join our community, in accordance with Discord's Terms of
                  Service and to maintain a mature roleplay environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-cinzel font-bold text-xl mb-3">Do I have to join a nation?</h3>
                <p className="text-muted-foreground">
                  While joining a nation is encouraged for the full roleplay experience, you can also play as a lone
                  wanderer or even start your own nation if you gather enough players.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-cinzel font-bold text-xl mb-3">How do I choose a race?</h3>
                <p className="text-muted-foreground">
                  After joining our Discord, check the #race-information channel to learn about the nine available
                  races. Once you've decided, include your chosen race in your character bio in the #oc-bios channel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

