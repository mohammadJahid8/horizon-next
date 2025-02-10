import { cn } from '@/lib/utils';

const SectionDescription = ({
  text,
  className,
  from,
}: {
  text: string;
  className?: string;
  from?: string;
}) => {
  return (
    <p
      className={cn(
        'text-[#1C1C1C] font-medium',
        from === 'admin' ? 'text-sm md:text-base' : 'text-sm md:text-xl',
        className
      )}
    >
      {text}
    </p>
  );
};

export default SectionDescription;
