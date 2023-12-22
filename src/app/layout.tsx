import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'auth_trpc',
  description: 'Using auth lib and trpc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
       <body>
        {children}
        </body>
      </Providers>
    </html>
  )
}
