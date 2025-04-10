import {
  PokemonAbility,
  GameIndex,
  PokemonMove,
  Sprites,
  PokemonStat,
  Attributes,
} from '@/models/types';

export type ElementType =
  | 'water' | 'fire' | 'electric' | 'normal' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic'
  | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';

export type Pokemon = {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: Cry;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export type PokemonModel = {
  id: number;
  name: string;
  officialImage: string;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  attributes: Attributes;
  types: ElementType[];
  weaknesses: ElementType[];
  theme: Colors;
  sprite: string;
  animatedSprite: string;
}

export type Colors = {
  [key in ElementType]?: {
    [colorTheme: string]: string;
  };
};

export type PokemonType = {
  slot: number;
  type: Type;
}

export type Type = {
  name: string;
  url: string;
}

export type Species = {
  name: string;
  url: string;
}

export type Form = {
  name: string;
  url: string;
}

export type Cry = {
  latest: string;
  legacy: string;
}