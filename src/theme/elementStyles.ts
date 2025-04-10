import {
  Colors,
  ElementType
} from '@/interfaces';
// TODO: figure out a way to create dynamic classes
// const blackTextTypes: ElementType[] = [
//   'normal', 'grass', 'ice', 'rock', 'bug', 'ground', 'steel', 'fairy',
// ];

// const getTextColor = (type: ElementType) =>
//   blackTextTypes.includes(type) ? 'text-black' : 'text-white';

// export function getElementTypeClasses(type: ElementType) {
//   return {
//     bgGradient: `bg-radial from-white from-5% to-${type}`,
//     textColor: getTextColor(type),
//     bgColor: `bg-${type}`,
//   };
// }


// use this for now
const elementTypeClasses = {
  water: {
    bgGradient: 'bg-radial from-white from-5% to-water',
    textColor: 'text-white',
    bgColor: 'bg-water',
    hoverBg: 'hover:bg-water',
    focusRing: 'focus:ring-water',
    borderColor: 'border-water',
    ringColor: 'ring-water',
    ringOpacity: 'ring-opacity-40',
  },
  fire: {
    bgGradient: 'bg-radial from-white from-5% to-fire',
    textColor: 'text-white',
    bgColor: 'bg-fire',
    hoverBg: 'hover:bg-fire',
    focusRing: 'focus:ring-fire',
    borderColor: 'border-fire',
    ringColor: 'ring-fire',
    ringOpacity: 'ring-opacity-40',
  },
  grass: {
    bgGradient: 'bg-radial from-white from-5% to-grass',
    textColor: 'text-black',
    bgColor: 'bg-grass',
    hoverBg: 'hover:bg-grass',
    focusRing: 'focus:ring-grass',
    borderColor: 'border-grass',
    ringColor: 'ring-grass',
    ringOpacity: 'ring-opacity-40',
  },
  electric: {
    bgGradient: 'bg-radial from-white from-5% to-electric',
    textColor: 'text-black',
    bgColor: 'bg-electric',
    hoverBg: 'hover:bg-electric',
    focusRing: 'focus:ring-electric',
    borderColor: 'border-electric',
    ringColor: 'ring-electric',
    ringOpacity: 'ring-opacity-40',
  },
  normal: {
    bgGradient: 'bg-radial from-white from-5% to-normal',
    textColor: 'text-black',
    bgColor: 'bg-normal',
    hoverBg: 'hover:bg-normal',
    focusRing: 'focus:ring-normal',
    borderColor: 'border-normal',
    ringColor: 'ring-normal',
    ringOpacity: 'ring-opacity-40',
  },
  ice: {
    bgGradient: 'bg-radial from-white from-5% to-ice',
    textColor: 'text-black',
    bgColor: 'bg-ice',
    hoverBg: 'hover:bg-ice',
    focusRing: 'focus:ring-ice',
    borderColor: 'border-ice',
    ringColor: 'ring-ice',
    ringOpacity: 'ring-opacity-40',
  },
  fighting: {
    bgGradient: 'bg-radial from-white from-5% to-fighting',
    textColor: 'text-white',
    bgColor: 'bg-fighting',
    hoverBg: 'hover:bg-fighting',
    focusRing: 'focus:ring-fighting',
    borderColor: 'border-fighting',
    ringColor: 'ring-fighting',
    ringOpacity: 'ring-opacity-40',
  },
  poison: {
    bgGradient: 'bg-radial from-white from-5% to-poison',
    textColor: 'text-white',
    bgColor: 'bg-poison',
    hoverBg: 'hover:bg-poison',
    focusRing: 'focus:ring-poison',
    borderColor: 'border-poison',
    ringColor: 'ring-poison',
    ringOpacity: 'ring-opacity-40',
  },
  ground: {
    bgGradient: 'bg-radial from-white from-5% to-ground',
    textColor: 'text-black',
    bgColor: 'bg-ground',
    hoverBg: 'hover:bg-ground',
    focusRing: 'focus:ring-ground',
    borderColor: 'border-ground',
    ringColor: 'ring-ground',
    ringOpacity: 'ring-opacity-40',
  },
  flying: {
    bgGradient: 'bg-radial from-white from-5% to-flying',
    textColor: 'text-black',
    bgColor: 'bg-flying',
    hoverBg: 'hover:bg-flying',
    focusRing: 'focus:ring-flying',
    borderColor: 'border-flying',
    ringColor: 'ring-flying',
    ringOpacity: 'ring-opacity-40',
  },
  psychic: {
    bgGradient: 'bg-radial from-white from-5% to-psychic',
    textColor: 'text-black',
    bgColor: 'bg-psychic',
    hoverBg: 'hover:bg-psychic',
    focusRing: 'focus:ring-psychic',
    borderColor: 'border-psychic',
    ringColor: 'ring-psychic',
    ringOpacity: 'ring-opacity-40',
  },
  bug: {
    bgGradient: 'bg-radial from-white from-5% to-bug',
    textColor: 'text-black',
    bgColor: 'bg-bug',
    hoverBg: 'hover:bg-bug',
    focusRing: 'focus:ring-bug',
    borderColor: 'border-bug',
    ringColor: 'ring-bug',
    ringOpacity: 'ring-opacity-40',
  },
  rock: {
    bgGradient: 'bg-radial from-white from-5% to-rock',
    textColor: 'text-black',
    bgColor: 'bg-rock',
    hoverBg: 'hover:bg-rock',
    focusRing: 'focus:ring-rock',
    borderColor: 'border-rock',
    ringColor: 'ring-rock',
    ringOpacity: 'ring-opacity-40',
  },
  ghost: {
    bgGradient: 'bg-radial from-white from-5% to-ghost',
    textColor: 'text-white',
    bgColor: 'bg-ghost',
    hoverBg: 'hover:bg-ghost',
    focusRing: 'focus:ring-ghost',
    borderColor: 'border-ghost',
    ringColor: 'ring-ghost',
    ringOpacity: 'ring-opacity-40',
  },
  dragon: {
    bgGradient: 'bg-radial from-white from-5% to-dragon',
    textColor: 'text-white',
    bgColor: 'bg-dragon',
    hoverBg: 'hover:bg-dragon',
    focusRing: 'focus:ring-dragon',
    borderColor: 'border-dragon',
    ringColor: 'ring-dragon',
    ringOpacity: 'ring-opacity-40',
  },
  dark: {
    bgGradient: 'bg-radial from-white from-5% to-dark',
    textColor: 'text-white',
    bgColor: 'bg-dark',
    hoverBg: 'hover:bg-dark',
    focusRing: 'focus:ring-dark',
    borderColor: 'border-dark',
    ringColor: 'ring-dark',
    ringOpacity: 'ring-opacity-40',
  },
  steel: {
    bgGradient: 'bg-radial from-white from-5% to-steel',
    textColor: 'text-black',
    bgColor: 'bg-steel',
    hoverBg: 'hover:bg-steel',
    focusRing: 'focus:ring-steel',
    borderColor: 'border-steel',
    ringColor: 'ring-steel',
    ringOpacity: 'ring-opacity-40',
  },
  fairy: {
    bgGradient: 'bg-radial from-white from-5% to-fairy',
    textColor: 'text-black',
    bgColor: 'bg-fairy',
    hoverBg: 'hover:bg-fairy',
    focusRing: 'focus:ring-fairy',
    borderColor: 'border-fairy',
    ringColor: 'ring-fairy',
    ringOpacity: 'ring-opacity-40',
  },
};

export function getElementTypeClasses(types: ElementType[]) {
  const classes: Colors = {};

  types.forEach(type => {
    classes[type] = elementTypeClasses[type];
  });

  return classes;
};
