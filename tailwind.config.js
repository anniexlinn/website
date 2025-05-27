module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 8vw, 4.5rem)', {
          lineHeight: '1',
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }],
        title: ['clamp(1.75rem, 5vw, 2.75rem)', {
          lineHeight: '1.1',
          fontWeight: '450' // Geist's special medium weight
        }],
        lead: ['1.25rem', {
          lineHeight: '1.4',
          fontWeight: '425'
        }],
      },
      fontWeight: {
        light: '325',
        normal: '375',
        medium: '425',
        semibold: '475'
      }
    },
  },
}
