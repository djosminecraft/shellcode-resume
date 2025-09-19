import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTelegram, FaMouse } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, t, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('experience'), href: '#experience' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <span className="text-white font-semibold text-xl">SHELL CODE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/djosminecraft" className="text-white hover:text-blue-300 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-blue-300 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://t.me" className="text-white hover:text-blue-300 transition-colors">
              <FaTelegram size={20} />
            </a>
            <button className="btn-primary">
              {t('downloadCV')}
            </button>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 font-medium"
            >
              {language === 'ru' ? 'ENG' : 'RU'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                <a href="https://github.com/djosminecraft" className="text-white hover:text-blue-300 transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" className="text-white hover:text-blue-300 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://t.me" className="text-white hover:text-blue-300 transition-colors">
                  <FaTelegram size={20} />
                </a>
              </div>
              <div className="flex space-x-2">
                <button className="btn-primary flex-1">
                  {t('downloadCV')}
                </button>
                <button 
                  onClick={toggleLanguage}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 font-medium"
                >
                  {language === 'ru' ? 'ENG' : 'RU'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
