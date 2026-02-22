import { useEffect, useRef } from 'react'
import './FinalSection.css'

function launchConfetti() {
  const colors = ['#f5c800', '#e0a800', '#fff3b0', '#ffdd00', '#ffe066', '#ffd700']
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const piece = document.createElement('div')
      piece.className = 'confetti-piece'
      piece.style.left = Math.random() * 100 + 'vw'
      piece.style.top = '-20px'
      piece.style.background = colors[Math.floor(Math.random() * colors.length)]
      piece.style.animationDuration = (Math.random() * 2 + 2) + 's'
      piece.style.transform = `rotate(${Math.random() * 360}deg)`
      document.body.appendChild(piece)
      setTimeout(() => piece.remove(), 4000)
    }, i * 30)
  }
}

export default function FinalSection() {
  const sectionRef = useRef(null)
  const launched = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !launched.current) {
          launched.current = true
          launchConfetti()
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="final-section reveal" ref={sectionRef}>
      <span className="big-heart">💛</span>
      <h2>Te amo, Dilana</h2>
      <p>Hoy, mañana y siempre. Gracias por existir.</p>
    </section>
  )
}
