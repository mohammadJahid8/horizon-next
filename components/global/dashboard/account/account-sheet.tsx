import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';

import { MenuIcon } from 'lucide-react';
import AccountSidebar from './account-sidebar';

const AccountSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className='size-6 font-extrabold cursor-pointer' />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='max-w-[350px] w-full border-none px-[15px]'
      >
        <SheetTitle />

        <AccountSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default AccountSheet;
