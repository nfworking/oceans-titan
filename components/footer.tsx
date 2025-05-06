import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-teal-400">CoralGuard</h3>
            <p className="mb-4 text-sm text-gray-400">
              Dedicated to the conservation and protection of coral reef ecosystems worldwide through education,
              research, and community engagement.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 transition-colors hover:text-teal-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-400 transition-colors hover:text-teal-400">
                  Quiz
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 transition-colors hover:text-teal-400">
                  3D Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-teal-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                  Coral Research
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                  Conservation Efforts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                  Educational Materials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                  Volunteer Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition-colors hover:text-teal-400">
                  Donation Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for updates on our conservation efforts and upcoming events.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our organization.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CoralGuard. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-teal-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-teal-400">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-teal-400">
              Cookie Policy
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
            <span>Made with</span>
            <Heart className="mx-1 h-3 w-3 text-red-500" />
            <span>for our oceans</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
