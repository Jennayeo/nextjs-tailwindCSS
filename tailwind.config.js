/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInLeft: {
          from: { opacity: 0, transform: "translateX(-1400px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        }
      },
      animation: {
        fadeInLeft: "fadeInLeft 4s ease-in-out"
      }
      // fadeStyles: {
      //   'fade-in': 'transition-opacity duration-500',
      //   'fade-english': 'opacity-100',
      //   'fade-korean': 'opacity-0',
      // },
    },
  },
  plugins: [],
}
