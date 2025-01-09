import React from 'react';
import { Trash2Icon } from 'lucide-react';
const Remove = ({ handleRemove }: { handleRemove: () => void }) => {
  return (
    <button
      className='flex items-center gap-2 cursor-pointer hover:underline text-red-500 text-lg font-medium'
      onClick={handleRemove}
    >
      <div className='bg-[#FCE7E5] rounded-full w-8 h-8 flex items-center justify-center '>
        <Trash2Icon className='w-4 h-4 ' />
      </div>
      <span className='md:block hidden'>Remove</span>
    </button>
  );
};

export default Remove;
