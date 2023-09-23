import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Encuesta React',
  description: 'Activity 04 corresponding to the course Introduction to Frontend development with React.',
}

export default function RootLayout({ children }) {
  return (
    <html lang = "en">
      <body className = {inter.className}>{children}</body>
    </html>
  )
}
