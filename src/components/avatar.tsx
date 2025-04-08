import Pokeball from "./svgs/pokeball";

interface AvatarProps {
  sprite: string;
  animatedSprite: string;
};

export default function Avatar({
  sprite,
  animatedSprite
}: AvatarProps) {
  return (
    <div className='relative w-20 h-20 rounded-full'>
      <div className="absolute-center z-20">
        <Pokeball />
      </div>
      <img
        src={sprite}
        className='absolute-center z-30 transition-opacity duration-200 group-hover:opacity-0'
      />
      <img
        src={animatedSprite}
        className='absolute-center z-40 transition-opacity duration-200 opacity-0 group-hover:opacity-100'
      />
    </div>
  )
}