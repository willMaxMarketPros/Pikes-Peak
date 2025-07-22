"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Quote request submitted",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="business">Business Name</Label>
          <Input id="business" placeholder="Your business name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="size">Preferred Ad Size</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9x12">9x12-Inch Postcard</SelectItem>
              <SelectItem value="6x11">6x11-Inch Postcard</SelectItem>
              <SelectItem value="15x12">15x12-Inch Tabloid</SelectItem>
              <SelectItem value="11x17">11x17-Inch Directory</SelectItem>
              <SelectItem value="unsure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell us about your business and marketing goals" rows={4} />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
      </Button>
    </form>
  )
}
