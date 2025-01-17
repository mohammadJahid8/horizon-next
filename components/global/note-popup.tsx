import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';

const NotesPopup = ({ notes }: { notes: string }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className='text-primary underline'>View notes</button>
      </PopoverTrigger>
      <PopoverContent className='w-full max-w-md min-w-[300px] p-6 bg-white rounded-[12px] shadow-lg'>
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-lg font-semibold'>Important Notes</h2>
          <div className='w-full p-4 border border-[#DFE2E0] rounded-[12px] text-sm text-[#1C1C1C]'>
            <p>{notes}</p>
          </div>
          <PopoverClose className='max-w-40 w-full'>
            <Button className='w-full text-white py-6 px-6 rounded-[12px]'>
              Ok!
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotesPopup;
