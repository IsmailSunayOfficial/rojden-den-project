import { motion } from 'framer-motion'
import { useElapsedTime } from '../hooks/useElapsedTime'

// Началната дата на връзката ви. Лесно за смяна тук.
const START_DATE = new Date('2025-11-11T00:00:00')

const UNITS: Array<{ key: 'days' | 'hours' | 'minutes' | 'seconds'; label: string }> = [
  { key: 'days', label: 'дни' },
  { key: 'hours', label: 'часа' },
  { key: 'minutes', label: 'минути' },
  { key: 'seconds', label: 'секунди' },
]

export default function Counter() {
  const elapsed = useElapsedTime(START_DATE)

  return (
    <section className="relative py-24 sm:py-32 px-6 flex flex-col items-center text-center">
      <motion.h2
        className="section-heading mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Времето, което сме заедно
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl w-full">
        {UNITS.map((unit, i) => (
          <motion.div
            key={unit.key}
            className="glass-card px-4 py-6 sm:py-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span className="text-3xl sm:text-5xl font-body font-semibold text-rose-light tabular-nums">
              {elapsed[unit.key]}
            </span>
            <span className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-white/60">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-12 text-lg text-blush-light font-body italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Всяка секунда с теб е любимата ми секунда. ❤️
      </motion.p>
    </section>
  )
}
