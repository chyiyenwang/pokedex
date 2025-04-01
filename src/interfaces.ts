export interface Ability {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Cry {
  latest: string;
  legacy: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Version;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order: number | null;
  version_group: VersionGroup;
}

export interface Move {
  name: string;
  url: string;
}

export interface PokemonMove {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Species {
  name: string;
  url: string;
}

export interface SpriteSet {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  back_default?: string;
  back_female?: string | null;
  back_shiny?: string;
  back_shiny_female?: string | null;
}

export interface OtherSprites {
  dream_world: SpriteSet;
  home: SpriteSet;
  "official-artwork": SpriteSet;
  showdown: SpriteSet;
}

export interface Versions {
  [generation: string]: {
    [game: string]: SpriteSet;
  };
}

export interface Sprites extends SpriteSet {
  other: OtherSprites;
  versions: Versions;
}

export interface Stat {
  name: string;
  url: string;
}

export interface PokemonStat {
  baseStat: number;
  effort: number;
  stat: Stat;
}

export interface Type {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: Type;
}

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
  name: string;
  officialImage: string;
  abilities: Ability[];
  hp: PokemonStat;
  elementType: string;
  gradient: string;
  sprite: string;
  animatedSprite: string;
}