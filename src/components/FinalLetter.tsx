import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { letterText } from '../data/letterData'

interface FinalLetterProps {
  onFinished: () => void
}

export default function FinalLetter({ onFinished }: FinalLetterProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const { displayed, done } = useTypewriter(letterText, inView, 26)

  useEffect(() => {
    if (done) onFinished()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 flex justify-center">
      <motion.div
        className="glass-card max-w-2xl w-full px-6 sm:px-12 py-10 sm:py-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="whitespace-pre-line font-body text-white/90 leading-loose text-base sm:text-lg min-h-[320px]">
          {displayed}
          {!done && <span className="inline-block w-[2px] h-5 bg-rose-light ml-1 animate-pulse align-middle" />}
        </p>
      </motion.div>
    </section>
  )
}
