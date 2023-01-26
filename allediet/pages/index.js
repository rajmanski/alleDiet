import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { WhatWeDo } from '@/components/WhatWeDo'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Alle diet | Dietetyk dla Twojego zdrowia</title>
      <link rel="icon" href="/eggplant2.png"></link>
    </Head>
    <Navbar/>
    <HeroSection/>
    <WhatWeDo/>
    </>
  )
}
