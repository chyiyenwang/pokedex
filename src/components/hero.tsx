import clsx from 'clsx';

interface HeroProps {
  src: string;
  classNames: string;
}

export default function Hero({ src, classNames }: HeroProps) {
  return (
    <div className="max-auto w-sm border-poke-yellow border-6 shadow-xl overflow-hidden">
      <img
        src={src}
        className={clsx('transition-transform duration-500 ease-in-out transform group-hover:scale-105', classNames)}
      />
    </div>
  )
}