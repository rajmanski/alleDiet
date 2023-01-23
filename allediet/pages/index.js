import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Alle Diet | Dietetyk dla Twojego zdrowia</title>
      <link rel="icon" href="/eggplant2.png"></link>
    </Head>
    <Navbar/>
      
    </>
  )
}
