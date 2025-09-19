// GitHub API utilities
const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = 'djosminecraft' // Реальный GitHub аккаунт

export const fetchUserRepos = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
    if (!response.ok) throw new Error('Failed to fetch repos')
    return await response.json()
  } catch (error) {
    console.error('Error fetching repos:', error)
    return []
  }
}

export const fetchRepoDetails = async (repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`)
    if (!response.ok) throw new Error('Failed to fetch repo details')
    return await response.json()
  } catch (error) {
    console.error('Error fetching repo details:', error)
    return null
  }
}

export const fetchRepoLanguages = async (repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`)
    if (!response.ok) throw new Error('Failed to fetch repo languages')
    return await response.json()
  } catch (error) {
    console.error('Error fetching repo languages:', error)
    return {}
  }
}

export const fetchRepoReadme = async (repoName) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/readme`)
    if (!response.ok) throw new Error('Failed to fetch readme')
    const data = await response.json()
    // Decode base64 content
    return atob(data.content)
  } catch (error) {
    console.error('Error fetching readme:', error)
    return null
  }
}

export const fetchUserStats = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`)
    if (!response.ok) throw new Error('Failed to fetch user stats')
    return await response.json()
  } catch (error) {
    console.error('Error fetching user stats:', error)
    return null
  }
}

export const formatRepoData = (repo) => {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    clone_url: repo.clone_url,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    updated_at: repo.updated_at,
    topics: repo.topics || [],
    homepage: repo.homepage,
    size: repo.size
  }
}

export const getLanguageColor = (language) => {
  const colors = {
    'JavaScript': '#f7df1e',
    'TypeScript': '#3178c6',
    'Python': '#3776ab',
    'Java': '#f89820',
    'C++': '#00599c',
    'C#': '#239120',
    'Go': '#00add8',
    'Rust': '#000000',
    'PHP': '#777bb4',
    'Ruby': '#cc342d',
    'Swift': '#fa7343',
    'Kotlin': '#7f52ff',
    'HTML': '#e34c26',
    'CSS': '#1572b6',
    'SCSS': '#cf649a',
    'Vue': '#4fc08d',
    'React': '#61dafb',
    'Angular': '#dd0031',
    'Node.js': '#339933',
    'Dart': '#0175c2',
    'R': '#276dc3',
    'Shell': '#89e051',
    'PowerShell': '#012456',
    'Dockerfile': '#2496ed',
    'YAML': '#cb171e',
    'JSON': '#000000',
    'Markdown': '#083fa1',
    'TeX': '#3d6117',
    'Assembly': '#6e4c13',
    'C': '#a8b9cc',
    'C++': '#00599c',
    'Objective-C': '#438eff',
    'Scala': '#dc322f',
    'Clojure': '#5881d8',
    'Haskell': '#5e5086',
    'Lua': '#000080',
    'Perl': '#39457e',
    'R': '#276dc3',
    'MATLAB': '#e16737',
    'Julia': '#9558b2',
    'Elixir': '#6e4a7e',
    'Erlang': '#a90533',
    'F#': '#b845fc',
    'OCaml': '#3be133',
    'Hack': '#ec4c47',
    'CoffeeScript': '#244776',
    'D': '#ba595e',
    'Dart': '#0175c2',
    'Elm': '#60b5cc',
    'F#': '#b845fc',
    'Fortran': '#4d41b1',
    'Groovy': '#4298b8',
    'Hack': '#ec4c47',
    'Haskell': '#5e5086',
    'Idris': '#b30000',
    'Jupyter Notebook': '#da5b0b',
    'Kotlin': '#7f52ff',
    'Lua': '#000080',
    'MATLAB': '#e16737',
    'Nim': '#ffc200',
    'OCaml': '#3be133',
    'Perl': '#39457e',
    'PowerShell': '#012456',
    'R': '#276dc3',
    'Scala': '#dc322f',
    'Shell': '#89e051',
    'Solidity': '#aa6746',
    'Swift': '#fa7343',
    'TeX': '#3d6117',
    'Vim script': '#199f4b',
    'Vue': '#4fc08d',
    'WebAssembly': '#654ff0',
    'Zig': '#ec915c'
  }
  
  return colors[language] || '#6b7280'
}
