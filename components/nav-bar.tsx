"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-bold text-teal-400">CoralGuard</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400">
            Home
          </Link>
          <Link href="/quiz" className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400">
            Quiz
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400">
            3D Gallery
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-200 transition-colors hover:text-teal-400">
            Contact
          </Link>
          <Button className="bg-teal-600 hover:bg-teal-700">Donate Now</Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-black"
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-teal-400">CoralGuard</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6 text-white" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center space-y-6 p-4">
            <Link
              href="/"
              className="text-2xl font-medium text-white transition-colors hover:text-teal-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/quiz"
              className="text-2xl font-medium text-white transition-colors hover:text-teal-400"
              onClick={toggleMenu}
            >
              Quiz
            </Link>
            <Link
              href="/gallery"
              className="text-2xl font-medium text-white transition-colors hover:text-teal-400"
              onClick={toggleMenu}
            >
              3D Gallery
            </Link>
            <Link
              href="/about"
              className="text-2xl font-medium text-white transition-colors hover:text-teal-400"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-2xl font-medium text-white transition-colors hover:text-teal-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Donate Now</Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
