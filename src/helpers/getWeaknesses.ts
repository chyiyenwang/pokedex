// https://github.com/Naramsim/Colosseum/blob/master/src/scripts/helpers/getjs

import { TYPES } from '@/data/pokemon';
import { Multipliers } from '@/interfaces';

export default function getWeaknesses(types: string[]) {
  var defense: Multipliers = {};

  types.forEach( (type) => {
    var damage_relations = TYPES[type];
    var no_damage_from = damage_relations.defense.zero;
    var half_damage_from = damage_relations.defense.half;
    var double_damage_from = damage_relations.defense.double;

    no_damage_from.forEach((type) => {
      if(defense.hasOwnProperty(type)){defense[type] = defense[type] * 0}
      else{defense[type] = 0}
    })

    half_damage_from.forEach((type) => {
      if(defense.hasOwnProperty(type)){defense[type] = defense[type] * 0.5}
      else{defense[type] = 0.5}
    })

    double_damage_from.forEach((type) => {
      if(defense.hasOwnProperty(type)){defense[type] = defense[type] * 2}
      else{defense[type] = 2}
    })
  })

  return Object.keys(defense).filter((type) => defense[type] === 2);
};