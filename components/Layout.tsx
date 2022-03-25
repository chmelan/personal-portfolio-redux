import { useState } from 'react'

import TopNav from './TopNav'
import { random } from '../lib/helpers'
import Footer from './Footer'

type DashboardLayoutProps = {
  children: React.ReactNode
}

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
      <TopNav setRandomHue={setRandomHue} />
      {children}
      <Footer />
    </div>
  )
}
