import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | IPTV Startup",
  description: "Learn about our team, our mission, and our credentials.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 text-white">About Us</h1>
      <div className="prose prose-invert lg:prose-xl">
        <p className="text-slate-300">
          Founded by a team of streaming architects and network engineers, IPTV Startup was built to solve the industry's biggest problem: unreliable feeds.
        </p>
        
        <h2 className="text-white mt-12 mb-4 text-2xl font-bold">Our Mission</h2>
        <p className="text-slate-300">
          We believe premium entertainment should be seamless. Our mission is to provide an uninterrupted, raw 4K viewing experience, ensuring that sports fans and cinephiles never miss a moment due to buffering or server lag.
        </p>

        <h2 className="text-white mt-12 mb-4 text-2xl font-bold">Our Credentials</h2>
        <ul className="text-slate-300 space-y-2">
          <li><strong>10+ Years Experience:</strong> Our core engineering team previously built global CDN infrastructures.</li>
          <li><strong>Tier-1 Server Network:</strong> We utilize dedicated bare-metal servers across North America and Europe.</li>
          <li><strong>24/7 Monitoring:</strong> Our NOC (Network Operations Center) is staffed around the clock to preemptively route traffic and prevent outages.</li>
        </ul>
      </div>
    </div>
  )
}
