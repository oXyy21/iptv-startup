import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | IPTV Startup",
  description: "Our privacy policy and data handling practices.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-stone dark:prose-invert lg:prose-xl">
        <p>Last updated: October 2023</p>
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect about you to provide, maintain, and improve our services, including to process transactions, send related information, provide customer support, and send you technical notices.</p>
        
        <h2>3. Data Security</h2>
        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
      </div>
    </div>
  )
}
