import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

/**
 * Зарежда YouTube IFrame API и дава play/pause контрол
 * над скрит плейър — без нужда от допълнителен npm пакет.
 */
export function useYouTubePlayer(videoId: string) {
  const playerRef = useRef<any>(null)
  const containerId = useRef(`yt-player-${videoId}`)
  const [isPlaying, setIsPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    function createPlayer() {
      playerRef.current = new window.YT.Player(containerId.current, {
        videoId,
        playerVars: { controls: 0, playsinline: 1 },
        events: {
          onReady: () => setReady(true),
          onStateChange: (e: any) => {
            // 1 = playing, 2 = paused, 0 = ended
            if (e.data === 1) setIsPlaying(true)
            if (e.data === 2 || e.data === 0) setIsPlaying(false)
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      createPlayer()
    } else {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
      window.onYouTubeIframeAPIReady = createPlayer
    }

    return () => {
      playerRef.current?.destroy?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId])

  const toggle = () => {
    if (!playerRef.current) return
    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  return { containerId: containerId.current, isPlaying, ready, toggle }
}
