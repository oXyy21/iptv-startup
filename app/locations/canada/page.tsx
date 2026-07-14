import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Server, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Best IPTV in Canada | Local Servers & CAD Pricing",
  description: "The fastest IPTV service for Canadians. Enjoy local servers in Toronto and Vancouver for zero buffering.",
}

export default function CanadaPage() {
  return (
    <div className="flex flex-col bg-slate-950 text-white flex-1">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center border-b border-slate-800 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white max-w-4xl mx-auto">
          The #1 IPTV Service in <span className="text-lime-500">Canada</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Finally, an IPTV provider that cares about Canadians. Enjoy localized servers, zero buffering across provinces, and transparent CAD pricing.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/checkout?location=ca" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto text-lg font-bold" })}>
            Get a Quote / Start Trial
          </Link>
          <Link href="/pricing" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto text-lg" })}>
            View CAD Pricing
          </Link>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section id="features" className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Built for the Great White North</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">We've optimized our network specifically for Canadian ISPs like Bell, Rogers, and Telus to bypass throttling.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Local Datacenters</h3>
              <p className="text-slate-300">
                With dedicated streaming servers in Toronto, Montreal, and Vancouver, your ping stays incredibly low.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Canadian Content</h3>
              <p className="text-slate-300">
                Full access to local Canadian networks, TSN, Sportsnet, CBC, and regional news alongside international channels.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Pay in CAD</h3>
              <p className="text-slate-300">
                No more confusing exchange rates or international credit card fees. Checkout securely with clear CAD pricing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
