import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'
import Counter from './components/Counter'
import Timeline from './components/Timeline'
import LoveInLanguages from './components/LoveInLanguages'
import Gallery from './components/Gallery'
import FutureSection from './components/FutureSection'
import FinalLetter from './components/FinalLetter'
import FinalScreen from './components/FinalScreen'
import SecretHeart from './components/SecretHeart'
import FloatingHearts from './components/FloatingHearts'

const LOADING_DURATION_MS = 2600

export default function App() {
  const [loading, setLoading] = useState(true)
  const [letterFinished, setLetterFinished] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen">
      <LoadingScreen visible={loading} />
      <FloatingHearts />

      <main className="relative z-10">
        <HeroSection onStart={scrollToJourney} />

        <div id="journey">
          <Counter />
          <Timeline />
          <LoveInLanguages />
          <Gallery />
          <FutureSection />
          <FinalLetter onFinished={() => setLetterFinished(true)} />
          <FinalScreen triggered={letterFinished} />
        </div>
      </main>

      <SecretHeart />
    </div>
  )
}
