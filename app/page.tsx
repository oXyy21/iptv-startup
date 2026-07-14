import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, MonitorPlay, Zap, ShoppingCart, UserPlus, Download, PlayCircle, Tv, Smartphone, Tablet, Laptop } from "lucide-react"

export const metadata: Metadata = {
  title: "IPTV Startup | Premium 4K Streaming",
  description: "Experience the ultimate 4K IPTV streaming with 99.9% uptime, multi-device support, and no buffering.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-950 text-white flex-1">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 text-center border-b border-slate-800 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white max-w-4xl mx-auto">
          Unleash Premium IPTV on <span className="text-lime-500">Every Screen</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
          Say goodbye to buffering and expensive cable bills. Enjoy raw 4K quality, instant access to 25,000+ channels, and unmatched reliability.
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

      {/* 2. CORE FEATURES GRID */}
      <section id="features" className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Service?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Built from the ground up to provide the fastest, most reliable streaming experience possible.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Raw 4K Quality</h3>
              <p className="text-slate-300">
                Experience crystal-clear, uncompressed streams with anti-freeze technology ensuring zero buffering.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">All Device Support</h3>
              <p className="text-slate-300">
                Watch seamlessly on your Smart TV, Android box, Apple TV, iPhone, or PC. One account, every screen.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-lime-500/10 text-lime-500 rounded-md flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">99.9% Uptime</h3>
              <p className="text-slate-300">
                Our globally distributed, redundant server network guarantees your stream never drops during the big game.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Get started with premium streaming in 4 simple steps. No technical skills required.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-slate-800"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-950 border-4 border-slate-800 rounded-full flex items-center justify-center relative z-10 mb-6">
                <ShoppingCart className="w-10 h-10 text-lime-500" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-500 text-slate-950 font-bold rounded-full flex items-center justify-center border-4 border-slate-900">1</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Choose Your Plan</h3>
              <p className="text-slate-400 text-sm">Select the perfect package that fits your needs and budget.</p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-950 border-4 border-slate-800 rounded-full flex items-center justify-center relative z-10 mb-6">
                <UserPlus className="w-10 h-10 text-lime-500" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-500 text-slate-950 font-bold rounded-full flex items-center justify-center border-4 border-slate-900">2</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Create Account</h3>
              <p className="text-slate-400 text-sm">Quick and secure registration process to get instant access.</p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-950 border-4 border-slate-800 rounded-full flex items-center justify-center relative z-10 mb-6">
                <Download className="w-10 h-10 text-lime-500" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-500 text-slate-950 font-bold rounded-full flex items-center justify-center border-4 border-slate-900">3</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Download App</h3>
              <p className="text-slate-400 text-sm">Install our app on your Smart TV, mobile, tablet, or PC.</p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-950 border-4 border-slate-800 rounded-full flex items-center justify-center relative z-10 mb-6">
                <PlayCircle className="w-10 h-10 text-lime-500" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-500 text-slate-950 font-bold rounded-full flex items-center justify-center border-4 border-slate-900">4</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Start Streaming</h3>
              <p className="text-slate-400 text-sm">Log in and enjoy unlimited access to channels and VODs.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA / DEVICE SUPPORT SECTION */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-10 md:p-20 text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-500/10 via-slate-900 to-slate-950 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Ready to Upgrade Your <span className="text-lime-500">Entertainment?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                Join thousands of happy streamers and unlock unlimited access to the world&apos;s best content. No buffering, no contracts, pure enjoyment.
              </p>
              
              <Link href="/checkout?plan=1m" className={buttonVariants({ size: "lg", className: "text-xl px-10 h-16 font-bold mb-16 shadow-[0_0_30px_-5px_rgba(132,204,22,0.4)]" })}>
                Start Streaming Now
              </Link>
              
              {/* Devices */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-90">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 shadow-inner">
                    <Tv className="w-7 h-7 text-slate-300" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Smart TV</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 shadow-inner">
                    <Smartphone className="w-7 h-7 text-slate-300" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Mobile</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 shadow-inner">
                    <Tablet className="w-7 h-7 text-slate-300" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Tablet</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 shadow-inner">
                    <Laptop className="w-7 h-7 text-slate-300" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Laptop</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}