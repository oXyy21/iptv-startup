"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tv, Film, Newspaper, Play, ChevronLeft, ChevronRight } from "lucide-react"

const channels = [
  { id: 1, name: "Live Sports HD", category: "Sports", icon: Tv, color: "bg-blue-600" },
  { id: 2, name: "Cinema Premiere", category: "Movies", icon: Film, color: "bg-purple-600" },
  { id: 3, name: "Global News 24/7", category: "News", icon: Newspaper, color: "bg-red-600" },
  { id: 4, name: "Fight Network", category: "Sports", icon: Tv, color: "bg-orange-600" },
]

export default function ChannelZapper() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const currentChannel = channels[currentIdx]

  const nextChannel = () => {
    setCurrentIdx((prev) => (prev + 1) % channels.length)
  }

  const prevChannel = () => {
    setCurrentIdx((prev) => (prev - 1 + channels.length) % channels.length)
  }

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* TV Screen */}
      <div className={`aspect-video w-full ${currentChannel.color} flex flex-col items-center justify-center text-white relative transition-colors duration-500`}>
        <div className="absolute top-4 right-4 bg-red-500 px-2 py-1 rounded text-xs font-bold animate-pulse">
          LIVE
        </div>
        <currentChannel.icon className="w-16 h-16 mb-4 opacity-80" />
        <h3 className="text-2xl font-bold">{currentChannel.name}</h3>
        <p className="text-stone-200">{currentChannel.category}</p>
        
        {/* Fake play UI overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 bg-black/40 p-2 rounded-lg backdrop-blur-sm">
          <Play className="w-5 h-5" />
          <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-iptv-green w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Remote Control Panel */}
      <div className="bg-stone-950 p-6 flex flex-col items-center justify-center gap-4 border-t border-stone-800">
        <p className="text-sm text-stone-400 font-mono">Live Channel Zapper</p>
        <div className="flex items-center gap-6">
          <Button variant="outline" size="icon" onClick={prevChannel} className="rounded-full h-12 w-12 border-stone-700 hover:bg-stone-800">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="text-center w-24">
            <div className="text-2xl font-bold text-iptv-green">CH {currentChannel.id}</div>
          </div>
          <Button variant="outline" size="icon" onClick={nextChannel} className="rounded-full h-12 w-12 border-stone-700 hover:bg-stone-800">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
