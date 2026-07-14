import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Film, Clapperboard, PlayCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Cinema IPTV | 4K Movies & VODs",
  description: "Transform your living room into a theater. Access 100,000+ 4K movies and TV series on demand.",
}

export default function CinemaPage() {
  return (
    <div className="flex flex-col bg-slate-950 text-white flex-1">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center border-b border-slate-800 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white max-w-4xl mx-auto">
          Your Personal <span className="text-lime-500">4K Theater</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Access over 100,000 blockbuster movies, entire TV series box sets, and exclusive platform originals all in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/checkout" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto text-lg font-bold" })}>
            Get a Quote / Start Trial
          </Link>
          <Link href="/pricing" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto text-lg" })}>
            View Pricing
          </Link>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section id="features" className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Cinephiles Choose Us</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">We offer the largest Video-On-Demand library updated daily with the latest releases.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <Film className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Massive VOD Library</h3>
              <p className="text-slate-300">
                Cancel your 5 different subscriptions. We have content from Netflix, Hulu, HBO, Disney, and more.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <Clapperboard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Daily Updates</h3>
              <p className="text-slate-300">
                New movies and series episodes are uploaded within hours of their official release.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <PlayCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">HDR & Dolby Audio</h3>
              <p className="text-slate-300">
                Many of our VODs support 4K HDR10 and 5.1 surround sound to push your home theater to the limit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
