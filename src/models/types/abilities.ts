export type Ability = {
  name: string;
  url: string;
}

export type PokemonAbility = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}