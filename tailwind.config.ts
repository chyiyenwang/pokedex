import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#ffd65a',
        red: '#f4523b',
        gray: '#f2f2f2',
        water: '#539DDF',
        fire: '#FF4422',
        grass: '#78C850',
        electric: '#F7D02C',
        normal: '#A8A77A',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
      },
      backgroundImage: {
        'radial': 'radial-gradient(ellipse at center, var(tw-gradient-stops))',
      },
    },
  },

  plugins: [],
};

export default config;
