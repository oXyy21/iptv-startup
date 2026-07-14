import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Secure Checkout | IPTV Startup",
  description: "Complete your order securely.",
}

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CheckoutPage({ searchParams }: Props) {
  const params = await searchParams;
  const plan = (params.plan as string) || "12m";

  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-white">Secure Checkout</h1>
        <p className="text-lg text-slate-400">Complete your details below to get instant access.</p>
      </div>

      <Card className="bg-slate-900 border-slate-800 text-white">
        <CardContent className="p-8">
          <form className="space-y-8">
            {/* Account Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-lime-500">1. Account Details</h2>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Email Address (For login delivery)</label>
                <Input type="email" required className="bg-slate-950 border-slate-800 h-12" placeholder="your@email.com" />
              </div>
            </div>

            {/* Device Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-lime-500">2. Device Information</h2>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">What device will you use?</label>
                <select className="flex h-12 w-full items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                  <option value="">Select your device...</option>
                  <option value="smart-tv">Smart TV (Samsung/LG)</option>
                  <option value="android">Android Box / Firestick</option>
                  <option value="apple">Apple TV / iOS</option>
                  <option value="pc">PC / Web Browser</option>
                  <option value="mag">MAG Box</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-lime-500">3. Select Package</h2>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Subscription Plan</label>
                <select defaultValue={plan} className="flex h-12 w-full items-center justify-between rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                  <option value="12m">12 Months Premium - $59.99 (Best Value)</option>
                  <option value="6m">6 Months Premium - $49.99</option>
                  <option value="3m">3 Months Premium - $34.99</option>
                  <option value="1m">1 Month Premium - $14.99</option>
                </select>
              </div>
            </div>

            <Button type="button" size="lg" className="w-full h-14 text-lg font-bold">
              Proceed to Secure Payment
            </Button>
            <p className="text-center text-sm text-slate-500">
              Payments are 256-bit SSL encrypted. 7-day money back guarantee.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
