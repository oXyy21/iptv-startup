"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSending, setIsSending] = useState(false)

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    // Simulate network delay
    setTimeout(() => {
      setIsSending(false)
      toast.success("Message sent successfully!", {
        description: "Our support team will get back to you shortly.",
        duration: 5000,
      })
      const target = e.target as HTMLFormElement;
      target.reset();
    }, 1500)
  }

  return (
    <form onSubmit={handleSend} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
        <Input required className="bg-slate-950 border-slate-800" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
        <Input required type="email" pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" title="Please enter a valid full email address (e.g., yourname@gmail.com)" className="bg-slate-950 border-slate-800" placeholder="john@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
        <Textarea required className="bg-slate-950 border-slate-800 min-h-[150px]" placeholder="How can we help you?" />
      </div>
      <Button type="submit" disabled={isSending} className="w-full text-lg font-bold">
        {isSending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
