"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, Globe, Droplets, ThermometerSun, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { FactCard } from "@/components/fact-card"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      {/* Hero Section with Parallax Video */}
      <section ref={ref} className="relative h-screen overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="/coral-reef.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Save Our Coral Reefs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-3xl text-lg text-gray-300 sm:text-xl"
          >
            Coral reefs are the rainforests of the sea, home to 25% of marine species. Join our mission to protect these
            vital ecosystems before it's too late.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Take Action Now
            </Button>
            <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-950">
              Learn More
            </Button>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gradient-to-b from-black to-gray-950 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold text-white"
            >
              Our Oceans Are In Danger
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-lg text-gray-300"
            >
              Coral reefs are among the most valuable ecosystems on Earth. They provide food, shelter, and breeding
              grounds for countless marine species, protect coastlines from storms and erosion, support fishing and
              tourism industries worth billions of dollars, and hold promise for medical breakthroughs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-300"
            >
              Yet today, these magnificent underwater cities face unprecedented threats from climate change, pollution,
              overfishing, and destructive practices. Without immediate action, we risk losing these treasures forever.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Alarming Facts Section */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold text-teal-400"
          >
            The Coral Crisis
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FactCard title="50%" description="of the world's coral reefs have died in the last 30 years" delay={0.1} />
            <FactCard title="90%" description="of coral reefs could be lost by 2050 if we don't act now" delay={0.2} />
            <FactCard title="25%" description="of all marine species depend on coral reefs for survival" delay={0.3} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link href="/quiz">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Test Your Knowledge <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">Major Threats to Coral Reefs</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Understanding the challenges facing coral reefs is the first step toward protecting them.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-lg bg-gray-800 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-900">
                <ThermometerSun className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Climate Change</h3>
              <p className="text-gray-300">
                Rising ocean temperatures cause coral bleaching, where corals expel the algae living in their tissues
                and turn white. Without these algae, corals lose their primary food source and become more susceptible
                to disease.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg bg-gray-800 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-900">
                <Droplets className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Ocean Acidification</h3>
              <p className="text-gray-300">
                As oceans absorb carbon dioxide from the atmosphere, seawater becomes more acidic. This makes it harder
                for corals to build their calcium carbonate skeletons, slowing their growth and weakening existing reef
                structures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-lg bg-gray-800 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-900">
                <Globe className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Pollution</h3>
              <p className="text-gray-300">
                Runoff from agriculture, sewage, and industrial activities introduces harmful nutrients, sediments, and
                toxins into coastal waters. These pollutants can smother corals, block sunlight, and trigger harmful
                algal blooms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-lg bg-gray-800 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-900">
                <Users className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Human Activities</h3>
              <p className="text-gray-300">
                Destructive fishing practices, coastal development, and irresponsible tourism directly damage reef
                structures. Overfishing disrupts the delicate balance of reef ecosystems by removing key species that
                keep algae growth in check.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Models Preview Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">Explore Coral Reefs in 3D</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Interact with detailed 3D models of coral species and reef ecosystems. Learn about their structure,
              diversity, and the threats they face.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Link href="/gallery">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Enter 3D Gallery
                </Button>
              </Link>
            </div>
            <img
              src="/images/3d-gallery-preview.jpg"
              alt="3D Coral Reef Gallery Preview"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">Success Stories</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Despite the challenges, conservation efforts around the world are making a difference. Here are some
              inspiring success stories.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Coral restoration project"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Coral Restoration in Florida</h3>
                <p className="mb-4 text-gray-300">
                  Through innovative "coral gardening" techniques, scientists have successfully grown and transplanted
                  thousands of coral fragments onto degraded reefs in the Florida Keys.
                </p>
                <Link href="#" className="text-sm font-medium text-teal-400 hover:underline">
                  Read more →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Marine protected area"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Palau's Marine Sanctuary</h3>
                <p className="mb-4 text-gray-300">
                  The Pacific island nation of Palau created one of the world's largest marine protected areas, covering
                  80% of its maritime territory and banning all extractive activities.
                </p>
                <Link href="#" className="text-sm font-medium text-teal-400 hover:underline">
                  Read more →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Community-led conservation"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">Community-Led Conservation in Indonesia</h3>
                <p className="mb-4 text-gray-300">
                  Local communities in Raja Ampat have established a network of locally managed marine areas, resulting
                  in increased fish populations and healthier coral reefs.
                </p>
                <Link href="#" className="text-sm font-medium text-teal-400 hover:underline">
                  Read more →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold text-white"
            >
              Join the Movement to Save Coral Reefs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-gray-300"
            >
              Every action counts. Whether it's reducing your carbon footprint, supporting marine conservation
              organizations, or spreading awareness, you can make a difference in protecting these vital ecosystems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Take the Pledge
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
