import clsx from 'clsx';

interface PillProps {
  classNames: string;
  children: React.ReactNode;
}

export default function Pill({
  classNames,
  children
}: PillProps) {
  return (
    <div className={clsx('relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-5 h-8 text-medium border-double border-4 rounded-lg text-white capitalize', classNames)}>
      { children }
    </div>
  )
}