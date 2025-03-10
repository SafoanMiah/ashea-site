import { WikiBreadcrumb } from "@/components/wiki-breadcrumb"
import { FileEdit, BookOpen, Check, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContributePage() {
  return (
    <div className="page-transition">
      <WikiBreadcrumb items={[{ label: "Contribute", href: "/wiki/contribute" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">Contribute to the Wiki</h1>
        <p className="text-muted-foreground">
          Learn how to contribute to the Ashea Wiki and help document our server's rich history and lore.
        </p>
      </div>

      {/* Hero Section */}
      <div className="wiki-card mb-8 glass-panel-hover">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-primary">Why Contribute?</h2>
            <p className="mb-4">
              The Ashea Wiki is a community-driven project that aims to document the rich history, lore, and gameplay
              elements of our server. By contributing, you help preserve the stories and achievements of our community.
            </p>
            <p className="mb-4">
              Whether you're documenting your nation's history, creating guides for new players, or adding information
              about game mechanics, your contributions are valuable to the entire community.
            </p>
            <div className="flex gap-4">
              <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join Discord</Button>
              </Link>
              <Link href="/wiki/editors-guide">
                <Button
                  variant="outline"
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 text-primary"
                >
                  Editors Guide
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 wiki-image">
              <Image
                src="/primary/background-img.png?height=400&width=600"
                alt="Wiki Contributors"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How to Contribute */}
      <div className="wiki-card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FileEdit size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-primary">How to Contribute</h2>
        </div>
        <p className="mb-6">Follow these steps to start contributing to the Ashea Wiki:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="wiki-card p-4 glass-panel-hover">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <h3 className="font-bold">Join Discord</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Join our Discord server and request the "Wiki Editor" role in the #roles channel.
            </p>
          </div>

          <div className="wiki-card p-4 glass-panel-hover">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <h3 className="font-bold">Read Guidelines</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Familiarize yourself with our wiki guidelines and formatting standards.
            </p>
          </div>

          <div className="wiki-card p-4 glass-panel-hover">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <h3 className="font-bold">Start Editing</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Begin creating or editing pages using our wiki editor interface.
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="wiki-card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-primary">Wiki Guidelines</h2>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-2 text-primary">Do's:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <span>Be accurate and factual in your documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <span>Use proper formatting and categorization</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <span>Include relevant images and references</span>
            </li>
            <li className="flex items-start gap-2">
              <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <span>Respect other contributors' work</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-primary">Don'ts:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <AlertTriangle size={18} className="text-amber-500 mt-1 flex-shrink-0" />
              <span>Don't include false or misleading information</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={18} className="text-amber-500 mt-1 flex-shrink-0" />
              <span>Don't delete or significantly alter others' contributions without discussion</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={18} className="text-amber-500 mt-1 flex-shrink-0" />
              <span>Don't use the wiki for personal disputes or drama</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle size={18} className="text-amber-500 mt-1 flex-shrink-0" />
              <span>Don't add inappropriate content or language</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="wiki-card text-center">
        <h2 className="text-xl font-bold mb-4 text-primary">Need Help?</h2>
        <p className="mb-6">
          If you have questions about contributing to the wiki, please contact our Wiki Administrators on Discord.
        </p>
        <Link href="https://discord.gg/ashea" target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Wiki Admins</Button>
        </Link>
      </div>
    </div>
  )
}

