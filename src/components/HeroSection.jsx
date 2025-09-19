import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaGithub, FaLinkedin, FaTelegram, FaDownload, FaCode } from 'react-icons/fa'
import ThreeScene from './ThreeScene'
import { useLanguage } from '../contexts/LanguageContext'

const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )

    // Floating animation for avatar
    gsap.to('.floating-avatar', {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
  }, [])

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      
      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-30">
        <ThreeScene className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="floating-avatar mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              SC
            </div>
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="gradient-text">{t('heroTitle')}</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {t('heroSubtitle')}
            <br />
            <span className="text-lg text-blue-300">
              {t('heroDescription')}
            </span>
          </p>

          {/* Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center space-x-2 group">
              <FaDownload className="group-hover:animate-bounce" />
              <span>{t('downloadResume')}</span>
            </button>
            
            <button className="btn-secondary flex items-center space-x-2 group">
              <FaCode className="group-hover:rotate-12 transition-transform" />
              <span>{t('viewCode')}</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a 
              href="https://github.com/djosminecraft" 
              className="text-white hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-white hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="https://t.me" 
              className="text-white hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegram size={28} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
