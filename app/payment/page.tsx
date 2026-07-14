"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, CreditCard } from "lucide-react"

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [expDate, setExpDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardNumber, setCardNumber] = useState("")

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value.replace(/\D/g, ""))
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value.replace(/\D/g, ""))
  }

  const handleExpDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4)
    }
    setExpDate(value)
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false)
      toast.success("Payment Succeeded!", {
        description: "Your receipt and login credentials have been sent to your email.",
        duration: 5000,
      })
      // Reset form (optional)
      const target = e.target as HTMLFormElement;
      target.reset();
      setExpDate("");
      setCvv("");
      setCardNumber("");
    }, 2000)
  }

  return (
    <div className="container mx-auto px-6 py-24 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-white flex items-center justify-center gap-3">
          <Lock className="w-8 h-8 text-lime-500" />
          Secure Payment
        </h1>
        <p className="text-lg text-slate-400">Please enter your payment details below to complete your purchase.</p>
      </div>

      <Card className="bg-slate-900 border-slate-800 text-white shadow-xl">
        <CardContent className="p-8">
          <form onSubmit={handlePayment} className="space-y-6">
            
            {/* Cardholder Name */}
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Name on Card</label>
              <Input required type="text" className="bg-slate-950 border-slate-800 h-12" placeholder="John Doe" />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <Input required value={cardNumber} onChange={handleCardNumberChange} type="text" pattern="\d{16}" title="Please enter a valid 16-digit card number" className="bg-slate-950 border-slate-800 h-12 pl-10" placeholder="0000000000000000" maxLength={16} />
              </div>
            </div>

            {/* Expiration and CVV */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Expiration Date</label>
                <Input required value={expDate} onChange={handleExpDateChange} type="text" pattern="(0[1-9]|1[0-2])\/\d{2}" title="Please enter in MM/YY format" className="bg-slate-950 border-slate-800 h-12" placeholder="MM/YY" maxLength={5} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">CVV / CVC</label>
                <Input required value={cvv} onChange={handleCvvChange} type="text" pattern="\d{3,4}" title="Please enter a valid 3 or 4 digit security code" className="bg-slate-950 border-slate-800 h-12" placeholder="123" maxLength={4} />
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Billing Address</label>
              <Input required type="text" className="bg-slate-950 border-slate-800 h-12" placeholder="123 Main St, City, Country" />
            </div>

            <Button type="submit" disabled={isProcessing} size="lg" className="w-full h-14 text-lg font-bold mt-8">
              {isProcessing ? "Processing..." : "Purchase"}
            </Button>
            
            <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" /> Payments are securely processed and 256-bit encrypted.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
