# Birthday Universe 🌟

A fully responsive, emotionally immersive birthday website for Cuttuuu, built with React, Vite, Tailwind CSS, and Framer Motion.

**Live Demo**: Deploy to Netlify and share the link with your special person! 💜

## 🎨 Features

✨ **Cinematic Design**
- Dark navy night-sky aesthetic with glowing elements
- Lavender gradients and soft pink accents
- Glassmorphism cards with smooth animations
- Parallax scrolling and floating effects

🎂 **Interactive Sections**
1. **Loading Screen** - Animated stars and glowing text
2. **Hero Section** - Typewriter effect, animated buttons
3. **Nickname Constellation** - Interactive glowing stars with messages
4. **Memory Gallery** - Floating polaroid cards with modal view
5. **Countdown Timer** - Beautiful glowing live countdown
6. **Music Section** - Song cards with lyrics and personal messages
7. **Voice Notes** - Floating music player style popups
8. **Open When Letters** - Emotional envelopes for different moments
9. **Final Message** - Confetti celebration with handwritten text
10. **Cursor Effects** - Sparkly particle trails
11. **Background Effects** - Animated stars, hearts, particles, shooting stars

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/deepya001/birthday-yay
cd birthday-yay

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:3000`

## 🎯 Customization Guide

### 1. **Edit Messages & Text**

File: `src/data/messages.js`
```javascript
export const CONSTELLATION_MESSAGES = {
  cuttuuu: {
    title: '✨ Cuttuuu ✨',
    message: 'Your custom heartfelt message here...',
    emoji: '✨'
  },
  // Edit each nickname with personalized messages
};
```

### 2. **Update Birthday Date**

File: `src/data/constants.js`
```javascript
export const BIRTHDAY_DATE = '2026-05-29'; // Change this to Cuttuuu's actual birthday
```

### 3. **Add Memory Photos**

1. Place images in `src/assets/images/` (jpg/png format)
2. Edit `src/data/memories.js`:
```javascript
{
  id: 1,
  image: '/images/your-photo.jpg',
  caption: 'Photo Title',
  memory: 'Memory description...',
  date: '2024-09-01',
  tags: ['tag1', 'tag2']
}
```

### 4. **Add/Edit Songs**

File: `src/data/music.js`
```javascript
{
  id: 1,
  title: 'Song Name',
  artist: 'Artist Name',
  lyrics: 'Key lyrics...',
  why: 'Why this song reminds you of them...',
  mood: 'uplifting',
  color: 'from-pink-500 to-purple-500'
}
```

### 5. **Edit "Open When" Letters**

File: `src/data/letters.js`
```javascript
{
  id: 1,
  trigger: 'Open when you\'re sad',
  icon: '💔',
  message: 'Your heartfelt letter message...',
  color: 'from-blue-500 to-indigo-500'
}
```

### 6. **Add Voice Notes**

1. Place mp3 files in `src/assets/voices/`
2. Edit `src/data/constants.js`:
```javascript
export const VOICE_NOTES = [
  {
    id: 1,
    title: 'A Special Message',
    file: '/voices/message-1.mp3',
    duration: '1:23'
  }
];
```

### 7. **Customize Colors**

File: `tailwind.config.js`
```javascript
colors: {
  'navy': '#0f0a1a',           // Background
  'lavender': '#d8bfd8',       // Text color
  'cream': '#f5f1e8',          // Main text
  'soft-pink': '#ffd6e8',      // Accents
  'glow-purple': '#a78bfa',    // Glow color
  'glow-pink': '#f472b6'       // Secondary glow
}
```

### 8. **Update Nicknames**

File: `src/data/constants.js`
```javascript
export const NICKNAMES = {
  cuttuuu: '✨ Cuttuuu ✨',
  jaanu: '💝 Jaanu 💝',
  // Add or remove nicknames as needed
};
```

## 📂 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx
│   ├── LoadingScreen.jsx
│   ├── StarBackground.jsx
│   ├── CursorEffects.jsx
│   ├── NicknameConstellation.jsx
│   ├── MemoryGalaxy.jsx
│   ├── CountdownTimer.jsx
│   ├── MusicSection.jsx
│   ├── VoiceNotes.jsx
│   ├── OpenWhenLetters.jsx
│   ├── FinalMessage.jsx
│   └── ThemeToggle.jsx
├── data/
│   ├── constants.js        👈 Edit birthday date here
│   ├── messages.js         👈 Edit all text messages
│   ├── memories.js         👈 Add memory photos
│   ├── music.js            👈 Add songs
│   └── letters.js          👈 Edit letters
├── assets/
│   ├── images/             👈 Place photos here
│   ├── music/              👈 Place music files here
│   └── voices/             👈 Place voice notes here
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## 🌐 Deployment to Netlify

### Option 1: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 2: Connect GitHub Repository

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Option 3: Drag & Drop

1. Build: `npm run build`
2. Go to [drop.netlify.app](https://drop.netlify.app)
3. Drag and drop the `dist` folder
4. Share the link!

## 📱 Responsive Design

- ✅ Fully mobile responsive
- ✅ Optimized for desktop (1920px+)
- ✅ Tablet friendly
- ✅ Touch-friendly interactions

## 🎭 Theme Toggle

The website includes a Day/Night theme toggle in the top-right corner. Customize the colors in `src/data/constants.js`:

```javascript
export const THEME = {
  night: {
    bg: '#0f0a1a',
    text: '#f5f1e8',
    accent: '#a78bfa'
  },
  day: {
    bg: '#fff5f7',
    text: '#2d1b4e',
    accent: '#ff9ac7'
  }
};
```

## 🎵 Music Player

The music player supports:
- Song metadata (title, artist)
- Lyrics display
- Personal messages for each song
- Mood indicators
- Beautiful hover animations

Click on any song card to expand and see the message!

## 💌 Emotional Features

✨ Each component is designed to evoke deep emotions:
- **Constellation** represents how you see them (nicknames as stars)
- **Memory Gallery** celebrates shared moments
- **Countdown Timer** builds anticipation
- **Music Section** connects through songs
- **Open When Letters** provides emotional support
- **Final Message** celebrates their importance

## 🎨 Animation Details

All animations use Framer Motion with:
- Smooth spring physics
- Parallax scrolling
- Staggered children animations
- Hover effects
- Scroll-triggered reveals

## 🔧 Troubleshooting

**Images not showing?**
- Ensure images are in `src/assets/images/`
- Use correct path: `/images/filename.jpg`

**Countdown not updating?**
- Check date format: `YYYY-MM-DD`
- Date should be in the future or past (code will calculate)

**Voice notes not playing?**
- Ensure mp3 files are in `src/assets/voices/`
- Check file paths in `src/data/constants.js`

**Styles not applying?**
- Ensure all Tailwind colors are in `tailwind.config.js`
- Run `npm run dev` to rebuild

## 📝 Notes

- All content is customizable through data files
- No database required
- Fully static - works on Netlify free tier
- Components are modular and reusable
- Code is well-commented for easy editing

## 🎁 Tips

1. **Mobile First**: Test on mobile while editing
2. **Font Size**: Adjust in `tailwind.config.js` for better mobile views
3. **Colors**: Use [Tailwind Color Tool](https://tailwindcolor.com/) to generate palettes
4. **Images**: Compress images before adding (use [TinyPNG](https://tinypng.com/))
5. **Music**: Use high-quality mp3s for better sound

## 💜 Special Features

- **Easter Eggs**: Click stars during hero, type "cuttuuu" etc.
- **Falling Stars**: Click anywhere to create star bursts
- **Particle Trail**: Move your mouse to see sparkly effects
- **Shooting Stars**: Watch for occasional shooting stars
- **Confetti**: Final message has celebratory confetti

## 📄 License

Made with love for someone special 💜

## 🤝 Support

For questions, check the comments in each component file!

---

**Deploy & Share**: This is your unique digital gift. Personalize it, deploy it, and share it with Cuttuuu! 🌟

Made by deepya001 with 💜
