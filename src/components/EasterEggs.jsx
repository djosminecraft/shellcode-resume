import { useEffect, useState } from 'react'
import { FaTerminal, FaCode, FaGamepad, FaMoon, FaSun } from 'react-icons/fa'

const EasterEggs = () => {
  const [konamiCode, setKonamiCode] = useState([])
  const [showTerminal, setShowTerminal] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([])
  const [darkMode, setDarkMode] = useState(false)
  const [gameMode, setGameMode] = useState(false)

  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ]

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newCode = [...konamiCode, e.code]
      setKonamiCode(newCode)

      // Check for Konami code
      if (newCode.length >= konamiSequence.length) {
        const isKonami = konamiSequence.every((key, index) => 
          newCode[newCode.length - konamiSequence.length + index] === key
        )
        
        if (isKonami) {
          setShowTerminal(true)
          setKonamiCode([])
        }
      }

      // Keep only last 10 keys
      if (newCode.length > 10) {
        setKonamiCode(newCode.slice(-10))
      }

      // Special key combinations
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        setShowTerminal(true)
      }

      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault()
        setDarkMode(!darkMode)
      }

      if (e.ctrlKey && e.key === 'g') {
        e.preventDefault()
        setGameMode(!gameMode)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiCode, darkMode, gameMode])

  const terminalCommands = {
    help: () => 'Доступные команды: help, about, skills, projects, contact, clear, matrix, game',
    about: () => 'Привет! Я SHELL CODE, Frontend Developer с 5+ летним опытом.',
    skills: () => 'JavaScript, React, Vue.js, TypeScript, Node.js, CSS/SCSS, GSAP, Three.js',
    projects: () => 'E-Commerce Platform, Task Management App, Portfolio Website, Real-time Chat App',
    contact: () => 'Email: alex.petrov@example.com | Phone: +7 (999) 123-45-67',
    clear: () => {
      setTerminalHistory([])
      return ''
    },
    matrix: () => {
      // Matrix rain effect
      const matrix = document.createElement('div')
      matrix.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 9999;
        color: #0f0;
        font-family: monospace;
        font-size: 14px;
        overflow: hidden;
      `
      document.body.appendChild(matrix)
      
      setTimeout(() => {
        document.body.removeChild(matrix)
      }, 5000)
      
      return 'Matrix mode activated!'
    },
    game: () => {
      setGameMode(true)
      return 'Game mode activated! Try to catch the moving target!'
    }
  }

  const handleTerminalSubmit = (e) => {
    e.preventDefault()
    if (!terminalInput.trim()) return

    const command = terminalInput.toLowerCase().trim()
    const response = terminalCommands[command] || `Команда "${command}" не найдена. Введите "help" для списка команд.`
    
    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', content: terminalInput },
      { type: 'output', content: response }
    ])
    
    setTerminalInput('')
  }

  const SnakeGame = () => {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }])
    const [food, setFood] = useState({ x: 15, y: 15 })
    const [direction, setDirection] = useState({ x: 0, y: 0 })
    const [gameOver, setGameOver] = useState(false)

    useEffect(() => {
      const handleKeyPress = (e) => {
        switch (e.key) {
          case 'ArrowUp':
            setDirection({ x: 0, y: -1 })
            break
          case 'ArrowDown':
            setDirection({ x: 0, y: 1 })
            break
          case 'ArrowLeft':
            setDirection({ x: -1, y: 0 })
            break
          case 'ArrowRight':
            setDirection({ x: 1, y: 0 })
            break
        }
      }

      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }, [])

    if (gameOver) {
      return (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-red-400 mb-4">Game Over!</h3>
          <button 
            onClick={() => {
              setSnake([{ x: 10, y: 10 }])
              setFood({ x: 15, y: 15 })
              setDirection({ x: 0, y: 0 })
              setGameOver(false)
            }}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Play Again
          </button>
        </div>
      )
    }

    return (
      <div className="text-center">
        <h3 className="text-xl font-bold text-green-400 mb-4">Snake Game</h3>
        <p className="text-gray-300 mb-4">Use arrow keys to control the snake</p>
        <div className="w-80 h-80 bg-black border-2 border-green-400 mx-auto relative">
          {/* Snake */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute w-4 h-4 bg-green-400"
              style={{
                left: segment.x * 16,
                top: segment.y * 16
              }}
            />
          ))}
          {/* Food */}
          <div
            className="absolute w-4 h-4 bg-red-400"
            style={{
              left: food.x * 16,
              top: food.y * 16
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Terminal Modal */}
      {showTerminal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl h-96 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <FaTerminal className="text-green-400" />
                <span className="text-white font-mono">Developer Terminal</span>
              </div>
              <button 
                onClick={() => setShowTerminal(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="text-green-400 font-mono text-sm space-y-2">
                <div>Welcome to the developer terminal!</div>
                <div>Type 'help' to see available commands.</div>
                {terminalHistory.map((item, index) => (
                  <div key={index}>
                    {item.type === 'input' && (
                      <div className="text-blue-400">$ {item.content}</div>
                    )}
                    {item.type === 'output' && (
                      <div className="text-white">{item.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleTerminalSubmit} className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-mono">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent text-white font-mono outline-none"
                  placeholder="Enter command..."
                  autoFocus
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Game Mode */}
      {gameMode && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <FaGamepad className="text-green-400" />
                <span>Easter Egg Game</span>
              </h3>
              <button 
                onClick={() => setGameMode(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <SnakeGame />
          </div>
        </div>
      )}

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-40"
        title="Toggle theme (Ctrl+D)"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Developer Mode Indicator */}
      <div className="fixed top-4 right-4 glass-effect rounded-lg px-3 py-1 text-xs text-gray-300 z-40">
        <FaCode className="inline mr-1" />
        Dev Mode
      </div>
    </>
  )
}

export default EasterEggs
