import { useState } from 'react'
import './ReasonsSection.css'

const reasons = [
  {
    icon: '🌟',
    title: 'Tu luz',
    desc: 'Iluminas cualquier lugar con solo estar presente. Eres la persona más brillante que conozco.',
    img: '/imagenes/foto4.jpeg',
    alt: 'Tu luz',
    reveal: 'reveal-left',
  },
  {
    icon: '😂',
    title: 'Tu risa',
    desc: 'Cuando ríes, el mundo entero parece mejor. Podría escucharte reír por siempre.',
    img: '/imagenes/foto6.jpeg',
    alt: 'Tu risa',
    reveal: 'reveal-right',
  },
  {
    icon: '🧠',
    title: 'Tu mente',
    desc: 'Eres inteligente, curiosa y sorprendente. Cada conversación contigo me hace crecer.',
    img: '/imagenes/foto3.jpeg',
    alt: 'Tu mente',
    reveal: 'reveal-left',
  },
  {
    icon: '🤗',
    title: 'Tu corazón',
    desc: 'Tienes el corazón más grande y más bonito. Tu forma de cuidar a quienes amas es única.',
    img: '/imagenes/foto1.jpeg',
    alt: 'Tu corazón',
    reveal: 'reveal-right',
  },
  {
    icon: '✨',
    title: 'Simplemente tú',
    desc: 'Sin más razón que ser Dilana. Eso ya es más que suficiente para amarme perdidamente.',
    img: '/imagenes/foto5.jpeg',
    alt: 'Simplemente tú',
    reveal: 'reveal-left',
  },
  {
    icon: '🦋',
    title: 'Cómo me haces sentir',
    desc: 'Contigo me siento en casa. Seguro, feliz y amado. Gracias por eso.',
    img: '/imagenes/foto2.jpeg',
    alt: 'Cómo me haces sentir',
    reveal: 'reveal-right',
  },
]

function ReasonCard({ reason }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`reason-card ${reason.reveal} ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="reason-card-inner">
        <div className="reason-front">
          <div className="icon">{reason.icon}</div>
          <h3>{reason.title}</h3>
          <p>{reason.desc}</p>
          <span className="flip-hint">· toca para ver ·</span>
        </div>
        <div className="reason-back">
          <img src={reason.img} alt={reason.alt} />
        </div>
      </div>
    </div>
  )
}

export default function ReasonsSection() {
  return (
    <section className="reasons-section">
      <h2 className="section-title">Razones por las que te amo 🌷</h2>
      <div className="reasons-grid">
        {reasons.map((r) => (
          <ReasonCard key={r.title} reason={r} />
        ))}
      </div>
    </section>
  )
}
