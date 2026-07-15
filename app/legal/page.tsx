import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Information | IPTV Startup",
  description: "Privacy Policy and Terms of Service.",
}

export default function LegalPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-12 text-white">Legal Information</h1>
      
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-[#22D3EE] mb-6 border-b border-slate-800 pb-2">Terms of Service</h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p><strong>Last Updated: October 2023</strong></p>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not use our service.</p>
            <h3>2. Use License</h3>
            <p>You are granted a limited, non-exclusive license to use the service for personal, non-commercial entertainment. You may not restream, share accounts, or reverse-engineer our platform.</p>
            <h3>3. Refunds</h3>
            <p>We offer a strict 7-day money-back guarantee for all new subscriptions. Setup fees (if applicable) are non-refundable.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#22D3EE] mb-6 border-b border-slate-800 pb-2">Privacy Policy</h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p><strong>Last Updated: October 2023</strong></p>
            <h3>1. Data Collection</h3>
            <p>We collect minimal data necessary to provide you with our service. This includes your email address, device type, and basic connection logs to prevent account sharing.</p>
            <h3>2. Data Usage</h3>
            <p>Your information is used strictly for account management, customer support, and essential service communications. We never sell your data to third parties.</p>
            <h3>3. Data Protection</h3>
            <p>We implement robust security protocols, including data anonymization and strict access controls, to ensure your personal information remains confidential.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
