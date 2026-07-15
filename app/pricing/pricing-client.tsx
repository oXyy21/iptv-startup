"use client"
import Link from "next/link"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingClient() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="flex flex-col bg-[#060816] text-white flex-1 overflow-hidden min-h-[90vh] pt-24 pb-24 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#7C3AED]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      <section className="px-6 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Simple, Transparent <span className="text-[#7C3AED]">Pricing</span></h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">No hidden fees. No long-term contracts. Cancel anytime.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} whileHover={{ y: -10 }} className="bg-[#060816] border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden">
              <h3 className="text-xl font-medium text-slate-300 mb-2">1 Month</h3>
              <div className="mb-6"><span className="text-4xl font-bold text-white">$14.99</span><span className="text-slate-500">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-[#22D3EE]" /> All 25,000+ Channels</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-[#22D3EE]" /> 4K/FHD Quality</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-[#22D3EE]" /> 1 Device Connection</li>
                <li className="flex items-center gap-3 text-sm text-slate-500"><Check className="w-5 h-5 opacity-30" /> No Catch-up TV</li>
              </ul>
              <Link href="/checkout?plan=1m" className="w-full py-3 rounded-xl border border-white/10 font-bold text-center hover:bg-white/5 transition-colors">Select Plan</Link>
            </motion.div>

            {/* Premium Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -10 }} className="bg-gradient-to-b from-[#7C3AED]/20 to-[#060816] border border-[#7C3AED]/50 rounded-3xl p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_50px_-15px_#7C3AED]">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
              <h3 className="text-xl font-medium text-[#22D3EE] mb-2">6 Months</h3>
              <div className="mb-6"><span className="text-5xl font-bold text-white">$59.99</span><span className="text-slate-500">/6mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-white"><Check className="w-5 h-5 text-[#22D3EE]" /> All 25,000+ Channels</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check className="w-5 h-5 text-[#22D3EE]" /> 4K/FHD Quality</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check className="w-5 h-5 text-[#22D3EE]" /> 2 Device Connections</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check className="w-5 h-5 text-[#22D3EE]" /> 7-Day Catch-up TV</li>
                <li className="flex items-center gap-3 text-sm text-white"><Check className="w-5 h-5 text-[#22D3EE]" /> Premium 24/7 Support</li>
              </ul>
              <Link href="/checkout?plan=6m" className="w-full py-4 rounded-xl bg-white text-[#060816] font-bold text-center hover:scale-105 transition-transform shadow-lg">Select Premium</Link>
            </motion.div>

            {/* Annual Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ y: -10 }} className="bg-[#060816] border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden">
              <h3 className="text-xl font-medium text-slate-300 mb-2">12 Months</h3>
              <div className="mb-6"><span className="text-4xl font-bold text-white">$89.99</span><span className="text-slate-500">/yr</span></div>
              <p className="text-xs text-[#FF7A59] mb-4 font-medium uppercase tracking-wider">Save 50% vs Monthly</p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-[#22D3EE]" /> All 25,000+ Channels</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-[#22D3EE]" /> 4K/FHD Quality</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-[#22D3EE]" /> 3 Device Connections</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-[#22D3EE]" /> 7-Day Catch-up TV</li>
              </ul>
              <Link href="/checkout?plan=12m" className="w-full py-3 rounded-xl border border-white/10 font-bold text-center hover:bg-white/5 transition-colors">Select Plan</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
