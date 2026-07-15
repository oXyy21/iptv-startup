import { Metadata } from "next"
import PricingClient from "./pricing-client"
export const metadata: Metadata = {
  title: "Pricing Plans | IPTV Startup",
  description: "Choose the perfect IPTV package for your needs.",
}

export default function PricingPage() {
  return <PricingClient />
}
