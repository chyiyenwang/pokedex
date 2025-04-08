import clsx from 'clsx';

export default function Pill({ children, classNames }: { children: React.ReactNode, classNames: string }) {
  return (
    <div className={clsx('relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-5 h-8 text-medium rounded-lg text-white capitalize', classNames)}>
      { children }
    </div>
  )
}