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
              <Link href="/" className="flex items-center gap-2 group">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
                <span className="text-xl font-extrabold text-white tracking-tight">IPTV<span className="text-lime-500">Startup</span></span>
              </Link>
            </div>

            {/* Middle: Links */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/setup" className="hover:text-white transition-colors">Setup Guide</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
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
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-extrabold text-white tracking-tight">IPTV<span className="text-lime-500">Startup</span></span>
              </Link>
              <p className="text-sm mb-4">The ultimate 4K streaming experience across all your devices.</p>
              <address className="not-italic text-sm">
                123 Streaming Way<br />
                Tech District, Suite 400<br />
                New York, NY 10001
              </address>
              <div className="flex gap-3 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
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
              <h4 className="text-white text-lg font-bold mb-4">Support & Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/setup" className="hover:text-lime-500 transition-colors">Setup & Installation</Link></li>
                <li><Link href="/contact" className="hover:text-lime-500 transition-colors">Contact Support</Link></li>
                <li><Link href="/legal" className="hover:text-lime-500 transition-colors">Terms of Service</Link></li>
                <li><Link href="/legal" className="hover:text-lime-500 transition-colors">Privacy Policy</Link></li>
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
