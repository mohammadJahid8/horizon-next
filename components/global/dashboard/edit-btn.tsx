import { Pencil } from 'lucide-react';
import React from 'react';

const EditBtn = () => {
  return (
    <div className='flex items-center gap-3 cursor-pointer' role='button'>
      <div className='p-2 rounded-full bg-primary text-white'>
        <Pencil className='size-3 md:size-4' />
      </div>
      <span className='md:text-lg text-primary font-medium'>Edit</span>
    </div>
  );
};

export default EditBtn;