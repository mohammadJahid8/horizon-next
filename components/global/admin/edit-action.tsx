'use client';

import { Button } from '@/components/ui/button';

import { Pencil } from 'lucide-react';
import { useAppContext } from '@/lib/context';

export default function EditAction({ data, source }: any) {
  const { openEditModal, setAdminEditData } = useAppContext();

  const handleEdit = () => {
    setAdminEditData({ data, source });
    openEditModal();
  };

  return (
    <Button
      variant='ghost'
      size='icon'
      className='text-gray-500 hover:text-gray-600 bg-gray-50'
      onClick={handleEdit}
    >
      <Pencil className='size-5' />
    </Button>
  );
}
