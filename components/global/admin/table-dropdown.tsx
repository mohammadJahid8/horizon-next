import { Trash2, UserRoundX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { useState } from 'react';
import AlertModal from './admin-alert-modal';

const TableDropdown = () => {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState<'block' | 'remove'>('block');
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='text-gray-500 hover:text-gray-600 bg-gray-50'
          >
            <EllipsisVertical className='size-5' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => {
              setAlertType('block');
              setOpen(true);
            }}
          >
            <UserRoundX className='size-4' /> Block
          </DropdownMenuItem>
          <DropdownMenuItem
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => {
              setAlertType('remove');
              setOpen(true);
            }}
          >
            <Trash2 className='size-4' /> Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertModal open={open} setOpen={setOpen} alertType={alertType} />
    </>
  );
};

export default TableDropdown;
