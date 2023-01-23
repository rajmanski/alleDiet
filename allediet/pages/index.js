import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='mx-auto text-center'>
        <p className='text-red-600'>lalala</p>
        <p className='text-blue-600'>lalala</p>
      </div>
    </>
  )
}
