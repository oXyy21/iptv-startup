"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, MonitorPlay, Zap, Check, PlayCircle, Tv, Smartphone, Tablet, Laptop, Star, Clock, Globe, ArrowRight, Play, Film, Radio, Trophy, Baby } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import CountUp from "react-countup"

const posters = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400&h=600",
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=400&h=600",
  "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=400&h=600",
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&q=80&w=400&h=600",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=400&h=600",
]

const categories = [
  { name: "Movies", icon: <Film className="w-5 h-5" /> },
  { name: "TV Shows", icon: <Tv className="w-5 h-5" /> },
  { name: "Live TV", icon: <Radio className="w-5 h-5" /> },
  { name: "Sports", icon: <Trophy className="w-5 h-5" /> },
  { name: "Kids", icon: <Baby className="w-5 h-5" /> },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState(categories[0].name)

  useEffect(() => setMounted(true), [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className="flex flex-col bg-[#060816] text-white flex-1 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 text-center border-b border-white/5 overflow-hidden">
        {/* Cinematic Aurora Lighting Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#7C3AED]/20 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#22D3EE]/20 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060816]/80 to-[#060816] z-10"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center mb-32 md:mb-56">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
            <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Next-Gen Streaming Experience</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-white">
              The Future of <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">Entertainment.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-2xl text-slate-400 mb-10 max-w-3xl leading-relaxed font-light">
              Elevate your viewing with cinematic 4K quality, instant access to global channels, and a seamless multi-device experience designed for true enthusiasts.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/checkout" className="group relative px-8 py-4 bg-white text-[#060816] rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_#7C3AED]">
                <span className="relative z-10 flex items-center gap-2">Start Your Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              <Link href="#pricing" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Devices/Posters (Decorative) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-20 md:-bottom-32 left-0 right-0 z-10 flex justify-center opacity-40 md:opacity-100 pointer-events-none"
        >
          <div className="relative w-full max-w-6xl h-64 md:h-96 [mask-image:linear-gradient(to_bottom,white,transparent)] flex justify-center gap-6">
             {posters.map((poster, i) => (
                <motion.img 
                  key={i} 
                  src={poster} 
                  alt="Poster" 
                  className="w-48 h-72 md:w-64 md:h-96 object-cover rounded-2xl shadow-2xl border border-white/10"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: i * 0.5, ease: "easeInOut" }}
                  style={{ transform: `rotate(${i % 2 === 0 ? 5 : -5}deg) translateY(${i * 20}px)` }}
                />
             ))}
          </div>
        </motion.div>
      </section>

      {/* 2. STATISTICS */}
      <section className="py-16 border-b border-white/5 bg-[#0D1324]/50 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                {mounted ? <CountUp end={25} duration={2.5} /> : '25'}K+
              </span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm flex items-center gap-2"><Tv className="w-4 h-4"/> Channels</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                {mounted ? <CountUp end={100} duration={2.5} /> : '100'}K+
              </span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm flex items-center gap-2"><Film className="w-4 h-4"/> VODs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                {mounted ? <CountUp end={99} duration={2.5} decimals={1} /> : '99.9'}%
              </span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm flex items-center gap-2"><Clock className="w-4 h-4"/> Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                {mounted ? <CountUp end={195} duration={2.5} /> : '195'}
              </span>
              <span className="text-slate-400 font-medium uppercase tracking-wider text-sm flex items-center gap-2"><Globe className="w-4 h-4"/> Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ENTERTAINMENT */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Endless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#7C3AED]">Entertainment</span></h2>
              <p className="text-slate-400 text-lg max-w-2xl">Discover blockbuster movies, binge-worthy series, live sports, and premium networks all in one place.</p>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(cat => (
                <button 
                  key={cat.name} 
                  onClick={() => setActiveTab(cat.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap font-medium transition-all ${activeTab === cat.name ? 'bg-white text-[#060816] shadow-lg' : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'}`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-6 px-6">
            {posters.map((poster, i) => (
              <motion.div 
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative min-w-[200px] md:min-w-[280px] aspect-[2/3] rounded-2xl overflow-hidden group snap-center cursor-pointer border border-white/5 bg-[#0D1324]"
              >
                <img src={poster} alt="Content Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060816] via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section id="features" className="py-24 px-6 bg-[#0D1324] relative border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#7C3AED]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why We're <span className="text-[#FF7A59]">Different</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Engineered for quality, designed for luxury. Experience the premium standard of IPTV.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8 text-[#22D3EE]" />, title: "Instant Zapping", desc: "Change channels in less than 0.5 seconds with our globally optimized CDN architecture." },
              { icon: <MonitorPlay className="w-8 h-8 text-[#7C3AED]" />, title: "Raw 4K & HDR", desc: "No compression. No artifacts. Watch your favorite content exactly as the directors intended." },
              { icon: <ShieldCheck className="w-8 h-8 text-[#FF7A59]" />, title: "Anti-Freeze Tech", desc: "Our intelligent load balancing ensures a buffer-free experience even during major live events." },
              { icon: <Tv className="w-8 h-8 text-[#22D3EE]" />, title: "EPG Guide Included", desc: "Browse a fully integrated and constantly updated TV guide to always know what's playing." },
              { icon: <Globe className="w-8 h-8 text-[#7C3AED]" />, title: "No Geoblocking", desc: "Enjoy your subscription anywhere in the world. Fully compatible with all premium VPNs." },
              { icon: <Clock className="w-8 h-8 text-[#FF7A59]" />, title: "7-Day Catchup", desc: "Missed the game or your favorite show? Rewind up to 7 days on over 5,000 top channels." },
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEVICE COMPATIBILITY */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">One Subscription.<br/>Every <span className="text-[#22D3EE]">Screen.</span></h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whether you're lounging in the living room or commuting on the train, your entertainment follows you. Seamlessly transition between devices with synchronized watch history.
              </p>
              <ul className="space-y-4 mb-10 max-w-md mx-auto lg:mx-0 text-left">
                {['Smart TVs (Samsung, LG, Android TV)', 'Apple TV & Amazon Fire Stick', 'iOS & Android Smartphones', 'Windows, Mac & Linux Desktop'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]">
                      <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/setup" className="inline-flex items-center gap-2 text-[#22D3EE] font-bold hover:text-white transition-colors">
                View Setup Guides <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 relative w-full h-[500px]">
              {/* Abstract Device Composition */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-video bg-[#0D1324] border-4 border-slate-800 rounded-xl overflow-hidden shadow-2xl z-10">
                 <img src={posters[0]} className="w-full h-full object-cover opacity-60" alt="TV Interface" />
                 <div className="absolute inset-0 flex items-center justify-center"><PlayCircle className="w-16 h-16 text-white/80" /></div>
              </div>
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-10 left-0 w-32 h-64 bg-[#060816] border-4 border-slate-800 rounded-3xl overflow-hidden shadow-xl z-20">
                 <img src={posters[1]} className="w-full h-full object-cover opacity-80" alt="Mobile Interface" />
              </motion.div>
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute top-10 right-10 w-48 h-64 bg-[#121A2E] border-4 border-slate-800 rounded-2xl overflow-hidden shadow-xl z-0">
                 <img src={posters[2]} className="w-full h-full object-cover opacity-50" alt="Tablet Interface" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="py-24 px-6 bg-[#0D1324] border-t border-b border-white/5 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Simple, Transparent <span className="text-[#7C3AED]">Pricing</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">No hidden fees. No long-term contracts. Cancel anytime.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <motion.div whileHover={{ y: -10 }} className="bg-[#060816] border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden">
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
            <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-b from-[#7C3AED]/20 to-[#060816] border border-[#7C3AED]/50 rounded-3xl p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_50px_-15px_#7C3AED]">
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
            <motion.div whileHover={{ y: -10 }} className="bg-[#060816] border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden">
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

      {/* 7. TESTIMONIALS */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Loved by <span className="text-[#FF7A59]">Thousands</span></h2>
            <div className="flex items-center justify-center gap-2 mb-4">
               {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 fill-[#FF7A59] text-[#FF7A59]" />)}
            </div>
            <p className="text-slate-400 text-lg">Rated 4.9/5 from over 10,000 active users.</p>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
            {[
              { name: "Michael R.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100", text: "Finally an IPTV service that doesn't buffer during the Super Bowl. The 4K quality is genuinely impressive and the VOD section is huge." },
              { name: "Sarah L.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100", text: "Setup was incredibly easy on my Apple TV. The interface is gorgeous and it feels just like a premium streaming app." },
              { name: "David K.", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100", text: "Switched from a different provider and the difference is night and day. Customer support actually responds in minutes." },
              { name: "Emma T.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100", text: "The catch-up feature is a lifesaver for UK shows when you live in a different timezone. Flawless streaming." },
            ].map((review, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-[#FF7A59] text-[#FF7A59]" />)}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 px-6 bg-[#0D1324] border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Frequent Questions</h2>
            <p className="text-slate-400 text-lg">Everything you need to know about the service.</p>
          </div>

          <Accordion className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-[#060816] border border-white/5 rounded-2xl px-6 border-b-0 overflow-hidden">
              <AccordionTrigger className="text-lg font-bold text-white hover:text-[#22D3EE] hover:no-underline py-6">What devices do you support?</AccordionTrigger>
              <AccordionContent className="text-slate-400 text-base pb-6 leading-relaxed">
                We support almost every modern device including Smart TVs (Samsung, LG, Android TV), Apple TV, Amazon Fire Stick/TV, Android Boxes, iOS/Android Smartphones, and Windows/Mac computers. Detailed setup guides are provided for all devices upon purchase.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-[#060816] border border-white/5 rounded-2xl px-6 border-b-0 overflow-hidden">
              <AccordionTrigger className="text-lg font-bold text-white hover:text-[#22D3EE] hover:no-underline py-6">Do I need a VPN?</AccordionTrigger>
              <AccordionContent className="text-slate-400 text-base pb-6 leading-relaxed">
                While a VPN is not strictly required, we highly recommend using one to prevent your ISP from throttling your connection during peak hours or live events. Our service is fully compatible with all major VPNs like ExpressVPN, NordVPN, and Surfshark.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-[#060816] border border-white/5 rounded-2xl px-6 border-b-0 overflow-hidden">
              <AccordionTrigger className="text-lg font-bold text-white hover:text-[#22D3EE] hover:no-underline py-6">Is there a money-back guarantee?</AccordionTrigger>
              <AccordionContent className="text-slate-400 text-base pb-6 leading-relaxed">
                Yes, we offer a 7-day money-back guarantee on all our plans. If you experience technical issues that our support team cannot resolve, we will issue a full refund, no questions asked.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[#7C3AED]/20 blur-[150px] mix-blend-screen rounded-t-full pointer-events-none"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 md:p-20 text-center backdrop-blur-xl shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
              Ready to Upgrade?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Join the luxury streaming revolution today. No buffering, no contracts, just pure premium entertainment.
            </p>
            
            <Link href="/checkout?plan=1m" className="inline-block px-12 py-5 bg-white text-[#060816] rounded-2xl font-extrabold text-xl hover:scale-105 transition-transform shadow-[0_0_50px_-10px_white]">
              Start Streaming Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}