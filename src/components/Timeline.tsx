import { motion } from 'framer-motion'
import { timelineData } from '../data/timelineData'

export default function Timeline() {
    return (
        <section className="relative py-24 sm:py-32 px-6">
            <motion.h2
                className="section-heading text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Нашата история
            </motion.h2>

            <div className="max-w-4xl mx-auto flex flex-col gap-16 sm:gap-24">
                {timelineData.map((moment, i) => {
                    const reversed = i % 2 === 1

                    return (
                        <motion.div
                            key={moment.id}
                            className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                                } items-center gap-8 md:gap-12`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Медия (Снимка или Видео) */}
                            <div className="w-full md:w-2/5 shrink-0">
                                <div className="glass-card overflow-hidden aspect-[4/5] shadow-xl relative">
                                    {moment.video ? (
                                        <video
                                            src={moment.video}
                                            controls
                                            className="w-full h-full object-cover"
                                            poster={moment.image} // може да сложиш thumbnail снимка
                                        />
                                    ) : moment.image ? (
                                        <img
                                            src={moment.image}
                                            alt={moment.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    ) : null}
                                </div>
                            </div>

                            {/* Текстова част */}
                            <div className="w-full md:w-3/5 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl text-rose-light mb-4">
                                    {moment.title}
                                </h3>
                                <div className="space-y-3">
                                    {moment.text.map((line, idx) => (
                                        <p
                                            key={idx}
                                            className="text-white/85 font-body leading-relaxed text-[17px]"
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}