import {
  PokemonAbility,
  GameIndex,
  PokemonMove,
  Sprites,
  PokemonStat,
  Attributes,
} from '@/interfaces';

export type ElementType =
  | 'water' | 'fire' | 'electric' | 'normal' | 'grass' | 'ice'
  | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic'
  | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';

export interface Pokemon {
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

export interface PokemonModel {
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

export interface PokemonType {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface Cry {
  latest: string;
  legacy: string;
}