"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Html, useGLTF, PresentationControls } from "@react-three/drei"
import { motion } from "framer-motion"
import { Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

// Pre-load the model to prevent loading issues
useGLTF.preload("/assets/3d/model1.glb")

// Staghorn Coral Model - Rotating model
function StaghornModel({ scale = 0 }) {
  const ref = useRef()
  const { scene } = useGLTF("/assets/3d/model1.glb", true)

  // Add rotation animation
 return (
    <group ref={ref}>
      <primitive object={scene.clone()} scale={scale * 2} position={[0, -0.5, 0]} />
    </group>
  )
}

// Brain Coral Model - Pulsing model
function BrainModel({ scale = 0 }) {
  const ref = useRef()
  const { scene } = useGLTF("/assets/3d/model2.glb", true)

  return (
    <group ref={ref}>
    <primitive object={scene.clone()} scale={100} position={[0, -20, 0]} />
  </group>
  )
}

// Elkhorn Coral Model - Swaying model
function ElkhornModel({ scale = 100 }) {
  const ref = useRef()
  const { scene } = useGLTF("/assets/3d/model3.glb", true)

 return (
    <group ref={ref}>
    <primitive object={scene.clone()} scale={100} position={[0, -20, 0]} />
  </group>
  )
}

// Single coral viewer component
function CoralViewer({ coral }) {
  // Select the appropriate model component based on coral type
  const ModelComponent = () => {
    switch (coral.id) {
      case 1:
        return <StaghornModel scale={coral.scale} />
      case 2:
        return <BrainModel scale={coral.scale} />
      case 3:
        return <ElkhornModel scale={coral.scale} />
      default:
        return <StaghornModel scale={coral.scale} />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="flex flex-col"
    >
      <div className="rounded-t-lg border border-gray-800 border-b-0 bg-gradient-to-b from-gray-900 to-black/50 p-4">
        <h3 className="mb-2 text-center text-xl font-bold text-white">{coral.name}</h3>
        <p className="mb-4 text-center text-sm italic text-gray-400">{coral.scientificName}</p>
      </div>

      <div className="h-[300px] w-full rounded-none border border-gray-800 border-y-0 bg-gradient-to-b from-gray-900 to-black/50">
      <Canvas camera={{ position: [15, 100, 15], fov: 30 }}>
          <Suspense fallback={<Html center><p>Loading...</p></Html>}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <ModelComponent />
            <Environment preset="sunset" />

            {/* Use only OrbitControls */}
            <OrbitControls
  enableZoom={true}
  enablePan={true}
  enableRotate={true}
  minDistance={1}   // Minimum zoom distance (closer to the model)
  maxDistance={175}
  zoomSpeed={2}
   // Maximum zoom distance (further from the model)
  />
          </Suspense>
        </Canvas>

      </div>

      <div className="flex items-center justify-center space-x-2 rounded-none border border-gray-800 border-b-0 bg-gradient-to-b from-black/50 to-gray-900 p-2 text-xs text-gray-400">
        <Info className="h-3 w-3" />
        <p>Click and drag to rotate. Scroll to zoom.</p>
      </div>

      <Card className="rounded-t-none border-gray-800 bg-gray-900">
        <CardContent className="p-4">
          <p className="mb-4 text-sm text-gray-300">{coral.description}</p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
            <span className="rounded-full bg-gray-800 px-3 py-1 text-center text-xs text-teal-400 sm:text-left">
              {coral.location}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-center text-xs sm:text-left ${
                coral.status === "Critically Endangered"
                  ? "bg-red-900/50 text-red-300"
                  : "bg-yellow-900/50 text-yellow-300"
              }`}
            >
              {coral.status}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Coral data
const coralData = [
  {
    id: 1,
    name: "Staghorn Coral",
    scientificName: "Acropora cervicornis",
    description:
      "Staghorn coral is a branching coral with cylindrical branches that resemble the antlers of a male deer. It is one of the fastest-growing corals and is important for reef building. These corals provide essential habitat for fish, snails, crabs, and other marine species.",
    location: "Caribbean, Florida Keys",
    status: "Critically Endangered",
    scale: 0.5,
  },
  {
    id: 2,
    name: "Brain Coral",
    scientificName: "Diploria labyrinthiformis",
    description:
      "Brain coral gets its name from its appearance, which resembles a human brain. It forms large, rounded structures with a grooved surface pattern. These slow-growing corals can live for several centuries and are important for building reef structure and providing habitat.",
    location: "Atlantic Ocean, Caribbean",
    status: "Near Threatened",
    scale: 0.5,
  },
  {
    id: 3,
    name: "Elkhorn Coral",
    scientificName: "Acropora palmata",
    description:
      "Elkhorn coral is named for its resemblance to elk antlers. It has broad, flattened branches and is a major reef-building coral in the Caribbean. Once abundant throughout the Caribbean, elkhorn coral populations have declined by more than 90% since the 1980s.",
    location: "Caribbean, Bahamas",
    status: "Critically Endangered",
    scale: 0.5,
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-2 text-4xl font-bold text-teal-400">3D Coral Reef Gallery</h1>
          <p className="mx-auto max-w-2xl text-gray-300">
            Explore interactive 3D models of coral species. Each model represents a different type of coral that plays a
            vital role in reef ecosystems.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coralData.map((coral) => (
            <CoralViewer key={coral.id} coral={coral} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg border border-gray-800 bg-gray-900 p-6"
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-white">Why Coral Diversity Matters</h2>
          <p className="text-gray-300">
            Each coral species plays a unique role in reef ecosystems. Different growth forms provide varied habitats
            for marine life, from small fish seeking shelter in branching corals to crustaceans making homes in massive
            corals. This diversity creates the complex structure of coral reefs that supports thousands of species and
            provides coastal protection, food security, and economic benefits to millions of people worldwide.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
