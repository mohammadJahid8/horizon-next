import { MoreHorizontal, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MoreDropdown() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <MoreHorizontal className='w-6 h-6 cursor-pointer' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer'>
            <Trash2 />
            <span>Remove</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
