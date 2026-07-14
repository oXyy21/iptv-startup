import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Activity, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Live Sports IPTV | Watch PPV & Leagues",
  description: "Never miss a game. Stream live sports, PPV events, and global leagues in stunning 4K.",
}

export default function SportsPage() {
  return (
    <div className="flex flex-col bg-slate-950 text-white flex-1">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center border-b border-slate-800 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white max-w-4xl mx-auto">
          The Ultimate <span className="text-lime-500">Sports Fan's</span> Dream
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          From the Champions League to the UFC, watch every live event and PPV without blackouts or buffering.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Why Sports Fans Choose Us</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">We prioritize low-latency streams so you never hear your neighbors cheer before you see the goal.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">All Major Leagues</h3>
              <p className="text-slate-300">
                NFL, NBA, Premier League, NHL, MLB, and more. If it's broadcasting, it's on our servers.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Free PPV Events</h3>
              <p className="text-slate-300">
                UFC, Boxing, and WWE events are included at no extra cost in your subscription.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">60FPS Low-Latency</h3>
              <p className="text-slate-300">
                Experience sports the way they were meant to be watched—smooth 60FPS with minimal broadcast delay.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
