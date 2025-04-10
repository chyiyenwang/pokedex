import { ElementType } from '@/models/types';

export type Stat = {
  name: string;
  url: string;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: Stat;
};

export type EffectivenessType = {
  double: ElementType[];
  half: ElementType[];
  zero: ElementType[];
};

export type ElementTypes = {
  [key in ElementType]: {
    attack: EffectivenessType;
    defense: EffectivenessType;
  };
};

export type Attributes = {
  weight: number;
  height: number;
};

export type Multipliers = {
  [key in ElementType]?: number;
};