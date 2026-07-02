import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { galleryData } from '../data/galleryData';

const ITEMS_PER_PAGE = 10;

const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);

    const shuffledPhotos = useMemo(() => shuffleArray(galleryData), []);
    const visiblePhotos = shuffledPhotos.slice(0, visibleCount);
    const hasMore = visibleCount < shuffledPhotos.length;

    // Текущата снимка
    const currentPhoto = selectedIndex !== null ? shuffledPhotos[selectedIndex] : null;

    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, shuffledPhotos.length));
            setIsLoading(false);
        }, 400);
    };

    // Навигация
    const goToPrevious = () => {
        if (selectedIndex === null) return;
        setSelectedIndex(prev => (prev - 1 + shuffledPhotos.length) % shuffledPhotos.length);
    };

    const goToNext = () => {
        if (selectedIndex === null) return;
        setSelectedIndex(prev => (prev + 1) % shuffledPhotos.length);
    };

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            } else if (e.key === 'Escape') {
                setSelectedIndex(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <section className="relative py-24 sm:py-32 px-6">
            <motion.h2
                className="section-heading text-center mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Галерия
            </motion.h2>

            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <AnimatePresence>
                    {visiblePhotos.map((photo, i) => (
                        <motion.button
                            key={photo.id}
                            onClick={() => setSelectedIndex(shuffledPhotos.findIndex(p => p.id === photo.id))}
                            className="glass-card overflow-hidden aspect-square group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: (i % 8) * 0.03 }}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt || 'Спомен'}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="flex justify-center mt-12">
                    <motion.button
                        onClick={loadMore}
                        disabled={isLoading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-gradient-to-r from-purple-900 to-pink-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
                    >
                        {isLoading ? 'Зареждане...' : 'Покажи още снимки'}
                    </motion.button>
                </div>
            )}

            {/* Modal with Navigation */}
            <AnimatePresence>
                {selectedIndex !== null && currentPhoto && (
                    <motion.div
                        className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center px-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-20"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <FaTimes />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-20 p-4"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl z-20 p-4"
                        >
                            <FaChevronRight />
                        </button>

                        {/* Image */}
                        <motion.img
                            key={currentPhoto.src} // важно за анимация при смяна
                            src={currentPhoto.src}
                            alt={currentPhoto.alt || 'Спомен'}
                            className="max-h-[82vh] max-w-full rounded-2xl shadow-2xl"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Counter */}
                        <div className="absolute bottom-12 text-white/70 text-sm font-mono">
                            {selectedIndex + 1} / {shuffledPhotos.length}
                        </div>

                        <p className="mt-8 text-blush-light font-body text-center italic max-w-md">
                            Още един спомен, който винаги ще пазя в сърцето си. ❤️
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}