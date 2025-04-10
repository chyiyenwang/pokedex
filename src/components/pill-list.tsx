import Pill from '@/components/pill';
import { Colors, ElementType } from '@/interfaces';

interface PillListProps {
  list: ElementType[];
  theme: Colors;
};

export default function PillList({
  list,
  theme,
}: PillListProps) {
  return (
    <>
      {list.length > 0 && (
        list.map(type => (
          <Pill
            key={type}
            classNames={theme[type]!.bgColor}
          >
            {type}
          </Pill>
        )
      ))}
    </>
)};