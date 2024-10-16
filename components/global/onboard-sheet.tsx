import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import { MenuIcon } from 'lucide-react';
import Onboard from './onboard';

const OnboardSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className='h-8 w-8 font-extrabold cursor-pointer' />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='max-w-[400px] w-full border-none px-[15px]'
      >
        <SheetTitle />

        <Onboard />
      </SheetContent>
    </Sheet>
  );
};

export default OnboardSheet;
