import { useState } from 'react'
import './PhotosSection.css'

const photos = [
  {
    front: '/imagenes/foto1.jpeg',
    caption: 'Contigo todo es más bonito, mi amor 💛',
    label: 'Mi sol 🌻',
  },
  {
    front: '/imagenes/foto2.jpeg',
    caption: 'Eres la persona más valiente y hermosa que conozco 🌻',
    label: 'Mi alegría 💛',
  },
  {
    front: '/imagenes/foto3.jpeg',
    caption: 'Te amo hoy, mañana y siempre 💕',
    label: 'Mi todo 💕',
  },
]

function PhotoCard({ photo }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`photo-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="photo-card-inner">
        <div className="photo-front">
          <img src={photo.front} alt={photo.label} />
          <p>{photo.label}</p>
        </div>
        <div className="photo-back">
          <p>{photo.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default function PhotosSection() {
  return (
    <section className="photos-section reveal">
      <h2 className="section-title">Nuestros momentos 📸</h2>
      <div className="photos-grid">
        {photos.map((p) => (
          <PhotoCard key={p.label} photo={p} />
        ))}
      </div>
    </section>
  )
}
