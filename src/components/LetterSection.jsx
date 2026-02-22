import { useState } from 'react'
import './LetterSection.css'

export default function LetterSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="letter-section reveal">
      <div className={`envelope-container ${open ? 'open' : ''}`}>
        {/* Envelope */}
        <div className="envelope-outer" onClick={() => setOpen(true)}>
          <div className="flap-wrapper">
            <div className="envelope-flap" />
          </div>
          <div className="envelope-center">
            <span className="wax-seal">💌</span>
            <p className="envelope-to">Para ti, Dilana</p>
            <span className="click-hint">· toca para abrir ·</span>
          </div>
        </div>

        {/* Letter */}
        <div className="letter-card">
          <p>Mi querida Dilana,</p>
          <p>
            Tu sonrisa tiene el poder de convertir los días más grises en algo brillante.
            Tu forma de ver el mundo, de reír, de ser tú misma... me enamora más cada vez.
          </p>
          <p>
            Esta página no es suficiente para expresar todo lo que siento.
            Pero espero que cada vez que la abras, recuerdes cuánto te quiero
            y lo importante que eres para mí. ✨
          </p>
          <div className="signature">Con todo mi amor 💖</div>
        </div>
      </div>
    </section>
  )
}
