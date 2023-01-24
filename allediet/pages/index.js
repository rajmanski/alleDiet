import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Alle diet | Dietetyk dla Twojego zdrowia</title>
      <link rel="icon" href="/eggplant2.png"></link>
    </Head>
    <Navbar/>
    <HeroSection/>
      
    </>
  )
}
