export type SpriteSet = {
  front_default: string;
  front_female?: string | null;
  front_shiny?: string;
  front_shiny_female?: string | null;
  back_default?: string;
  back_female?: string | null;
  back_shiny?: string;
  back_shiny_female?: string | null;
}

export type OtherSprites = {
  dream_world: SpriteSet;
  home: SpriteSet;
  "official-artwork": SpriteSet;
  showdown: SpriteSet;
}

export type Versions = {
  [generation: string]: {
    [game: string]: SpriteSet & {
      animated?: SpriteSet;
    };
  };
}

export type Sprites = SpriteSet & {
  other: OtherSprites;
  versions: Versions;
}
