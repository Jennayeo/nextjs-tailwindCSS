import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '../pages/main';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <Main/>
    </div>
  )
}
