import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Support | IPTV Startup",
  description: "Get in touch with our 24/7 support team.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-5xl">
      <h1 className="text-4xl font-extrabold mb-4 text-white">Contact Us</h1>
      <p className="text-lg text-slate-400 mb-12 max-w-2xl">
        Whether you have a technical question, billing inquiry, or just want to say hi, our team is standing by to assist you.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Details */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Support Hours</h3>
            <p className="text-slate-300">
              Technical Support: <span className="text-[#22D3EE] font-bold">24/7/365</span><br />
              Billing & Sales: Mon-Fri, 9am - 5pm EST
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Direct Contact</h3>
            <p className="text-slate-300">
              Email: support@iptvstartup.com<br />
              Phone: +1 (800) 555-0199
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Corporate Headquarters</h3>
            <address className="not-italic text-slate-300">
              IPTV Startup LLC<br />
              123 Streaming Way<br />
              Tech District, Suite 400<br />
              New York, NY 10001<br />
              United States
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}
