import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FaMusic, FaPause } from 'react-icons/fa'
import { useYouTubePlayer } from '../hooks/useYouTubePlayer'

interface FinalScreenProps {
  triggered: boolean
}

// YouTube ID на любимата ви песен (от пратения линк).
const SONG_VIDEO_ID = 'QKI39uoBCp0'

export default function FinalScreen({ triggered }: FinalScreenProps) {
  const { containerId, isPlaying, toggle } = useYouTubePlayer(SONG_VIDEO_ID)

  useEffect(() => {
    if (!triggered) return

    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors: ['#FF4D8D', '#FF8FAB', '#FFD6E0'],
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors: ['#FF4D8D', '#FF8FAB', '#FFD6E0'],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()

    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#FF4D8D', '#FF8FAB', '#FFD6E0'],
    })
  }, [triggered])

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24">
      {/* Hidden YouTube player - audio only, visually hidden */}
      <div id={containerId} className="absolute w-0 h-0 overflow-hidden" />

      <motion.h2
        className="section-heading text-5xl sm:text-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Честит рожден ден ❤️
      </motion.h2>

      <motion.p
        className="mt-6 text-lg sm:text-xl text-blush-light font-body"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Обичам те повече, отколкото думите могат да опишат.
      </motion.p>

      <motion.button
        onClick={toggle}
        className="btn-primary mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
        {isPlaying ? 'На пауза' : 'Пусни нашата песен'}
      </motion.button>
    </section>
  )
}
