import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import { languagesData } from '../data/languagesData'

export default function LoveInLanguages() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        if (!query.trim()) return languagesData
        const q = query.trim().toLowerCase()
        return languagesData.filter((l) =>
            l.language.toLowerCase().includes(q) ||
            l.phrase.toLowerCase().includes(q)
        )
    }, [query])

    const current = languagesData[selectedIndex]

    return (
        <section className="relative py-24 sm:py-32 px-6 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-xl mb-12"
            >
                <p className="font-body text-white/70 text-lg leading-relaxed">
                    Няма значение на какъв език ще го кажа...
                    <br />
                    Значението винаги остава едно.
                </p>
            </motion.div>

            {/* Голямата карта с избран език */}
            <div className="glass-card w-full max-w-md h-64 sm:h-72 flex flex-col items-center justify-center px-6 relative overflow-hidden mb-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.language}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center"
                    >
                        <span className="text-6xl mb-4 drop-shadow-md">{current.flag}</span>
                        <span className="text-3xl sm:text-4xl text-rose-light font-semibold leading-tight">
                            {current.phrase}
                        </span>
                        <span className="mt-4 text-lg text-white/70 font-body">
                            {current.language}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Търсачка */}
            <div className="relative w-full max-w-sm mb-8">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Търси език или фраза..."
                    className="w-full glass-card !rounded-full pl-11 pr-4 py-3 text-sm font-body text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-rose/60"
                />
            </div>

            {/* Grid със знамената */}
            <div className="w-full max-w-3xl glass-card p-6">
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                    {filtered.map((item) => {
                        const originalIndex = languagesData.indexOf(item)
                        const isSelected = originalIndex === selectedIndex

                        return (
                            <motion.button
                                key={item.language}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedIndex(originalIndex)}
                                className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 text-2xl transition-all duration-200 border-2 ${isSelected
                                        ? 'bg-rose/20 border-rose scale-110 shadow-lg'
                                        : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20'
                                    }`}
                                title={`${item.language} — ${item.phrase}`}
                            >
                                <span className="text-3xl">{item.flag}</span>
                                <span className="text-[10px] text-white/60 font-mono mt-1">
                                    {item.language.slice(0, 8)}
                                </span>
                            </motion.button>
                        )
                    })}
                </div>

                {filtered.length === 0 && (
                    <p className="text-white/40 py-12">Няма намерен език 😔</p>
                )}
            </div>

            <p className="mt-6 text-xs text-white/40">
                {languagesData.length} езика • Кликни на знамето
            </p>
        </section>
    )
}