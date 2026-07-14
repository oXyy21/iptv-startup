import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Get Started | IPTV Startup",
  description: "Choose your plan and start watching premium IPTV today.",
}

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
      <h1 className="text-4xl font-bold mb-4">Complete Your Order</h1>
      <p className="text-lg text-muted-foreground mb-12">
        You are one step away from 25,000+ channels and 100,000+ VODs.
      </p>

      <div className="bg-card border rounded-xl p-8 text-left shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Checkout Summary</h2>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between border-b pb-4">
            <span>Premium 12-Month Plan</span>
            <span className="font-semibold">$59.99</span>
          </div>
          <div className="flex justify-between border-b pb-4">
            <span>Setup Fee</span>
            <span className="font-semibold">$0.00</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-iptv-green">$59.99</span>
          </div>
        </div>

        <Button className="w-full h-14 text-lg bg-iptv-green hover:bg-iptv-green/90 text-stone-950 font-bold">
          Proceed to Payment Securely
        </Button>
        <p className="text-sm text-center text-muted-foreground mt-4">
          Encrypted and secure checkout. 7-day money-back guarantee.
        </p>
      </div>
    </div>
  )
}
