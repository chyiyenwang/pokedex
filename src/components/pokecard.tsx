import { PokemonModel, PokemonStat } from '@/models/types';
import {
  Card,
  CardHeader,
  CardBody,
} from '@heroui/react';
import Avatar from '@/components/avatar';
import Hero from '@/components/hero';
import PillList from './pill-list';

interface PokeCardProps {
  pokemon: PokemonModel
};

export default function PokeCard({ pokemon }: PokeCardProps) {
  const hp = pokemon.stats.find((stat) => stat.stat.name === 'hp') as PokemonStat;

  return (
    <Card className='flex flex-col items-center h-160 w-120 bg-poke-gray border-poke-yellow border-16 rounded-lg p-4 group'>
      <CardHeader className='flex justify-between w-full text-2xl pl-18 pr-6'>
        <h1 className='font-bold capitalize'>{pokemon.name}</h1>
        <h1 className='uppercase'>{hp.base_stat} {hp.stat.name}</h1>
      </CardHeader>
      <CardBody className='relative'>
        <section className='relative flex flex-col items-center'>
          <div className='absolute -top-9 -left-5'>
            <Avatar
              sprite={pokemon.sprite}
              animatedSprite={pokemon.animatedSprite}
            />
          </div>
          <div className='absolute top-5 right-10 z-20 text-4xl text-poke-gray opacity-40'>
            {pokemon.id.toString().padStart(3, '0')}
          </div>
          <Hero
            src={pokemon.officialImage}
            classNames={pokemon.theme[pokemon.types[0]]!.bgGradient}
          />
        </section>
        <section>
          <div>
            <label>Type:</label>
            <PillList
              list={pokemon.types}
              theme={pokemon.theme}
            />
          </div>
          <div>
            <label>Weaknesses:</label>
            <PillList
              list={pokemon.weaknesses}
              theme={pokemon.theme}
            />
          </div>
        </section>
        <h2>Abilities:</h2>
        {pokemon.abilities.map((poke) => <div key={poke.ability.name}>{poke.ability.name}</div>)}
      </CardBody>
    </Card>
  )
};