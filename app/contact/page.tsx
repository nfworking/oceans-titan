"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-2 text-4xl font-bold text-teal-400">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-gray-300">
            Have questions about coral conservation or want to get involved? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="sticky top-24 space-y-6">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-400">
                    Our team is here to help with any questions about our conservation efforts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-teal-400" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-sm text-gray-400">info@coralguard.org</p>
                      <p className="text-sm text-gray-400">support@coralguard.org</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-teal-400" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-sm text-gray-400">+1 (305) 555-0123</p>
                      <p className="text-sm text-gray-400">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-teal-400" />
                    <div>
                      <p className="font-medium text-white">Office</p>
                      <p className="text-sm text-gray-400">123 Ocean Drive</p>
                      <p className="text-sm text-gray-400">Key Largo, FL 33037</p>
                      <p className="text-sm text-gray-400">United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Visit Our Research Center</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full overflow-hidden">
                    {/* Interactive map would go here - using placeholder for now */}
                    <div className="flex h-full w-full items-center justify-center bg-gray-800 p-6 text-center">
                      <div>
                        <MapPin className="mx-auto mb-2 h-8 w-8 text-teal-400" />
                        <p className="text-gray-300">Interactive Map</p>
                        <p className="text-sm text-gray-500">Map integration would be displayed here</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">
                      Our research center is open to visitors Monday through Friday, 10am to 4pm. Guided tours are
                      available by appointment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-green-900/20 p-6 text-center"
                  >
                    <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-400" />
                    <h3 className="mb-2 text-xl font-bold text-white">Message Sent!</h3>
                    <p className="text-green-300">
                      Thank you for reaching out. We've received your message and will respond shortly.
                    </p>
                  </motion.div>
                ) : submitStatus === "error" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-red-900/20 p-6 text-center"
                  >
                    <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-400" />
                    <h3 className="mb-2 text-xl font-bold text-white">Something Went Wrong</h3>
                    <p className="text-red-300">
                      There was an error sending your message. Please try again or contact us directly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your inquiry or how you'd like to get involved..."
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px] border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-t-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Volunteer Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Join our team of dedicated volunteers for coral monitoring, beach cleanups, and community education
                    events.
                  </p>
                  <Button className="mt-4 w-full bg-teal-600 hover:bg-teal-700">Apply to Volunteer</Button>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Research Collaborations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We welcome partnerships with universities, research institutions, and other conservation
                    organizations.
                  </p>
                  <Button className="mt-4 w-full bg-teal-600 hover:bg-teal-700">Propose a Project</Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold text-white">How can I support coral conservation?</h3>
                    <p className="text-sm text-gray-300">
                      You can support our work through donations, volunteering, reducing your carbon footprint, using
                      reef-safe sunscreen, and spreading awareness about coral conservation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Do you offer educational programs for schools?</h3>
                    <p className="text-sm text-gray-300">
                      Yes, we offer virtual and in-person educational programs for K-12 schools and universities.
                      Contact our education team for more information.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">How can I visit a coral restoration site?</h3>
                    <p className="text-sm text-gray-300">
                      We organize guided tours to our restoration sites for certified divers. Check our events calendar
                      or contact us for upcoming opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
