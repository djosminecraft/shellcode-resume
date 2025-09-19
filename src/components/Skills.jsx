import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaSass, 
  FaGitAlt, 
  FaFigma,
  FaBootstrap,
  FaGithub,
  FaNpm
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiWebpack, 
  SiVite,
  SiAdobephotoshop,
  SiVuedotjs
} from 'react-icons/si'
import { 
  FaBolt,
  FaCube,
  FaPalette
} from 'react-icons/fa'

const Skills = () => {
  const sectionRef = useRef(null)
  const progressBarsRef = useRef([])
  const { t } = useLanguage()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate progress bars
    progressBarsRef.current.forEach((bar, index) => {
      if (bar) {
        gsap.fromTo(bar,
          { width: 0 },
          {
            width: bar.dataset.width,
            duration: 1.5,
            ease: 'power2.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: bar,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    })

    // Animate skill cards
    gsap.fromTo('.skill-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  const skills = [
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-500' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-green-600' },
    { name: 'CSS/SCSS', level: 90, color: 'from-pink-400 to-purple-500' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-blue-500' },
    { name: 'GSAP', level: 70, color: 'from-green-500 to-green-400' }
  ]

  const technologies = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Vue.js', icon: SiVuedotjs },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Sass', icon: FaSass },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'GSAP', icon: FaBolt },
    { name: 'Three.js', icon: FaCube },
    { name: 'Webpack', icon: SiWebpack },
    { name: 'Vite', icon: SiVite },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Figma', icon: FaFigma },
    { name: 'Photoshop', icon: SiAdobephotoshop }
  ]

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section-padding relative"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
            {t('skillsTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in">
            {t('skillsDescription')}
          </p>
        </div>

        {/* Skills Progress */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass-effect rounded-lg p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  ref={el => progressBarsRef.current[index] = el}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
                  data-width={`${skill.level}%`}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div 
                key={index}
                className="skill-card glass-effect rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-blue-400" />
                </div>
                <div className="text-white text-sm font-medium">
                  {tech.name}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('whatICanDo')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('frontendDev')}</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• {t('frontendDesc1')}</li>
                  <li>• {t('frontendDesc2')}</li>
                  <li>• {t('frontendDesc3')}</li>
                  <li>• {t('frontendDesc4')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('uiuxDesign')}</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• {t('uiuxDesc1')}</li>
                  <li>• {t('uiuxDesc2')}</li>
                  <li>• {t('uiuxDesc3')}</li>
                  <li>• {t('uiuxDesc4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
