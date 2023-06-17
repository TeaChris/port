import Navbar from '@/components/Navbar'
import './globals.css'
import { Fira_Mono } from 'next/font/google'
import Footer from '@/components/Footer'

const fira = Fira_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title:
    'OlasunkanBolu: Creating engaging websites with stunning designs and seamless functionality for optimal user experiences',
  description: 'Frontend Developer & UX Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${fira.className} bg-background text-white overflow-x-hidden relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
