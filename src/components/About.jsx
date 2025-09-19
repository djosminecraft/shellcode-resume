import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCode, FaPalette, FaRocket, FaHeart } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate cards on scroll
    gsap.fromTo('.about-card',
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Floating animation for icons
    gsap.to('.floating-icon', {
      y: -10,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    })
  }, [])

  const interests = [
    {
      icon: FaCode,
      title: t('development'),
      description: t('developmentDesc')
    },
    {
      icon: FaPalette,
      title: t('design'),
      description: t('designDesc')
    },
    {
      icon: FaRocket,
      title: t('innovation'),
      description: t('innovationDesc')
    },
    {
      icon: FaHeart,
      title: t('quality'),
      description: t('qualityDesc')
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding relative"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              ref={cardRef}
              className="about-card glass-effect rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="floating-icon mb-4 flex justify-center">
                <interest.icon 
                  className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors" 
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {interest.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center about-card">
            <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-300">{t('yearsExperience')}</div>
          </div>
          <div className="text-center about-card">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">{t('completedProjects')}</div>
          </div>
          <div className="text-center about-card">
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300">{t('happyClients')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
