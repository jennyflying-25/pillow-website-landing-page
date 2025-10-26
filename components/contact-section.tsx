"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, MessageCircle, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "general",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const generateTrackingUrl = () => {
    const baseUrl = "https://pixeltrack-worker.laifa.xin/track/YaGR9uSq.jpg"
    const params = new URLSearchParams({
      e: formData.email,
      p: formData.phone,
      n: formData.name,
      m: formData.message,
      c1: formData.company,
      c2: formData.inquiryType,
    })
    return `${baseUrl}?${params.toString()}`
  }

  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-manrope">
            Have a question, a special request, or a trade inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-stone-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                {isSubmitted ? "Thank You!" : "Send us an inquiry"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center space-y-8 py-12">
                  <div className="flex justify-center">
                    <div className="bg-green-100 rounded-full p-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Inquiry Submitted Successfully!</h3>
                    <p className="text-lg text-muted-foreground font-manrope max-w-md mx-auto">
                      Thank you for your interest in our luxury textiles. We'll respond within 24 hours.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl p-8 space-y-6 border border-stone-200">
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-foreground">Connect with us instantly</h4>
                      <p className="text-muted-foreground font-manrope">
                        Scan the QR code below to add us on WhatsApp for immediate assistance
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <img
                          src={generateTrackingUrl() || "/placeholder.svg"}
                          alt="WhatsApp QR Code"
                          className="w-[200px] h-[200px] rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground font-manrope">
                      <MessageCircle className="h-4 w-4" />
                      <span>Open your camera app and point it at the QR code</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-[#BCA996] text-[#BCA996] hover:bg-[#BCA996] hover:text-white"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground">
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiryType" className="text-foreground">
                      Interested Product
                    </Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="australian-wool">Australian Wool Collection</option>
                      <option value="velvet-pillows">Luxury Velvet Pillows</option>
                      <option value="lambswool-shawls">Lambswool Shawls</option>
                      <option value="wholesale">Wholesale/Trade Program</option>
                      <option value="custom">Custom Order</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your project, questions, or how we can help you..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#BCA996] hover:bg-[#A89985] text-white">
                    Send Inquiry
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-stone-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/8613480782233"
                      className="text-primary hover:text-primary/80 font-manrope"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +86 13480782233
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/jenny.homedecor/"
                      className="text-primary hover:text-primary/80 font-manrope"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @jenny.homedecor
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-stone-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-manrope">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-muted-foreground font-manrope mb-4">
                Follow our journey and find daily home decor inspiration
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://www.instagram.com/jennyflying.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Follow on Instagram</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
