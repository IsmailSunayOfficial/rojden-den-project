import { motion } from 'framer-motion'
import { FaHeart, FaChevronDown } from 'react-icons/fa'

interface HeroSectionProps {
    onStart: () => void
}

import heroPhoto from '../assets/images/hero.jpg'

export default function HeroSection({ onStart }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Hero Image */}
            <img
                src={heroPhoto}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover object-[center]" // ← тук можеш да регулираш
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />

            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <FaHeart className="mx-auto text-rose text-3xl mb-6 animate-heartbeat" />
                </motion.div>

                <motion.h1
                    className="section-heading text-5xl sm:text-6xl md:text-7xl leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Честит рожден ден, любов моя ❤️
                </motion.h1>

                <motion.p
                    className="mt-8 font-body text-base sm:text-lg text-white/85 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    Днес няма да получиш просто подарък.
                    <br />
                    Днес искам да ти припомня колко красива е нашата история.
                </motion.p>

                <motion.button
                    onClick={onStart}
                    className="btn-primary mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    Започни нашето пътешествие
                    <FaChevronDown className="animate-bounce" />
                </motion.button>
            </div>
        </section>
    )
}