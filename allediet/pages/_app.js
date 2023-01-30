import { auth } from '@/lib/firebase';
import '@/styles/globals.css'
import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
      }
  })
  
  }, []);

  return (
    <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Luxurious+Script&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
  </>)
}
