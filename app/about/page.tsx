"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Upload, X, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)

      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader()
        reader.onload = (event) => {
          setProfileImage(event.target?.result as string)
          setIsUploading(false)
          setUploadSuccess(true)

          // Reset success message after 3 seconds
          setTimeout(() => {
            setUploadSuccess(false)
          }, 3000)
        }
        reader.readAsDataURL(file)
      }, 1500)
    }
  }

  const removeImage = () => {
    setProfileImage(null)
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
                    {profileImage ? (
                      <>
                        <Image src={profileImage || "/placeholder.svg"} alt="Profile" fill className="object-cover" />
                        <button
                          onClick={removeImage}
                          className="absolute right-2 top-2 rounded-full bg-black/70 p-1 text-white transition-colors hover:bg-black"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </>
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                        <div className="mb-4 rounded-full bg-gray-700 p-4">
                          <Upload className="h-8 w-8 text-gray-400" />
                        </div>
                        <p className="mb-2 text-gray-300">Upload your profile photo</p>
                        <p className="text-sm text-gray-500">Recommended size: 400x400px</p>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <label htmlFor="profile-upload" className="w-full">
                        <div
                          className={`relative flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-700 px-4 py-2 text-sm font-medium transition-colors ${
                            isUploading
                              ? "bg-gray-800 text-gray-400"
                              : "bg-teal-900/30 text-teal-400 hover:bg-teal-900/50"
                          }`}
                        >
                          {isUploading ? (
                            <>
                              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-t-white"></div>
                              Uploading...
                            </>
                          ) : profileImage ? (
                            <>Change Photo</>
                          ) : (
                            <>Upload Photo</>
                          )}
                        </div>
                        <input
                          id="profile-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="sr-only"
                          disabled={isUploading}
                        />
                      </label>
                    </div>

                    {uploadSuccess && (
                      <div className="mb-4 flex items-center rounded-md bg-green-900/20 p-2 text-sm text-green-400">
                        <Check className="mr-2 h-4 w-4" />
                        Photo uploaded successfully!
                      </div>
                    )}

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
                        <p className="mb-2 text-sm text-teal-400">Policy Advisor</p>
                        <p className="text-sm text-gray-300">
                          Works with governments and international organizations to advocate for stronger marine
                          protection policies.
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
                        <h4 className="text-lg font-bold text-white">Carlos Marino</h4>
                        <p className="mb-2 text-sm text-teal-400">Field Operations</p>
                        <p className="text-sm text-gray-300">
                          Leads our diving team and oversees the implementation of underwater conservation activities.
                        </p>
                      </div>

                      <div className="rounded-lg bg-gray-800 p-4 text-center">
                        <div className="mb-3 flex aspect-square w-full items-center justify-center rounded-md bg-gray-700">
                          <p className="text-gray-400">Join Our Team</p>
                        </div>
                        <h4 className="text-lg font-bold text-white">We're Hiring!</h4>
                        <p className="mb-2 text-sm text-teal-400">Multiple Positions</p>
                        <p className="text-sm text-gray-300">
                          Passionate about coral conservation? Check our careers page for current openings.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="mt-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardContent className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-white">Our History</h2>

                    <div className="relative border-l border-gray-700 pl-6">
                      <div className="mb-10">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-500"></div>
                        <h3 className="text-xl font-bold text-white">2010: The Beginning</h3>
                        <p className="mb-2 text-sm text-teal-400">Foundation of CoralGuard</p>
                        <p className="text-gray-300">
                          CoralGuard was founded by Dr. Marina Corales after witnessing the devastating effects of coral
                          bleaching in the Caribbean. Starting with a small team of dedicated marine biologists, the
                          organization began documenting coral health and raising awareness about threats to reef
                          ecosystems.
                        </p>
                      </div>

                      <div className="mb-10">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-500"></div>
                        <h3 className="text-xl font-bold text-white">2013: First Restoration Project</h3>
                        <p className="mb-2 text-sm text-teal-400">Florida Keys Coral Nursery</p>
                        <p className="text-gray-300">
                          We established our first coral nursery in the Florida Keys, growing staghorn and elkhorn coral
                          fragments for transplantation to degraded reef areas. This project demonstrated the viability
                          of active restoration as a conservation strategy.
                        </p>
                      </div>

                      <div className="mb-10">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-500"></div>
                        <h3 className="text-xl font-bold text-white">2015: International Expansion</h3>
                        <p className="mb-2 text-sm text-teal-400">Southeast Asia Programs</p>
                        <p className="text-gray-300">
                          CoralGuard expanded its operations to Southeast Asia, partnering with local organizations in
                          Indonesia and the Philippines to implement community-based conservation programs. These
                          initiatives focused on reducing destructive fishing practices and establishing locally managed
                          marine protected areas.
                        </p>
                      </div>

                      <div className="mb-10">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-500"></div>
                        <h3 className="text-xl font-bold text-white">2018: Research Breakthrough</h3>
                        <p className="mb-2 text-sm text-teal-400">Heat-Resistant Coral Strains</p>
                        <p className="text-gray-300">
                          Our research team identified several coral strains with enhanced resistance to thermal stress,
                          a critical discovery for coral conservation in the face of rising ocean temperatures. This
                          research has informed our selective breeding program for restoration projects.
                        </p>
                      </div>

                      <div className="mb-10">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-500"></div>
                        <h3 className="text-xl font-bold text-white">2020: Educational Initiative</h3>
                        <p className="mb-2 text-sm text-teal-400">Launch of Digital Learning Platform</p>
                        <p className="text-gray-300">
                          We launched our comprehensive digital learning platform, providing educational resources about
                          coral reef ecosystems to schools, universities, and the general public. This initiative has
                          reached over 100,000 students worldwide.
                        </p>
                      </div>

                      <div>
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-teal-500"></div>
                        <h3 className="text-xl font-bold text-white">Today: Ongoing Mission</h3>
                        <p className="mb-2 text-sm text-teal-400">Global Conservation Efforts</p>
                        <p className="text-gray-300">
                          Today, CoralGuard operates in 12 countries, with over 50 full-time staff and hundreds of
                          volunteers. We continue to expand our research, restoration, and education programs, working
                          tirelessly to protect coral reefs for future generations.
                        </p>
                      </div>
                    </div>
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
