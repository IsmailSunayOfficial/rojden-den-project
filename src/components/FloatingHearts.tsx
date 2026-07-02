import { useMemo } from 'react'
import { FaHeart } from 'react-icons/fa'

interface FloatingHeartsProps {
  count?: number
}

/**
 * Ambient background layer of slowly rising, softly glowing hearts.
 * Pure CSS-driven (via Tailwind keyframes) so it stays lightweight.
 */
export default function FloatingHearts({ count = 14 }: FloatingHeartsProps) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 22,
        duration: 10 + Math.random() * 12,
        delay: Math.random() * 10,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {hearts.map((h) => (
        <FaHeart
          key={h.id}
          className="absolute bottom-0 text-rose animate-floatUp"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        />
      ))}
    </div>
  )
}
