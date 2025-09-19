import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Experience = () => {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate timeline items
    gsap.fromTo('.timeline-item',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate timeline line
    gsap.fromTo('.timeline-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  const experiences = [
    {
      year: '2023 - настоящее время',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'Москва',
      description: 'Руковожу командой из 5 разработчиков, создаю архитектуру крупных веб-приложений, внедряю новые технологии и методологии разработки.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
      type: 'work'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'WebStudio',
      location: 'Санкт-Петербург',
      description: 'Разрабатывал клиентские приложения для e-commerce платформ, оптимизировал производительность и улучшал пользовательский опыт.',
      technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Webpack'],
      type: 'work'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Frontend Developer',
      company: 'StartupLab',
      location: 'Екатеринбург',
      description: 'Участвовал в создании MVP для стартапов, изучал современные фреймворки и библиотеки, работал в agile-команде.',
      technologies: ['React', 'HTML/CSS', 'JavaScript', 'Git'],
      type: 'work'
    },
    {
      year: '2019 - 2020',
      title: 'Frontend Development',
      company: 'IT Academy',
      location: 'Онлайн',
      description: 'Изучал основы веб-разработки, HTML, CSS, JavaScript, создавал первые проекты и изучал фреймворки.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      type: 'education'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="section-padding relative"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
            {t('experienceTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in">
            {t('experienceDescription')}
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`timeline-item relative flex items-start ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 w-4 h-4 rounded-full border-4 border-white z-10 ${
                  exp.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'
                }`}></div>

                {/* Content */}
                <div className={`glass-effect rounded-xl p-6 ml-16 mr-16 w-full max-w-2xl hover:bg-white/20 transition-all duration-300 ${
                  index % 2 === 0 ? 'ml-16' : 'mr-16'
                }`}>
                  <div className="flex items-center space-x-2 mb-3">
                    <FaBriefcase className="text-blue-400" />
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                      {exp.type === 'work' ? t('work') : t('education')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex items-center space-x-4 mb-3 text-gray-300">
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm">{exp.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaMapMarkerAlt className="text-sm" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-blue-300 mb-3">
                    {exp.company}
                  </h4>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {t('achievements')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-3">50+</div>
              <div className="text-white font-semibold mb-2">{t('completedProjectsCount')}</div>
              <div className="text-gray-300 text-sm">От лендингов до сложных SPA</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-3">15+</div>
              <div className="text-white font-semibold mb-2">{t('happyClientsCount')}</div>
              <div className="text-gray-300 text-sm">Долгосрочное сотрудничество</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-3">5</div>
              <div className="text-white font-semibold mb-2">{t('yearsExperienceCount')}</div>
              <div className="text-gray-300 text-sm">Постоянное развитие</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
