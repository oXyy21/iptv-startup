import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-iptv-startup.com"),
  title: {
    default: "IPTV Startup",
    template: "%s | IPTV Startup",
  },
  description: "The best IPTV streaming service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IPTV Startup",
    url: "https://your-iptv-startup.com",
    logo: "https://your-iptv-startup.com/favicon.ico",
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Toaster theme="dark" richColors />
        
        {/* GLOBAL HEADER */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-1">
              <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="w-8 h-8 bg-lime-500 rounded-md flex items-center justify-center text-slate-950">📺</span>
                IPTV Startup
              </Link>
            </div>

            {/* Middle: Links */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>

            {/* Right: Buttons */}
            <div className="flex-1 flex items-center justify-end gap-4">
              <Link href="/checkout" className={buttonVariants({ className: "bg-lime-500 text-slate-950 hover:bg-lime-600 font-bold" })}>
                Start Free Trial
              </Link>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Col 1: Brand */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">IPTV Startup</h4>
              <p className="text-sm mb-4">The ultimate 4K streaming experience across all your devices.</p>
              <address className="not-italic text-sm">
                123 Streaming Way<br />
                Tech District, Suite 400<br />
                New York, NY 10001
              </address>
            </div>

            {/* Col 2: Products */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:text-lime-500 transition-colors">1-Month Package</Link></li>
                <li><Link href="/pricing" className="hover:text-lime-500 transition-colors">3-Month Package</Link></li>
                <li><Link href="/pricing" className="hover:text-lime-500 transition-colors">6-Month Package</Link></li>
                <li><Link href="/pricing" className="hover:text-lime-500 transition-colors">12-Month Package</Link></li>
              </ul>
            </div>

            {/* Col 3: Trust Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Legal & Trust</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/legal" className="hover:text-lime-500 transition-colors">Terms of Service</Link></li>
                <li><Link href="/legal" className="hover:text-lime-500 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/licenses" className="hover:text-lime-500 transition-colors">Licenses & Compliance</Link></li>
              </ul>
            </div>

            {/* Col 4: Network Status */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Network Status</h4>
              <div className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-md">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                </span>
                <span className="text-sm font-bold text-white">All Systems Operational</span>
              </div>
              <p className="text-xs mt-3 text-slate-500">99.9% Uptime SLA Guaranteed.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
