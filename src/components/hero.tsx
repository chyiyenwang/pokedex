import cx from 'clsx';

interface HeroProps {
  src: string;
  classNames: string;
}

export default function Hero({ src, classNames }: HeroProps) {
  return (
    <img
      src={src}
      className={cx('mx-auto w-sm border-poke-yellow border-6 shadow-xl', classNames.toString())}
    />
  )
}