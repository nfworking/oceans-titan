import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Australia Oceans',
  description: 'Created with nfworking',
  generator: 'nfworking.git',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      <body>{children}</body>

    </html>
  )
}
