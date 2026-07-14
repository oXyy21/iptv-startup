import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Us | IPTV Startup",
  description: "Get in touch with our 24/7 support team.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Need help setting up? Have a question about your subscription? Our team is here 24/7.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <strong>Email:</strong> support@your-iptv-startup.com
            </div>
            <div>
              <strong>Phone:</strong> 1-800-555-0199
            </div>
            <div>
              <strong>Headquarters:</strong>
              <address className="not-italic text-muted-foreground mt-1">
                123 Streaming Way<br />
                Tech District, Suite 400<br />
                New York, NY 10001<br />
                United States
              </address>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-xl">
          <h3 className="text-xl font-medium mb-4">Send us a message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full p-2 rounded-md border bg-background" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 rounded-md border bg-background" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full p-2 rounded-md border bg-background h-32" placeholder="How can we help?"></textarea>
            </div>
            <Button className="w-full bg-iptv-green hover:bg-iptv-green/90 text-stone-950 font-semibold">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
