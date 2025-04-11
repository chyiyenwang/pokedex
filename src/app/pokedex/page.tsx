'use client';

import squirtle from '@/data/pokemon/squirtle';
import charmander from '@/data/pokemon/charmander';
import bulbasaur from '@/data/pokemon/bulbasaur';
import pikachu from '@/data/pokemon/pikachu';
import growlithe from '@/data/pokemon/growlithe';
import PokeCard from '@/components/pokecard';
import {
  Pokemon,
  PokemonStat,
  PokemonAbility,
  PokemonModel,
  Attributes,
  ElementType,
  Colors
} from '@/models/types';
import getMultipliers from '@/helpers/getMultipliers';
import getWeaknesses from '@/helpers/getWeaknesses';
import { getElementTypeClasses } from '@/theme/elementStyles';
import { POKEMON_LIST } from '@/data/pokemon';
import Avatar from '@/components/avatar';

function createPokemonModel(pokemon: Pokemon): PokemonModel {
  const id = pokemon.id;
  const name = pokemon.name;
  const officialImage: string = pokemon.sprites.other['official-artwork'].front_default;
  const attributes: Attributes = {
    weight: pokemon.weight,
    height: pokemon.height,
  };
  // const hp: PokemonStat = pokemon.stats.find((stat) => stat.stat.name === 'hp') as PokemonStat;
  const stats: PokemonStat[] = pokemon.stats;
  const types: ElementType[] = pokemon.types.map(poke => poke.type.name) as ElementType[];
  const weaknesses: ElementType[] = getWeaknesses(types) as ElementType[];
  const abilities: PokemonAbility[] = pokemon.abilities;
  const animatedSprite: string = pokemon.sprites.versions['generation-v']['black-white']?.animated?.front_default ?? "default_sprite.png";
  const sprite: string = pokemon.sprites.versions['generation-v']['black-white'].front_default;
  const theme: Colors = getElementTypeClasses([...types, ...weaknesses]);

  return {
    id,
    name,
    officialImage,
    abilities,
    // hp,
    attributes,
    stats,
    types,
    weaknesses,
    theme,
    sprite,
    animatedSprite,
  }
}

export default function PokemonPage() {
  // const pikachuData = createPokemonModel(pikachu);
  // const growlitheData = createPokemonModel(growlithe);
  // const squirtleData = createPokemonModel(squirtle);
  // const charmanderData = createPokemonModel(charmander);
  const bulbasaurData = createPokemonModel(bulbasaur);
  console.log(bulbasaurData);
  // return (
  //   <div className='grid grid-cols-5 gap-2 items-center justify-center'>
  //     {POKEMON_LIST.map((poke, id) => {
  //       const trueId = id + 1;
  //       return (
  //         <div className="relative flex justify-center items-center group">
  //           <Avatar
  //             sprite={`/pokemon/sprites/${trueId}.png`}
  //             animatedSprite={`/pokemon/animated/${trueId}.gif`}
  //           />
  //         </div>
  //       )
  //     })}
  //   </div>
  // );
  return (
    <div className='flex overflow justify-center items-center h-screen'>
      {/* <PokeCard pokemon={squirtleData} />
      <PokeCard pokemon={charmanderData} /> */}
      <PokeCard pokemon={bulbasaurData} />
    </div>
  )
}