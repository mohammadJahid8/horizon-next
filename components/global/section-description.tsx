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
    <>
      {/<[a-z][\s\S]*>/i.test(text) ? (
        <div
          className={cn(
            'text-[#1C1C1C] font-medium *:break-words',
            from === 'admin' ? 'text-sm md:text-base' : 'text-sm md:text-xl',
            className
          )}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : (
        <p
          className={cn(
            'text-[#1C1C1C] font-medium',
            from === 'admin' ? 'text-sm md:text-base' : 'text-sm md:text-xl',
            className
          )}
        >
          {text}
        </p>
      )}
    </>
  );
};

export default SectionDescription;
