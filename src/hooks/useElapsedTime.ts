import { useEffect, useState } from 'react'

export interface ElapsedTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/**
 * Изчислява изминалото време от дадена начална дата до сега,
 * обновявано всяка секунда.
 */
export function useElapsedTime(startDate: Date): ElapsedTime {
  const calculate = (): ElapsedTime => {
    const now = new Date().getTime()
    const diff = Math.max(0, now - startDate.getTime())

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  const [elapsed, setElapsed] = useState<ElapsedTime>(calculate)

  useEffect(() => {
    const interval = setInterval(() => setElapsed(calculate()), 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate])

  return elapsed
}
