import { useState } from 'react'
import Head from 'next/head'
import TopNav from './TopNav'
import { random } from '../lib/helpers'
import Footer from './Footer'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export const siteTitle = 'Nick Chmela | Full Stack Developer'

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [hues, setHues] = useState({
    baseHue: 220,
    complimentaryHue: 250,
    complimentaryHue2: 280,
    oppositeHue: 100,
    oppositeHue2: 130,
  })

  const setRandomHue = () => {
    const baseHue = random(0, 360)
    const complimentaryHue = baseHue + 30
    const complimentaryHue2 = baseHue + 60
    const oppositeHue = baseHue + 180
    const oppositeHue2 = baseHue + 210

    document.documentElement.style.setProperty('--hue', baseHue)
    document.documentElement.style.setProperty('--hue2', complimentaryHue)
    document.documentElement.style.setProperty('--hue3', complimentaryHue2)
    document.documentElement.style.setProperty('--hue4', oppositeHue)
    document.documentElement.style.setProperty('--hue5', oppositeHue2)
    setHues({
      baseHue: baseHue,
      complimentaryHue: complimentaryHue,
      complimentaryHue2: complimentaryHue2,
      oppositeHue: oppositeHue,
      oppositeHue2: oppositeHue2,
    })
  }
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Hi, I'm Nick! I'm a full stack developer who can't stop tinkering."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <TopNav setRandomHue={setRandomHue} />

      <main className="pt-24 md:pt-48">{children}</main>
      <Footer />
    </div>
  )
}
