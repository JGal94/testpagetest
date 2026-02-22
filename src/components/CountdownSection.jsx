import { useState, useEffect } from 'react'
import './CountdownSection.css'

const START_DATE = new Date('2025-11-21T00:00:00')

function getElapsed() {
  const now = new Date()
  const diff = now - START_DATE

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

export default function CountdownSection() {
  const [elapsed, setElapsed] = useState(getElapsed())

  useEffect(() => {
    const interval = setInterval(() => setElapsed(getElapsed()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="countdown-section reveal">
      <h2 className="section-title">Tiempo juntos ⏳</h2>
      <div className="countdown-grid">
        <div className="count-box">
          <span className="num">{elapsed.days}</span>
          <span className="label">días</span>
        </div>
        <div className="count-box">
          <span className="num">{elapsed.hours}</span>
          <span className="label">horas</span>
        </div>
        <div className="count-box">
          <span className="num">{elapsed.minutes}</span>
          <span className="label">minutos</span>
        </div>
        <div className="count-box">
          <span className="num">{elapsed.seconds}</span>
          <span className="label">segundos</span>
        </div>
      </div>
    </section>
  )
}
