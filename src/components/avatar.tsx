interface AvatarProps {
  sprite: string;
  animatedSprite: string;
};

export default function Avatar({
  sprite,
  animatedSprite
}: AvatarProps) {
  return (
    <div className='relative w-20 h-20 bg-red-200 rounded-full group'>
      <img
        src={sprite}
        className='absolute-center z-20 transition-opacity duration-300 group-hover:opacity-0'
      />
      <img
        src={animatedSprite}
        className='absolute-center z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100'
      />
    </div>
  )
}