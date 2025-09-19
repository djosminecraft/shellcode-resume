import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa'
import GitHubStats from './GitHubStats'
import { useLanguage } from '../contexts/LanguageContext'
import { fetchUserRepos } from '../utils/githubApi'

const Projects = () => {
  const sectionRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [githubProjects, setGithubProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate project cards
    gsap.fromTo('.project-card',
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

    // Hover animations
    gsap.set('.project-card', { transformOrigin: 'center center' })
  }, [])

  // Загружаем проекты из GitHub
  useEffect(() => {
    const loadGitHubProjects = async () => {
      try {
        const repos = await fetchUserRepos()
        const formattedProjects = repos.map((repo, index) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'Проект без описания',
          image: '/api/placeholder/600/400',
          technologies: repo.language ? [repo.language] : ['JavaScript'],
          github: repo.html_url,
          demo: repo.homepage || repo.html_url,
          features: ['GitHub репозиторий', 'Открытый исходный код', 'Версионирование'],
          status: repo.fork ? 'forked' : 'completed',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updated: repo.updated_at
        }))
        setGithubProjects(formattedProjects)
      } catch (error) {
        console.error('Error loading GitHub projects:', error)
        // Fallback to demo projects
        setGithubProjects(getDemoProjects())
      } finally {
        setLoading(false)
      }
    }

    loadGitHubProjects()
  }, [])

  const getDemoProjects = () => [
    {
      id: 1,
      title: 'dll',
      description: 'Dynamic Link Library project',
      image: '/api/placeholder/600/400',
      technologies: ['C++'],
      github: 'https://github.com/djosminecraft/dll',
      demo: 'https://github.com/djosminecraft/dll',
      features: ['C++ разработка', 'Dynamic Link Library', 'Системное программирование'],
      status: 'completed',
      stars: 0,
      forks: 0,
      language: 'C++'
    },
    {
      id: 2,
      title: 'dxsdk',
      description: 'Collection of DirectX SDK headers to facilitate the build of Apitrace',
      image: '/api/placeholder/600/400',
      technologies: ['C++'],
      github: 'https://github.com/djosminecraft/dxsdk',
      demo: 'https://github.com/djosminecraft/dxsdk',
      features: ['DirectX SDK', 'C++ заголовки', 'Apitrace'],
      status: 'completed',
      stars: 0,
      forks: 0,
      language: 'C++'
    },
    {
      id: 3,
      title: 'dasda',
      description: 'Development project',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript'],
      github: 'https://github.com/djosminecraft/dasda',
      demo: 'https://github.com/djosminecraft/dasda',
      features: ['JavaScript разработка', 'Веб-проект', 'Экспериментальный'],
      status: 'completed',
      stars: 0,
      forks: 0,
      language: 'JavaScript'
    },
    {
      id: 4,
      title: 'Spoofer-Drivers',
      description: 'Free UD Spoofer drivers',
      image: '/api/placeholder/600/400',
      technologies: ['C++'],
      github: 'https://github.com/djosminecraft/Spoofer-Drivers',
      demo: 'https://github.com/djosminecraft/Spoofer-Drivers',
      features: ['C++ драйверы', 'Spoofer', 'Системное программирование'],
      status: 'completed',
      stars: 0,
      forks: 0,
      language: 'C++'
    },
    {
      id: 5,
      title: 'xx',
      description: 'Experimental project',
      image: '/api/placeholder/600/400',
      technologies: ['Python'],
      github: 'https://github.com/djosminecraft/xx',
      demo: 'https://github.com/djosminecraft/xx',
      features: ['Python разработка', 'Экспериментальный', 'Исследовательский'],
      status: 'completed',
      stars: 0,
      forks: 0,
      language: 'Python'
    },
    {
      id: 6,
      title: 'Xasdsde2',
      description: 'Development project',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript'],
      github: 'https://github.com/djosminecraft/Xasdsde2',
      demo: 'https://github.com/djosminecraft/Xasdsde2',
      features: ['JavaScript разработка', 'Веб-проект', 'Разработка'],
      status: 'completed',
      stars: 0,
      forks: 0,
      language: 'JavaScript'
    }
  ]

  // Используем проекты из GitHub или демо проекты
  const projects = githubProjects.length > 0 ? githubProjects : getDemoProjects()

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="section-padding relative"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
            {t('projectsTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in">
            {t('projectsDescription')}
          </p>
        </div>

        {/* GitHub Stats Section */}
        <div className="mb-16">
          <GitHubStats />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-300">Загрузка проектов из GitHub...</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card glass-effect rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group cursor-pointer flex flex-col h-full"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <FaCode className="text-6xl text-white opacity-50" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaEye className="text-white text-2xl" />
                </div>
                {project.status === 'in-progress' && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {t('inDevelopment')}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions - Fixed at bottom */}
                <div className="flex space-x-3 mt-auto">
                  <a 
                    href={project.github}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                    <span>{t('viewCodeBtn')}</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                    <span>{t('openDemoBtn')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="glass-effect rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <FaCode className="text-6xl text-white opacity-50" />
                    </div>
                    <p className="text-gray-300 mb-4">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Технологии</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-3">Функции</h4>
                    <ul className="text-gray-300 space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a 
                    href={selectedProject.github}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaGithub />
                    <span>Посмотреть код</span>
                  </a>
                  <a 
                    href={selectedProject.demo}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaExternalLinkAlt />
                    <span>Открыть демо</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
