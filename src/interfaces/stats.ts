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
  [element: string]: {
    attack: EffectivenessType;
    defense: EffectivenessType;
  };
}
