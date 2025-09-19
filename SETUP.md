# 🚀 Настройка интерактивного резюме

## 📋 Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка GitHub API
Откройте файл `src/utils/githubApi.js` и замените:
```javascript
const GITHUB_USERNAME = 'your-username' // Замените на ваш GitHub username
```

### 3. Настройка EmailJS (опционально)
1. Зарегистрируйтесь на [EmailJS](https://www.emailjs.com/)
2. Создайте сервис и шаблон
3. Добавьте ваши ключи в компонент Contact

### 4. Запуск проекта
```bash
npm run dev
```

## 🎨 Кастомизация

### Изменение цветовой схемы
Отредактируйте `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Ваши цвета
      }
    }
  }
}
```

### Добавление ваших данных
1. **Hero Section**: `src/components/HeroSection.jsx`
2. **Обо мне**: `src/components/About.jsx`
3. **Навыки**: `src/components/Skills.jsx`
4. **Опыт**: `src/components/Experience.jsx`
5. **Проекты**: `src/components/Projects.jsx`
6. **Контакты**: `src/components/Contact.jsx`

### Настройка анимаций
Отредактируйте GSAP анимации в `src/App.jsx` и отдельных компонентах.

## 🎮 Пасхалки

### Секретные команды:
- **Konami Code**: ↑↑↓↓←→←→BA - открывает терминал
- **Ctrl+K**: Открыть терминал разработчика
- **Ctrl+D**: Переключить тему
- **Ctrl+G**: Игровой режим

### Терминальные команды:
- `help` - список команд
- `about` - информация обо мне
- `skills` - мои навыки
- `projects` - список проектов
- `contact` - контактная информация
- `matrix` - Matrix эффект
- `game` - мини-игра Snake
- `clear` - очистить терминал

## 🚀 Деплой

### Vercel (рекомендуется)
1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Деплой автоматический

### Netlify
1. Соберите проект: `npm run build`
2. Загрузите папку `dist` в Netlify
3. Настройте redirects для SPA

### GitHub Pages
1. Установите `gh-pages`: `npm install --save-dev gh-pages`
2. Добавьте в `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```
3. Запустите: `npm run deploy`

## 📱 PWA настройка

Для превращения в PWA добавьте в `public/`:
- `manifest.json`
- `sw.js`
- Иконки разных размеров

## 🔧 Дополнительные возможности

### Добавление новых секций
1. Создайте компонент в `src/components/`
2. Добавьте в `src/App.jsx`
3. Обновите навигацию в `src/components/Navigation.jsx`

### Интеграция с CMS
- Strapi
- Contentful
- Sanity

### Аналитика
- Google Analytics
- Hotjar
- Mixpanel

## 🎯 Оптимизация

### Производительность
- Lazy loading компонентов
- Оптимизация изображений
- Code splitting

### SEO
- Meta теги
- Open Graph
- Schema.org разметка

## 🐛 Решение проблем

### Ошибки GSAP
Убедитесь, что ScrollTrigger зарегистрирован:
```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```

### Проблемы с Three.js
Проверьте совместимость версий в `package.json`

### GitHub API лимиты
Используйте GitHub токен для увеличения лимитов запросов.

---

**Удачи в создании вашего интерактивного резюме! 🚀**
