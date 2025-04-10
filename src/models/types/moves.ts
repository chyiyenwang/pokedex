export type Move = {
  name: string;
  url: string;
}

export type MoveLearnMethod = {
  name: string;
  url: string;
}

export type VersionGroup = {
  name: string;
  url: string;
}

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order: number | null;
  version_group: VersionGroup;
}

export type PokemonMove = {
  move: Move;
  version_group_details: VersionGroupDetail[];
}
