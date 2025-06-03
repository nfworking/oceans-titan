"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
          <h1 className="mb-2 text-4xl font-bold text-teal-400">About Us</h1>
          <p className="mx-auto max-w-2xl text-gray-300">
            Learn about our mission to protect and preserve coral reef ecosystems around the world.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="sticky top-24">
              <Card className="overflow-hidden border-gray-800 bg-gray-900">
                <CardContent className="p-0">
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-800">
                    {/* Static profile image */}
                    <Image src="/pro.jpg" alt="Profile" fill className="object-cover" />
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">Dr. Marina Corales</h3>
                        <p className="text-sm text-gray-400">Marine Biologist & Founder</p>
                      </div>
                      <p className="text-sm text-gray-300">
                        With over 15 years of experience in marine conservation, Dr. Corales has led numerous coral
                        restoration projects across the globe and is dedicated to protecting these vital ecosystems.
                      </p>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-400">Contact Information:</p>
                        <p className="text-sm text-gray-300">marina@coralguard.org</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3 bg-gray-900">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
                <TabsTrigger value="history">Our History</TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="mt-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-2xl font-bold text-white">Our Mission</h2>
                    <div className="space-y-4 text-gray-300">
                      <p>
                        At CoralGuard, our mission is to protect and restore coral reef ecosystems through innovative
                        conservation strategies, community engagement, and scientific research. We believe that healthy
                        coral reefs are essential for marine biodiversity, coastal protection, and sustainable
                        livelihoods.
                      </p>
                      <p>We are committed to:</p>
                      <ul className="ml-6 list-disc space-y-2">
                        <li>Conducting cutting-edge research on coral reef health and resilience</li>
                        <li>Implementing effective coral restoration techniques in degraded reef areas</li>
                        <li>Educating communities and visitors about the importance of coral conservation</li>
                        <li>
                          Advocating for policies that protect marine ecosystems from climate change and pollution
                        </li>
                        <li>
                          Collaborating with local communities, governments, and other organizations to create
                          sustainable solutions
                        </li>
                      </ul>
                      <p>
                        Through these efforts, we aim to ensure that coral reefs continue to thrive for generations to
                        come, supporting the countless species that depend on them and the human communities that
                        benefit from their services.
                      </p>
                    </div>

                    <div className="mt-8">
                      <h3 className="mb-4 text-xl font-bold text-white">Our Values</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg bg-gray-800 p-4">
                          <h4 className="mb-2 font-bold text-teal-400">Scientific Integrity</h4>
                          <p className="text-sm text-gray-300">
                            We base our conservation strategies on rigorous scientific research and evidence-based
                            approaches.
                          </p>
                        </div>
                        <div className="rounded-lg bg-gray-800 p-4">
                          <h4 className="mb-2 font-bold text-teal-400">Community Partnership</h4>
                          <p className="text-sm text-gray-300">
                            We work alongside local communities, recognizing their knowledge and respecting their
                            connection to marine resources.
                          </p>
                        </div>
                        <div className="rounded-lg bg-gray-800 p-4">
                          <h4 className="mb-2 font-bold text-teal-400">Education & Awareness</h4>
                          <p className="text-sm text-gray-300">
                            We believe that knowledge is the foundation of conservation and strive to make information
                            accessible to all.
                          </p>
                        </div>
                        <div className="rounded-lg bg-gray-800 p-4">
                          <h4 className="mb-2 font-bold text-teal-400">Sustainable Solutions</h4>
                          <p className="text-sm text-gray-300">
                            We develop and implement conservation strategies that balance ecological health with human
                            needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="mt-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-white">Our Team</h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg bg-gray-800 p-4">
                        <div className="mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-700">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white">Dr. James Coral</h4>
                        <p className="mb-2 text-sm text-teal-400">Research Director</p>
                        <p className="text-sm text-gray-300">
                          Specializes in coral genetics and leads our research initiatives on coral resilience to
                          climate change.
                        </p>
                      </div>

                      <div className="rounded-lg bg-gray-800 p-4">
                        <div className="mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-700">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white">Sarah Reefman</h4>
                        <p className="mb-2 text-sm text-teal-400">Conservation Manager</p>
                        <p className="text-sm text-gray-300">
                          Coordinates our restoration projects and works with local communities to implement
                          conservation strategies.
                        </p>
                      </div>

                      <div className="rounded-lg bg-gray-800 p-4">
                        <div className="mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-700">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white">Miguel Oceano</h4>
                        <p className="mb-2 text-sm text-teal-400">Education Coordinator</p>
                        <p className="text-sm text-gray-300">
                          Develops our educational programs and leads outreach efforts to schools and community groups.
                        </p>
                      </div>

                      <div className="rounded-lg bg-gray-800 p-4">
                        <div className="mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-700">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Team Member"
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-white">Dr. Aisha Waters</h4>
                        <p className="mb-2 text-sm text-teal-400">Marine Ecologist</p>
                        <p className="text-sm text-gray-300">
                          Focuses on coral reef ecosystem dynamics and monitoring environmental impacts on reef health.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="mt-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-2xl font-bold text-white">Our History</h2>
                    <p className="mb-4 text-gray-300">
                      Founded in 2008 by Dr. Marina Corales, CoralGuard began as a small community initiative focused on
                      restoring coral reefs damaged by pollution and climate events. Over the years, we have grown into
                      a global organization with partnerships across several countries, dedicated to marine conservation
                      and research.
                    </p>
                    <p className="mb-4 text-gray-300">
                      Key milestones include launching the CoralRescue program in 2012, expanding research collaborations
                      with universities worldwide, and developing educational programs that have reached thousands of
                      students and community members.
                    </p>
                    <p className="text-gray-300">
                      Our journey continues with a commitment to innovation, collaboration, and impactful conservation
                      efforts to safeguard the future of coral reefs.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
