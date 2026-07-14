import { Metadata } from "next"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, ShieldCheck, Zap, Clock, Tv, MonitorPlay, Smartphone } from "lucide-react"
import ChannelZapper from "@/components/ChannelZapper"
import SpeedTester from "@/components/SpeedTester"

export const metadata: Metadata = {
  title: "Best 4K IPTV Subscription for Sports Fans",
  description: "Looking for the best 4K IPTV subscription for sports fans? Enjoy reliable streaming, no buffering, and live events on any device.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh bg-stone-950 text-stone-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/20 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl -z-10" />
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
          Premium IPTV on <span className="text-blue-500">Every Screen</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-400 mb-10 max-w-3xl mx-auto">
          If you are searching for the <strong>best 4K IPTV subscription for sports fans</strong>, you have come to the right place. Get instant access to 25,000+ Channels & 100,000+ VODs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-started" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-14 px-8 text-lg bg-iptv-green hover:bg-iptv-green/90 text-stone-950 font-bold" })}>
            View Plans
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-14 px-8 text-lg border-stone-700 text-stone-300 hover:text-white hover:bg-stone-800" })}>
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* 2. TRUST BANNER */}
      <div className="border-y border-stone-800 bg-stone-900/50 py-4">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-medium text-stone-300">
          <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-iptv-green" /> 99.9% Uptime</span>
          <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-iptv-green" /> 24/7 Support</span>
          <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-iptv-green" /> No Long-Term Contracts</span>
        </div>
      </div>

      {/* 4. THE "SOMETHING NEW" - INTERACTIVE DEMOS */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
            <p className="text-stone-400 text-lg mb-8">
              Don't settle for buffering. Our servers are globally distributed to guarantee a seamless viewing experience. Test your connection or try our live zapper demo.
            </p>
            <SpeedTester />
          </div>
          <div>
            <ChannelZapper />
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS GRID */}
      <section className="py-24 bg-stone-900/30 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Get Started in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">Choose Your Plan</h3>
              <p className="text-stone-400">Select a subscription that fits your needs. Our 12-month plan offers the best value.</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">Get Access Instantly</h3>
              <p className="text-stone-400">Receive your login credentials via email immediately after secure checkout.</p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">Start Watching</h3>
              <p className="text-stone-400">Log in on your favorite device and enjoy unlimited entertainment in 4K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVICE COMPATIBILITY */}
      <section className="py-24 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Works on All Your Devices</h2>
        <Tabs defaultValue="tv" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-stone-900">
            <TabsTrigger value="tv" className="data-[state=active]:bg-stone-800"><Tv className="w-4 h-4 mr-2 hidden sm:block"/> Smart TVs</TabsTrigger>
            <TabsTrigger value="apple" className="data-[state=active]:bg-stone-800"><MonitorPlay className="w-4 h-4 mr-2 hidden sm:block"/> Apple</TabsTrigger>
            <TabsTrigger value="android" className="data-[state=active]:bg-stone-800"><Smartphone className="w-4 h-4 mr-2 hidden sm:block"/> Android/Fire</TabsTrigger>
            <TabsTrigger value="pc" className="data-[state=active]:bg-stone-800">PC/Mac</TabsTrigger>
          </TabsList>
          <TabsContent value="tv" className="mt-8 p-6 bg-stone-900 border border-stone-800 rounded-xl text-left">
            <h3 className="text-xl font-bold mb-2">Smart TV Setup</h3>
            <p className="text-stone-400">Download apps like Smarters Pro, Tivimate, or IBO Player directly from your Samsung or LG app store. Enter your credentials and start watching.</p>
          </TabsContent>
          <TabsContent value="apple" className="mt-8 p-6 bg-stone-900 border border-stone-800 rounded-xl text-left">
            <h3 className="text-xl font-bold mb-2">Apple Devices (iOS & tvOS)</h3>
            <p className="text-stone-400">Fully compatible with Apple TV, iPhone, and iPad. We recommend using our custom app or popular players like GSE Smart IPTV.</p>
          </TabsContent>
          <TabsContent value="android" className="mt-8 p-6 bg-stone-900 border border-stone-800 rounded-xl text-left">
            <h3 className="text-xl font-bold mb-2">Android & Firestick</h3>
            <p className="text-stone-400">The best experience! Sideload our APK onto your Amazon Firestick or download from the Google Play Store on your Android TV.</p>
          </TabsContent>
          <TabsContent value="pc" className="mt-8 p-6 bg-stone-900 border border-stone-800 rounded-xl text-left">
            <h3 className="text-xl font-bold mb-2">Web Browser & Desktop</h3>
            <p className="text-stone-400">Watch directly in your browser using our Web Player, or download VLC for Windows and Mac for advanced playback.</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-stone-900/30 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Switch to Us?</h2>
          <div className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden">
            <Table>
              <TableHeader className="bg-stone-900">
                <TableRow className="border-stone-800 hover:bg-stone-900">
                  <TableHead className="w-[300px] text-stone-200">Feature</TableHead>
                  <TableHead className="text-center font-bold text-iptv-green text-lg">IPTV Startup</TableHead>
                  <TableHead className="text-center text-stone-400">Traditional Cable</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-stone-800">
                  <TableCell className="font-medium text-stone-300">Live Channels</TableCell>
                  <TableCell className="text-center"><Check className="mx-auto text-iptv-green" /></TableCell>
                  <TableCell className="text-center text-stone-500">Limited</TableCell>
                </TableRow>
                <TableRow className="border-stone-800">
                  <TableCell className="font-medium text-stone-300">PPV & Live Sports</TableCell>
                  <TableCell className="text-center"><Check className="mx-auto text-iptv-green" /></TableCell>
                  <TableCell className="text-center"><X className="mx-auto text-red-500" /></TableCell>
                </TableRow>
                <TableRow className="border-stone-800">
                  <TableCell className="font-medium text-stone-300">Multi-Device Support</TableCell>
                  <TableCell className="text-center"><Check className="mx-auto text-iptv-green" /></TableCell>
                  <TableCell className="text-center"><X className="mx-auto text-red-500" /></TableCell>
                </TableRow>
                <TableRow className="border-stone-800">
                  <TableCell className="font-medium text-stone-300">No Contracts</TableCell>
                  <TableCell className="text-center"><Check className="mx-auto text-iptv-green" /></TableCell>
                  <TableCell className="text-center"><X className="mx-auto text-red-500" /></TableCell>
                </TableRow>
                <TableRow className="border-stone-800">
                  <TableCell className="font-medium text-stone-300">Monthly Price</TableCell>
                  <TableCell className="text-center text-iptv-green font-bold">~$9.99</TableCell>
                  <TableCell className="text-center text-red-500">$80.00+</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Simple, Transparent Pricing</h2>
        <p className="text-stone-400 text-center mb-16 max-w-2xl mx-auto">Get access to everything. Choose the duration that works best for you.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* 1 Month */}
          <Card className="bg-stone-900 border-stone-800 text-stone-50 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">1 Month</CardTitle>
              <div className="text-4xl font-bold mt-4">$14.99</div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 mb-8 text-stone-400 flex-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> 4K/FHD Quality</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Anti-Freeze Tech</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Catch-Up & EPG</li>
              </ul>
              <Link href="/get-started" className={buttonVariants({ variant: "outline", className: "w-full border-stone-700 hover:bg-stone-800 text-stone-100" })}>
                Choose Plan
              </Link>
            </CardContent>
          </Card>

          {/* 3 Months */}
          <Card className="bg-stone-900 border-stone-800 text-stone-50 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">3 Months</CardTitle>
              <div className="text-4xl font-bold mt-4">$34.99</div>
              <div className="text-sm text-stone-500 line-through">$44.97</div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 mb-8 text-stone-400 flex-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> 4K/FHD Quality</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Anti-Freeze Tech</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Catch-Up & EPG</li>
              </ul>
              <Link href="/get-started" className={buttonVariants({ variant: "outline", className: "w-full border-stone-700 hover:bg-stone-800 text-stone-100" })}>
                Choose Plan
              </Link>
            </CardContent>
          </Card>

          {/* 6 Months */}
          <Card className="bg-stone-900 border-stone-800 text-stone-50 flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">6 Months</CardTitle>
              <div className="text-4xl font-bold mt-4">$49.99</div>
              <div className="text-sm text-stone-500 line-through">$89.94</div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 mb-8 text-stone-400 flex-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> 4K/FHD Quality</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Anti-Freeze Tech</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Catch-Up & EPG</li>
              </ul>
              <Link href="/get-started" className={buttonVariants({ variant: "outline", className: "w-full border-stone-700 hover:bg-stone-800 text-stone-100" })}>
                Choose Plan
              </Link>
            </CardContent>
          </Card>

          {/* 12 Months (Most Popular) */}
          <Card className="bg-stone-800 border-blue-500 text-stone-50 flex flex-col relative shadow-xl shadow-blue-900/20 scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap">
              Most Popular / Save 57%
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">12 Months</CardTitle>
              <div className="text-4xl font-bold mt-4">$59.99</div>
              <div className="text-sm text-stone-400 line-through">$179.88</div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="space-y-3 mb-8 text-stone-300 flex-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> 4K/FHD Quality</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Anti-Freeze Tech</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> Catch-Up & EPG</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-iptv-green"/> 2 Simultaneous Connections</li>
              </ul>
              <Link href="/get-started" className={buttonVariants({ className: "w-full bg-iptv-green hover:bg-iptv-green/90 text-stone-950 font-bold text-lg h-12" })}>
                Choose Plan
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}