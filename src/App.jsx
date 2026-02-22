import { useEffect } from 'react'
import HeartsBackground from './components/HeartsBackground'
import HeroSection from './components/HeroSection'
import LetterSection from './components/LetterSection'
import ReasonsSection from './components/ReasonsSection'
import PhotosSection from './components/PhotosSection'
import CountdownSection from './components/CountdownSection'
import FinalSection from './components/FinalSection'

function App() {
  // Sparkle on click
  useEffect(() => {
    const emojis = ['✨', '💛', '🌟', '💕', '🌻', '⭐']

    const handleClick = (e) => {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)]
      sparkle.style.left = e.clientX + 'px'
      sparkle.style.top = e.clientY + 'px'
      document.body.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), 800)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeartsBackground />
      <HeroSection />
      <LetterSection />
      <ReasonsSection />
      <PhotosSection />
      <CountdownSection />
      <FinalSection />
    </>
  )
}

export default App
