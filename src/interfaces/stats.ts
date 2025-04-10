export interface Stat {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface EffectivenessType {
  double: string[];
  half: string[];
  zero: string[];
}

export interface ElementTypes {
  [type: string]: {
    attack: EffectivenessType;
    defense: EffectivenessType;
  };
}

export interface Attributes {
  weight: number;
  height: number;
}

export interface Multipliers {
  [type: string]: number;
};