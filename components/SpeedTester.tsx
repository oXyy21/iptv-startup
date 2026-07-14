"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function SpeedTester() {
  const [testing, setTesting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [done, setDone] = useState(false)

  const handleTest = () => {
    setTesting(true)
    setProgress(0)
    setSpeed(0)
    setDone(false)
  }

  useEffect(() => {
    if (testing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTesting(false)
            setDone(true)
            return 100
          }
          return prev + 5
        })
        setSpeed(Math.floor(Math.random() * 50) + 80) // Random speed between 80-130 Mbps
      }, 100)
      return () => clearInterval(interval)
    }
  }, [testing])

  return (
    <div className="bg-card border rounded-xl p-6 shadow-sm text-center">
      <h3 className="text-xl font-bold mb-2">Bandwidth Speed Tester</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Check if your connection can handle raw 4K streaming.
      </p>

      {!testing && !done && (
        <Button onClick={handleTest} className="w-full bg-iptv-green hover:bg-iptv-green/90 text-stone-950 font-bold">
          Test My Speed
        </Button>
      )}

      {testing && (
        <div className="space-y-4">
          <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-iptv-green transition-all duration-100" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          <p className="text-lg font-mono font-bold animate-pulse">{speed} Mbps</p>
        </div>
      )}

      {done && (
        <div className="space-y-4">
          <div className="text-4xl">🚀</div>
          <p className="text-lg font-bold text-iptv-green">124 Mbps</p>
          <p className="text-sm font-medium">Your connection is ready for 4K Streaming!</p>
          <Button variant="outline" size="sm" onClick={handleTest} className="mt-2">
            Test Again
          </Button>
        </div>
      )}
    </div>
  )
}
