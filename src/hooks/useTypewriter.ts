import { useEffect, useRef, useState } from 'react'

/**
 * Изписва текст буква по буква, само когато `active` е true.
 * Връща изписаната част и дали е приключило.
 */
export function useTypewriter(fullText: string, active: boolean, speedMs = 28) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    if (!active) return
    if (indexRef.current >= fullText.length) {
      setDone(true)
      return
    }

    const timeout = setTimeout(() => {
      indexRef.current += 1
      setDisplayed(fullText.slice(0, indexRef.current))
      if (indexRef.current >= fullText.length) setDone(true)
    }, speedMs)

    return () => clearTimeout(timeout)
  }, [active, displayed, fullText, speedMs])

  return { displayed, done }
}
