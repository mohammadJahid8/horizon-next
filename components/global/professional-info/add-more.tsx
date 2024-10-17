import React from 'react';
import { Plus } from 'lucide-react';
const AddMore = ({ handleAdd }: { handleAdd: () => void }) => {
  return (
    <div
      className='flex items-center gap-2 cursor-pointer hover:underline'
      onClick={handleAdd}
    >
      <div className='bg-[#1C1C1C] rounded-full w-8 h-8 text-white flex items-center justify-center'>
        <Plus className='w-4 h-4 text-white' />
      </div>
      <span className='text-lg leading-[25.2px] text-[#1C1C1C]'>Add more</span>
    </div>
  );
};

export default AddMore;
