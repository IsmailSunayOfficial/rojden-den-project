import { motion } from 'framer-motion'
import { futureData } from '../data/futureData'

export default function FutureSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      <motion.h2
        className="section-heading text-center mb-4 max-w-2xl mx-auto leading-snug"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Нямам търпение да преживеем още толкова красиви моменти.
      </motion.h2>

      <div className="max-w-4xl mx-auto mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {futureData.map((dream, i) => (
          <motion.div
            key={dream.id}
            className="glass-card overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="relative aspect-square w-full overflow-hidden bg-white/5">
              {dream.gif ? (
                <img
                  src={dream.gif}
                  alt={dream.text}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/15 m-2 rounded-xl px-3 text-center">
                  <span className="text-3xl opacity-70">{dream.emoji}</span>
                  <span className="text-[11px] text-white/40 font-body leading-snug">
                    Добави GIF: <br />
                    <code className="text-white/55">{dream.id}.gif</code>
                  </span>
                </div>
              )}
              <span className="absolute top-2 left-2 text-lg drop-shadow-md">{dream.emoji}</span>
            </div>

            <div className="px-5 py-5 flex-1 flex items-center">
              <p className="text-white/85 font-body text-left leading-relaxed">{dream.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
