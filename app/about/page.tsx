import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | IPTV Startup",
  description: "Learn more about our team and our commitment to providing the best IPTV streaming experience.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About IPTV Startup</h1>
      <div className="prose prose-stone dark:prose-invert lg:prose-xl">
        <p>
          Founded in 2024, IPTV Startup was built with one clear mission: to revolutionize how you watch television. We believe that premium entertainment should be accessible, reliable, and free from the constraints of traditional cable contracts.
        </p>
        
        <h2>Our Team</h2>
        <p>
          Our team consists of passionate engineers and entertainment enthusiasts dedicated to maintaining 99.9% uptime and delivering the highest quality 4K streams available. We are real people working around the clock to ensure your game, movie, or news broadcast never buffers.
        </p>

        <h2>Our Commitment</h2>
        <p>
          We stand by our service. With 24/7 customer support and a robust, globally distributed server network, we are committed to providing an unparalleled viewing experience.
        </p>
      </div>
    </div>
  )
}
