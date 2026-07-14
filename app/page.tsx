import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the best IPTV Startup service.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}