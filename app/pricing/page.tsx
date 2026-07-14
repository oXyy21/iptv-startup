import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing Plans | IPTV Startup",
  description: "Choose the perfect IPTV package for your needs.",
}

export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Get access to every channel, every movie, and every live sports event. Choose the duration that works best for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* 1 Month */}
        <Card className="bg-slate-900 border-slate-800 text-white flex flex-col p-6">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold">1 Month</CardTitle>
            <div className="text-4xl font-extrabold mt-4">$14.99</div>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 text-slate-300 flex-1">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 4K/FHD Quality</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> Anti-Freeze Tech</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 1 Connection</li>
            </ul>
            <Link href="/checkout?plan=1m" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full text-lg font-bold" })}>
              Choose 1 Month
            </Link>
          </CardContent>
        </Card>

        {/* 3 Months */}
        <Card className="bg-slate-900 border-slate-800 text-white flex flex-col p-6">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold">3 Months</CardTitle>
            <div className="text-4xl font-extrabold mt-4">$34.99</div>
            <div className="text-sm text-slate-500 line-through">$44.97</div>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 text-slate-300 flex-1">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 4K/FHD Quality</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> Anti-Freeze Tech</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 1 Connection</li>
            </ul>
            <Link href="/checkout?plan=3m" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full text-lg font-bold" })}>
              Choose 3 Months
            </Link>
          </CardContent>
        </Card>

        {/* 6 Months */}
        <Card className="bg-slate-900 border-slate-800 text-white flex flex-col p-6">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold">6 Months</CardTitle>
            <div className="text-4xl font-extrabold mt-4">$49.99</div>
            <div className="text-sm text-slate-500 line-through">$89.94</div>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 text-slate-300 flex-1">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 4K/FHD Quality</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> Anti-Freeze Tech</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 1 Connection</li>
            </ul>
            <Link href="/checkout?plan=6m" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full text-lg font-bold" })}>
              Choose 6 Months
            </Link>
          </CardContent>
        </Card>

        {/* 12 Months (Most Popular) */}
        <Card className="bg-slate-800 border-lime-500 text-white flex flex-col p-6 relative shadow-2xl shadow-lime-900/20 scale-105 z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-500 text-slate-950 px-4 py-1 rounded-full text-sm font-extrabold uppercase tracking-wide whitespace-nowrap">
            Best Value - Save 57%
          </div>
          <CardHeader className="p-0 mb-6 mt-2">
            <CardTitle className="text-2xl font-bold">12 Months</CardTitle>
            <div className="text-4xl font-extrabold mt-4">$59.99</div>
            <div className="text-sm text-slate-400 line-through">$179.88</div>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <ul className="space-y-4 mb-8 text-slate-200 flex-1">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 4K/FHD Quality</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> Anti-Freeze Tech</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> 2 Connections</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-lime-500"/> Priority Support</li>
            </ul>
            <Link href="/checkout?plan=12m" className={buttonVariants({ size: "lg", className: "w-full text-lg font-bold" })}>
              Choose 12 Months
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
