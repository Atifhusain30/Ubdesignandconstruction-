import type { Config } from 'tailwindcss'

// All brand colors resolve through CSS variables defined in app/globals.css,
// so a palette can be switched with a single `data-palette` attribute on <html>.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-barlow-condensed)', 'Impact', 'sans-serif'],
        body: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: { DEFAULT: v('navy'), deep: v('navy-deep'), soft: v('navy-soft') },
        gold: { DEFAULT: v('gold'), dark: v('gold-dark'), pale: v('gold-pale') },
        ink: v('ink'),
        stone: { DEFAULT: v('stone'), line: v('stone-line'), text: v('stone-text') },
      },
      maxWidth: { wrap: '1200px' },
    },
  },
  plugins: [],
}
export default config
