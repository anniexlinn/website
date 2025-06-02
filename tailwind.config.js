
module.exports = {
  darkMode: 'class', // enables class-based dark mode

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        primary: {
          light: '#fef7f6', 
          dark: '#1a1a1a',  // Dark background
        },
        text: {
          light: '#2a2520', // Dark gray for light mode
          dark: '#f8e9e8',  // Light pinkish-white for dark mode
        },
        accent: {
          light: '#5a534c', // Current gray
          dark: '#e8c9c8',  // Soft pink for dark mode
        },
        bubble: {
          light: '#fbe6e6', // Light pink bubble
          dark: '#2d4a53',   // Muted teal-blue bubble
        },
        icon: {
          light: '#5a534c',  // Current gray
          dark: '#f0c8c6',   // Light pink
        }
      },
      fontSize: {
        display: ['clamp(2.5rem, 8vw, 4.5rem)', {
          lineHeight: '1',
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }],
        title: ['clamp(1.75rem, 5vw, 2.75rem)', {
          lineHeight: '1.1',
          fontWeight: '450'
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
      },
      // 3. Add dark mode colors if needed
      colors: {
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      }
    },
  },
  // 4. Ensure variants include dark mode
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
    },
  }
}
