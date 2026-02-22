import { useEffect, useRef } from 'react'
import './HeartsBackground.css'

export default function HeartsBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const emojis = ['💛', '🌟', '✨', '🌻', '💕', '⭐']
    const container = containerRef.current
    const hearts = []

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('span')
      heart.className = 'heart'
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)]
      heart.style.left = Math.random() * 100 + '%'
      heart.style.animationDuration = (Math.random() * 8 + 6) + 's'
      heart.style.animationDelay = (Math.random() * 8) + 's'
      heart.style.fontSize = (Math.random() * 1 + 1) + 'rem'
      container.appendChild(heart)
      hearts.push(heart)
    }

    return () => hearts.forEach((h) => h.remove())
  }, [])

  return <div className="hearts-bg" ref={containerRef} />
}
