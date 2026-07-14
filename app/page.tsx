import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Best 4K IPTV Subscription for Sports Fans",
  description: "Looking for the best 4K IPTV subscription for sports fans? Enjoy reliable streaming, no buffering, and live events on any device.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh items-center justify-center p-8 text-center gap-6">
      <h1 className="text-4xl font-bold">Best 4K IPTV Subscription for Sports Fans</h1>
      <p className="text-lg max-w-2xl text-muted-foreground">
        If you are searching for the <strong>best 4K IPTV subscription for sports fans</strong>, you have come to the right place. We offer reliable, buffer-free streaming of your favorite live events on any device.
      </p>
      <Button size="lg">Start Your Free Trial</Button>
    </div>
  )
}