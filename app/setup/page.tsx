"use client"

import { useState } from "react"
import { Tv, Monitor, Smartphone, Laptop, Settings, CheckCircle2, ChevronRight, PlayCircle } from "lucide-react"

export default function SetupGuidePage() {
  const [activeDevice, setActiveDevice] = useState("firestick")

  const devices = [
    { id: "firestick", name: "Amazon Firestick", icon: <Tv className="w-5 h-5" /> },
    { id: "appletv", name: "Apple TV", icon: <Monitor className="w-5 h-5" /> },
    { id: "smarttv", name: "Smart TV (Samsung/LG)", icon: <Tv className="w-5 h-5" /> },
    { id: "android", name: "Android TV / Box", icon: <Smartphone className="w-5 h-5" /> },
    { id: "pc", name: "Windows / Mac", icon: <Laptop className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-[#060816] text-white pt-24 pb-24 px-6 flex-1 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#7C3AED]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">Installation <span className="text-[#22D3EE]">Guides</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Select your device below for step-by-step instructions on how to install and configure our premium IPTV service.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="md:w-1/3 flex-shrink-0">
            <div className="bg-[#0D1324] border border-white/5 rounded-2xl p-4 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-4 pt-2">Select Device</h3>
              <div className="space-y-2">
                {devices.map((device) => (
                  <button
                    key={device.id}
                    onClick={() => setActiveDevice(device.id)}
                    className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all font-medium ${
                      activeDevice === device.id 
                        ? "bg-[#22D3EE] text-[#060816] shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {device.icon}
                    <span className="flex-1">{device.name}</span>
                    {activeDevice === device.id && <ChevronRight className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:w-2/3">
            <div className="bg-[#0D1324] border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
              
              {activeDevice === "firestick" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#22D3EE]">
                      <Tv className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Amazon Firestick Setup</h2>
                      <p className="text-slate-400">Using the TiviMate IPTV Player (Recommended)</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#22D3EE] text-[#060816] flex items-center justify-center font-bold">1</div>
                        <div className="w-0.5 h-full bg-white/10 mt-2"></div>
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xl font-bold mb-2">Enable Unknown Sources</h4>
                        <p className="text-slate-300 mb-4">From the Firestick home screen, go to <strong>Settings {'>'} My Fire TV {'>'} Developer Options</strong>. Turn ON "Apps from Unknown Sources".</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#22D3EE] text-[#060816] flex items-center justify-center font-bold">2</div>
                        <div className="w-0.5 h-full bg-white/10 mt-2"></div>
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xl font-bold mb-2">Install the Downloader App</h4>
                        <p className="text-slate-300 mb-4">Go to the search bar on your Firestick home screen and search for "Downloader". Install and open the app.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#22D3EE] text-[#060816] flex items-center justify-center font-bold">3</div>
                        <div className="w-0.5 h-full bg-white/10 mt-2"></div>
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xl font-bold mb-2">Download TiviMate</h4>
                        <p className="text-slate-300 mb-4">In the Downloader app URL bar, type the official TiviMate shortcode: <strong className="text-[#22D3EE]">28907</strong> and click Go. Install the app when prompted.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#22D3EE] text-[#060816] flex items-center justify-center font-bold">4</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Login with Xtream Codes</h4>
                        <p className="text-slate-300 mb-4">Open TiviMate, select "Add Playlist", then select "Xtream Codes Login". Enter the Username, Password, and Server URL we emailed you after purchase.</p>
                        <div className="bg-[#060816] border border-white/5 rounded-xl p-4 flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#22D3EE] flex-shrink-0" />
                          <span className="text-sm text-slate-300">That's it! Allow a few minutes for the channels and TV guide to download, and you're ready to stream.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDevice === "appletv" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#22D3EE]">
                      <Monitor className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Apple TV Setup</h2>
                      <p className="text-slate-400">Using GSE Smart IPTV</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6">Setting up our service on Apple TV is incredibly simple because the best apps are directly available in the App Store.</p>
                  
                  <div className="space-y-6 text-slate-300">
                    <div className="p-4 bg-[#060816] rounded-xl border border-white/5">
                      <strong className="text-white block mb-1">Step 1: Download the App</strong>
                      Open the App Store on your Apple TV and search for "GSE Smart IPTV". Install the app.
                    </div>
                    <div className="p-4 bg-[#060816] rounded-xl border border-white/5">
                      <strong className="text-white block mb-1">Step 2: Add Playlist</strong>
                      Open the app, navigate to the left menu, and select "Xtream Codes API". Click the "+" icon in the top right corner.
                    </div>
                    <div className="p-4 bg-[#060816] rounded-xl border border-white/5">
                      <strong className="text-white block mb-1">Step 3: Enter Details</strong>
                      Name the playlist anything you want (e.g. "My IPTV"). Enter the Server URL, Username, and Password sent to your email. Click Add.
                    </div>
                    <div className="p-4 bg-[#060816] rounded-xl border border-white/5 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#22D3EE] flex-shrink-0" />
                      <span>Click on your newly created playlist and enjoy the ultimate streaming experience!</span>
                    </div>
                  </div>
                </div>
              )}

              {activeDevice === "smarttv" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#22D3EE]">
                      <Tv className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Smart TV Setup</h2>
                      <p className="text-slate-400">Samsung & LG WebOS (Using Smart IPTV)</p>
                    </div>
                  </div>
                  <div className="bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-xl p-4 mb-8">
                    <p className="text-sm text-[#22D3EE]">Note: The "Smart IPTV" app requires a one-time activation fee of ~5.49 EUR after a 7-day trial. This fee goes to the app developer, not to us.</p>
                  </div>
                  <ul className="space-y-4 list-decimal list-inside text-slate-300">
                    <li className="pl-2 pb-2 border-b border-white/5">Open your TV's App Store and search for <strong>Smart IPTV</strong>.</li>
                    <li className="pl-2 pb-2 border-b border-white/5">Install the app and open it. You will see a <strong>MAC Address</strong> displayed on the screen. Write this down.</li>
                    <li className="pl-2 pb-2 border-b border-white/5">On your phone or computer, visit <strong>siptv.app/mylist</strong>.</li>
                    <li className="pl-2 pb-2 border-b border-white/5">Enter your MAC address in the "MAC" field.</li>
                    <li className="pl-2 pb-2 border-b border-white/5">Paste your <strong>M3U Link</strong> (sent to your email) in the "URL" field and click "Send".</li>
                    <li className="pl-2 pb-2 border-b border-white/5">Restart the Smart IPTV app on your TV. The channels will now load.</li>
                  </ul>
                </div>
              )}

              {/* Android Box and PC can be similar placeholders */}
              {(activeDevice === "android" || activeDevice === "pc") && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center text-center py-12">
                  <div className="w-24 h-24 bg-[#060816] rounded-full flex items-center justify-center text-[#22D3EE] mb-6">
                    <PlayCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Fast & Easy Setup</h2>
                  <p className="text-slate-400 max-w-md mx-auto mb-8">Setting up on {activeDevice === "android" ? "Android" : "Windows/Mac"} takes less than 2 minutes. Simply use our custom app or VLC player and login with your Xtream credentials.</p>
                  <p className="text-sm text-slate-500">Check your welcome email for the direct download links tailored to your operating system.</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
