"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FactCardProps {
  title: string
  description: string
  delay?: number
}

export function FactCard({ title, description, delay = 0 }: FactCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const targetNumber = Number.parseInt(title.replace(/\D/g, ""))

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    if (isInView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / 2000, 1) // 2 seconds duration
        const currentCount = Math.floor(progress * targetNumber)
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(targetNumber)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, targetNumber])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="overflow-hidden border-gray-800 bg-black">
        <CardContent className="p-0">
          <div className="bg-gradient-to-br from-teal-900 to-teal-950 p-6 text-center">
            <h3 className="text-4xl font-bold text-white">{isInView ? `${count}%` : title}</h3>
          </div>
          <div className="p-6">
            <p className="text-center text-gray-300">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
