import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

interface LoadingScreenProps {
  visible: boolean
}

export default function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaHeart className="text-rose text-5xl sm:text-6xl animate-heartbeat drop-shadow-[0_0_25px_rgba(255,77,141,0.8)]" />
          </motion.div>

          <motion.p
            className="mt-6 font-body text-sm sm:text-base tracking-[0.3em] uppercase text-blush-light/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Зареждам най-красивите ни спомени...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
