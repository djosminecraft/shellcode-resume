import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru')

  const translations = {
    ru: {
      // Navigation
      about: 'Обо мне',
      skills: 'Навыки',
      experience: 'Опыт',
      projects: 'Проекты',
      contact: 'Контакты',
      downloadCV: 'Скачать CV',
      
      // Hero Section
      heroTitle: 'SHELL CODE',
      heroSubtitle: 'Frontend Developer & UI/UX Designer',
      heroDescription: 'Создаю интерактивные веб-приложения с современными технологиями',
      downloadResume: 'Скачать резюме',
      viewCode: 'Посмотреть код',
      
      // About Section
      aboutTitle: 'Обо мне',
      aboutDescription: 'Привет! Я фронтенд-разработчик с 5+ летним опытом создания интерактивных веб-приложений. Увлекаюсь современными технологиями и создаю пользовательские интерфейсы, которые не только красивы, но и функциональны.',
      development: 'Разработка',
      developmentDesc: 'Создаю современные веб-приложения с React, Vue.js и Node.js',
      design: 'Дизайн',
      designDesc: 'Разрабатываю интуитивные и красивые пользовательские интерфейсы',
      innovation: 'Инновации',
      innovationDesc: 'Изучаю новые технологии и внедряю их в проекты',
      quality: 'Качество',
      qualityDesc: 'Стремлюсь к написанию чистого, поддерживаемого кода',
      yearsExperience: 'Лет опыта',
      completedProjects: 'Завершенных проектов',
      happyClients: 'Довольных клиентов',
      
      // Skills Section
      skillsTitle: 'Навыки и технологии',
      skillsDescription: 'Постоянно изучаю новые технологии и совершенствую свои навыки. Вот основные инструменты, с которыми я работаю:',
      frontendDev: 'Frontend Development',
      frontendDesc1: 'Создание адаптивных веб-приложений',
      frontendDesc2: 'Интерактивные анимации и переходы',
      frontendDesc3: 'Оптимизация производительности',
      frontendDesc4: 'Кроссбраузерная совместимость',
      uiuxDesign: 'UI/UX Design',
      uiuxDesc1: 'Проектирование пользовательских интерфейсов',
      uiuxDesc2: 'Создание прототипов и макетов',
      uiuxDesc3: 'Анализ пользовательского опыта',
      uiuxDesc4: 'Работа с дизайн-системами',
      whatICanDo: 'Что я умею',
      technologiesTitle: 'Технологии',
      
      // Experience Section
      experienceTitle: 'Опыт работы',
      experienceDescription: 'Мой путь в веб-разработке: от первых шагов до руководства командой',
      work: 'Работа',
      education: 'Обучение',
      achievements: 'Достижения',
      completedProjectsCount: 'Завершенных проектов',
      happyClientsCount: 'Довольных клиентов',
      yearsExperienceCount: 'Лет опыта',
      freelance: 'Фриланс',
      fullstackDeveloper: 'Fullstack разработчик',
      frontendLead: 'Frontend Lead',
      webDeveloper: 'Веб-разработчик',
      intern: 'Стажер',
      university: 'Университет',
      bachelorDegree: 'Бакалавр компьютерных наук',
      onlineCourses: 'Онлайн курсы',
      specialization: 'Специализация по Frontend',
      freelanceProjects: 'Фриланс проекты',
      variousClients: 'Разработка для различных клиентов',
      
      // Projects Section
      projectsTitle: 'Мои проекты',
      projectsDescription: 'Коллекция проектов, демонстрирующих мои навыки и подход к разработке',
      viewCodeBtn: 'Код',
      openDemoBtn: 'Демо',
      inDevelopment: 'В разработке',
      
      // Contact Section
      contactTitle: 'Свяжитесь со мной',
      contactDescription: 'Готов обсудить ваш проект и ответить на любые вопросы',
      contactInfo: 'Контактная информация',
      socialNetworks: 'Социальные сети',
      responseTime: 'Время ответа',
      responseTimeDesc: 'Обычно отвечаю в течение 24 часов',
      available: 'Доступен для работы',
      writeMe: 'Напишите мне',
      name: 'Имя',
      namePlaceholder: 'Ваше имя',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      subject: 'Тема',
      subjectPlaceholder: 'Тема сообщения',
      message: 'Сообщение',
      messagePlaceholder: 'Расскажите о вашем проекте...',
      sendMessage: 'Отправить сообщение',
      sending: 'Отправка...',
      messageSent: 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.',
      
      // GitHub Stats
      githubStats: 'GitHub статистика',
      repositories: 'Репозитории',
      followers: 'Подписчики',
      following: 'Подписки',
      gists: 'Gists',
      recentRepos: 'Последние репозитории',
      programmingLanguages: 'Языки программирования',
      openRepo: 'Открыть →',
      demoRepos: 'Демо репозитории',
      githubSetup: 'Для подключения реальных данных GitHub:',
      githubSetupDesc: 'Отредактируйте GITHUB_USERNAME в src/utils/githubApi.js',
      githubApiUnavailable: 'GitHub API недоступен. Показываем демо данные.',
      githubApiSetup: 'Для настройки: отредактируйте GITHUB_USERNAME в src/utils/githubApi.js',
      loadingGithubData: 'Загрузка данных GitHub...',
      messageFailed: 'Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.',
      
      // Easter Eggs
      konamiCode: 'Код Konami активирован! Открыт терминал разработчика.',
      terminalWelcome: 'Добро пожаловать в терминал разработчика. Введите "help" для списка команд.',
      terminalHelp: 'Доступные команды: help, clear, snake, matrix, theme',
      terminalClear: 'Консоль очищена.',
      terminalUnknown: 'Неизвестная команда: ',
      terminalSnakeStart: 'Запуск игры "Змейка"...',
      terminalMatrixStart: 'Запуск эффекта "Матрица"...',
      terminalThemeToggle: 'Тема переключена.',
      terminalSnakeGameOver: 'Игра окончена! Ваш счет: ',
      terminalSnakeRestart: 'Нажмите R для перезапуска.',
      terminalSnakeControls: 'Управление: WASD или стрелки.',
      terminalSnakePause: 'Пауза. Нажмите P для продолжения.',
      terminalSnakeResume: 'Продолжение игры.',
      terminalSnakeExit: 'Выход из игры.',
      terminalSnakeExitMessage: 'Вы вышли из игры "Змейка".',
      terminalMatrixExit: 'Выход из эффекта "Матрица".',
      terminalMatrixExitMessage: 'Вы вышли из эффекта "Матрица".',
      terminalThemeLight: 'Светлая тема активирована.',
      terminalThemeDark: 'Темная тема активирована.'
    },
    en: {
      // Navigation
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      downloadCV: 'Download CV',
      
      // Hero Section
      heroTitle: 'SHELL CODE',
      heroSubtitle: 'Frontend Developer & UI/UX Designer',
      heroDescription: 'Creating interactive web applications with modern technologies',
      downloadResume: 'Download Resume',
      viewCode: 'View Code',
      
      // About Section
      aboutTitle: 'About Me',
      aboutDescription: 'Hello! I\'m a frontend developer with 5+ years of experience creating interactive web applications. I\'m passionate about modern technologies and creating user interfaces that are not only beautiful but also functional.',
      development: 'Development',
      developmentDesc: 'Creating modern web applications with React, Vue.js and Node.js',
      design: 'Design',
      designDesc: 'Developing intuitive and beautiful user interfaces',
      innovation: 'Innovation',
      innovationDesc: 'Learning new technologies and implementing them in projects',
      quality: 'Quality',
      qualityDesc: 'Striving to write clean, maintainable code',
      yearsExperience: 'Years of Experience',
      completedProjects: 'Completed Projects',
      happyClients: 'Happy Clients',
      
      // Skills Section
      skillsTitle: 'Skills & Technologies',
      skillsDescription: 'Constantly learning new technologies and improving my skills. Here are the main tools I work with:',
      frontendDev: 'Frontend Development',
      frontendDesc1: 'Creating responsive web applications',
      frontendDesc2: 'Interactive animations and transitions',
      frontendDesc3: 'Performance optimization',
      frontendDesc4: 'Cross-browser compatibility',
      uiuxDesign: 'UI/UX Design',
      uiuxDesc1: 'User interface design',
      uiuxDesc2: 'Creating prototypes and mockups',
      uiuxDesc3: 'User experience analysis',
      uiuxDesc4: 'Working with design systems',
      whatICanDo: 'What I Can Do',
      technologiesTitle: 'Technologies',
      
      // Experience Section
      experienceTitle: 'Work Experience',
      experienceDescription: 'My journey in web development: from first steps to team leadership',
      work: 'Work',
      education: 'Education',
      achievements: 'Achievements',
      completedProjectsCount: 'Completed Projects',
      happyClientsCount: 'Happy Clients',
      yearsExperienceCount: 'Years of Experience',
      freelance: 'Freelance',
      fullstackDeveloper: 'Fullstack Developer',
      frontendLead: 'Frontend Lead',
      webDeveloper: 'Web Developer',
      intern: 'Intern',
      university: 'University',
      bachelorDegree: 'Bachelor of Computer Science',
      onlineCourses: 'Online Courses',
      specialization: 'Frontend Specialization',
      freelanceProjects: 'Freelance Projects',
      variousClients: 'Development for various clients',
      
      // Projects Section
      projectsTitle: 'My Projects',
      projectsDescription: 'A collection of projects demonstrating my skills and development approach',
      viewCodeBtn: 'Code',
      openDemoBtn: 'Demo',
      inDevelopment: 'In Development',
      
      // Contact Section
      contactTitle: 'Contact Me',
      contactDescription: 'Ready to discuss your project and answer any questions',
      contactInfo: 'Contact Information',
      socialNetworks: 'Social Networks',
      responseTime: 'Response Time',
      responseTimeDesc: 'Usually respond within 24 hours',
      available: 'Available for work',
      writeMe: 'Write to me',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'Message subject',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      messageSent: 'Message sent successfully! I will contact you soon.',
      
      // GitHub Stats
      githubStats: 'GitHub Statistics',
      repositories: 'Repositories',
      followers: 'Followers',
      following: 'Following',
      gists: 'Gists',
      recentRepos: 'Recent Repositories',
      programmingLanguages: 'Programming Languages',
      openRepo: 'Open →',
      demoRepos: 'Demo Repositories',
      githubSetup: 'To connect real GitHub data:',
      githubSetupDesc: 'Edit GITHUB_USERNAME in src/utils/githubApi.js',
      githubApiUnavailable: 'GitHub API is unavailable. Showing demo data.',
      githubApiSetup: 'To configure: edit GITHUB_USERNAME in src/utils/githubApi.js',
      loadingGithubData: 'Loading GitHub data...',
      messageFailed: 'Failed to send message. Please try again.',
      
      // Easter Eggs
      konamiCode: 'Konami Code activated! Developer terminal opened.',
      terminalWelcome: 'Welcome to the developer terminal. Type "help" for commands.',
      terminalHelp: 'Available commands: help, clear, snake, matrix, theme',
      terminalClear: 'Console cleared.',
      terminalUnknown: 'Unknown command: ',
      terminalSnakeStart: 'Starting Snake game...',
      terminalMatrixStart: 'Starting Matrix effect...',
      terminalThemeToggle: 'Theme toggled.',
      terminalSnakeGameOver: 'Game Over! Your score: ',
      terminalSnakeRestart: 'Press R to restart.',
      terminalSnakeControls: 'Controls: WASD or arrow keys.',
      terminalSnakePause: 'Paused. Press P to resume.',
      terminalSnakeResume: 'Resuming game.',
      terminalSnakeExit: 'Exiting game.',
      terminalSnakeExitMessage: 'You exited the Snake game.',
      terminalMatrixExit: 'Exiting Matrix effect.',
      terminalMatrixExitMessage: 'You exited the Matrix effect.',
      terminalThemeLight: 'Light theme activated.',
      terminalThemeDark: 'Dark theme activated.'
    }
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}