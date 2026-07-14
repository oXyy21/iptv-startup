import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Licenses & Compliance | IPTV Startup",
  description: "View our certifications, security compliances, and licensing information.",
}

export default function LicensesPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 text-white">Licenses & Compliance</h1>
      <p className="text-lg text-slate-400 mb-12">
        We take security, privacy, and industry compliance seriously. Below are our active certifications and operational policies.
      </p>

      <div className="space-y-12 text-slate-300">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Payment Security (PCI-DSS)</h2>
          <p>
            All payment processing is handled by Level 1 PCI-DSS compliant payment gateways. We do not store, process, or transmit your credit card data on our servers. Your transactions are fully encrypted end-to-end.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">SSL & Data Encryption</h2>
          <p>
            Our entire infrastructure utilizes enterprise-grade 256-bit TLS/SSL encryption. Your account details, streaming credentials, and personal information are secured against unauthorized access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">DMCA Compliance</h2>
          <p>
            We respect the intellectual property rights of others. We comply with the Digital Millennium Copyright Act (DMCA) and act promptly on legitimate takedown notices. If you are a copyright owner, please direct your formal notices to our designated legal department.
          </p>
        </section>
      </div>
    </div>
  )
}
