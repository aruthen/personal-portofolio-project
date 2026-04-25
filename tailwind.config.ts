import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        card: '#111111',
        border: '#222222',
        primary: '#7c3aed',
        text: '#e5e5e5',
        muted: '#9ca3af'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both'
      }
    }
  }
}
