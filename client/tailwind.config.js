/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#000000',
          900: '#00005C',
          800: '#000047',
        },
        violet: {
          400: '#FFD457',
          500: '#FFB653',
          600: '#FF944D',
          700: '#E87535',
          900: '#713016',
        },
        magenta: {
          400: '#FFDE58',
          500: '#FFD457',
          600: '#FFB653',
        },
        aqua: {
          300: '#FFDE58',
          400: '#FFD457',
          500: '#FF944D',
        },
        gold: {
          300: '#FFDE58',
          400: '#FFD457',
          500: '#FFB653',
          600: '#FF944D',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-glow': 'radial-gradient(circle at 50% 0%, rgba(255,180,83,0.32), rgba(0,0,0,0) 60%)',
        'aurora': 'linear-gradient(135deg, #FFDE58 0%, #FFB653 50%, #FF944D 100%)',
      },
      boxShadow: {
        glow: '0 16px 40px rgba(255,148,77,0.28)',
      },
    },
  },
  plugins: [],
};
