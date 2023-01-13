import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App MyTryps Zef</title>
      </Head>
      <main>
        <div>
          <h1>Welcome to NextJS + GraphQl na Prática.</h1>
        </div>
      </main>
    </>
  )
}
