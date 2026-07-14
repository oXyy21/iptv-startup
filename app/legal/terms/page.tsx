import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | IPTV Startup",
  description: "Terms and conditions for using our IPTV services.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-stone dark:prose-invert lg:prose-xl">
        <p>Last updated: October 2023</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
        
        <h2>2. Service Usage</h2>
        <p>You agree to use the service only for lawful purposes. You are strictly prohibited from sharing your account credentials, attempting to bypass geographic restrictions illegally, or redistributing our streams.</p>
        
        <h2>3. Refunds and Cancellations</h2>
        <p>We offer a 7-day money-back guarantee for all new subscriptions. You may cancel your subscription at any time through your account dashboard.</p>
      </div>
    </div>
  )
}
