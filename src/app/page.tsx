'use client';

import squirtle from '@/data/pokemon/squirtle';
import charmander from '@/data/pokemon/charmander';
import bulbasaur from '@/data/pokemon/bulbasaur';
import pikachu from '@/data/pokemon/pikachu';
import growlithe from '@/data/pokemon/growlithe';
import PokeCard from '@/components/pokecard';
import { Pokemon, PokemonStat, PokemonAbility, PokemonModel, Attributes, ElementType } from '@/interfaces';
import getMultipliers from '@/helpers/getMultipliers';
import { getElementTypeClasses } from '@/theme/elementStyles';

function createPokemonModel(pokemon: Pokemon): PokemonModel {
  const id = pokemon.id;
  const name = pokemon.name;
  const officialImage: string = pokemon.sprites.other['official-artwork'].front_default;
  // const hp: PokemonStat = pokemon.stats.find((stat) => stat.stat.name === 'hp') as PokemonStat;
  const stats: PokemonStat[] = pokemon.stats;
  const elementType: ElementType = pokemon.types[0].type.name as ElementType;
  const abilities: PokemonAbility[] = pokemon.abilities;
  // TODO: update this
  const types = getMultipliers(['water'])
  const attributes: Attributes = {
    weight: pokemon.weight,
    height: pokemon.height,
  };
  // const gradient = `bg-gradient-to-br from-${elementType} via-[#eeeeee] to-${elementType}`
  // const gradient = `bg-conic from-blue-600 to-sky-400 to-50%`
  const animatedSprite: string = pokemon.sprites.versions['generation-v']['black-white']?.animated?.front_default ?? "default_sprite.png";
  const sprite: string = pokemon.sprites.versions['generation-v']['black-white'].front_default;
  // const sprite: string = pokemon.sprites.versions['generation-iv']['platinum'].front_default;
  
  // const colors = elementTypeMap[elementType];
  // const type = elementType;
  const colors = getElementTypeClasses(elementType);
  return {
    id,
    name,
    officialImage,
    abilities,
    // hp,
    attributes,
    stats,
    types,
    elementType,
    colors,
    sprite,
    animatedSprite,
  }
}

export default function Home() {
  // @source inline("{bg-,text-,border-,hover:bg-,ring-,focus:ring-}(water,fire,electric,normal,grass,ice,fighting,poison,ground,flying,psychic,bug,rock,ghost,dragon,dark,steel,fairy)")
  const pikachuData = createPokemonModel(pikachu);
  const growlitheData = createPokemonModel(growlithe);
  const squirtleData = createPokemonModel(squirtle);
  const charmanderData = createPokemonModel(charmander);
  const bulbasaurData = createPokemonModel(bulbasaur);

  return (
    <div className='flex overflow justify-center items-center h-screen'>
      <PokeCard pokemon={squirtleData} />
      <PokeCard pokemon={charmanderData} />
      <PokeCard pokemon={bulbasaurData} />
    </div>
  );
}
