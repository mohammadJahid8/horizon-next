import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OnboardButtonProps {
  disabled?: boolean;
  text: string;
  className?: string;
}

const OnboardButton: React.FC<OnboardButtonProps> = ({
  disabled,
  text,
  className,
}) => {
  return (
    <Button
      className={cn(
        'h-[48px] md:h-[75px] md:max-w-[247px] w-auto rounded-[12px] text-[15px] md:text-lg font-medium bg-primary disabled:bg-[#cdcdcd]',
        className
      )}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default OnboardButton;
