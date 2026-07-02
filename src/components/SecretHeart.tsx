import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaTimes } from 'react-icons/fa'

const REQUIRED_CLICKS = 11

export default function SecretHeart() {
  const [clicks, setClicks] = useState(0)
  const [showSecret, setShowSecret] = useState(false)

  const handleClick = () => {
    const next = clicks + 1
    setClicks(next)
    if (next >= REQUIRED_CLICKS) {
      setShowSecret(true)
      setClicks(0)
    }
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        aria-label="Тайно сърце"
        className="fixed bottom-5 right-5 z-40 text-rose text-2xl sm:text-3xl animate-heartbeat drop-shadow-[0_0_10px_rgba(255,77,141,0.6)]"
        whileTap={{ scale: 0.8 }}
      >
        <FaHeart />
      </motion.button>

      <AnimatePresence>
        {showSecret && (
          <motion.div
            className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-sm flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecret(false)}
          >
            <motion.div
              className="glass-card max-w-md w-full px-8 py-10 text-center relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white"
                onClick={() => setShowSecret(false)}
                aria-label="Затвори"
              >
                <FaTimes />
              </button>
              <FaHeart className="mx-auto text-rose text-3xl mb-4 animate-heartbeat" />
              <p className="font-body text-white/90 leading-relaxed">
                Ако откри това съобщение, значи вече знаеш, че в този сайт има много страници,
                снимки и думи... но най-красивата част от цялата история винаги ще бъдеш ти. ❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
