import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Check, CloudUploadIcon, FileClock } from 'lucide-react';

export function ProRequestModal({ offer }: { offer: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ul className='cursor-pointer flex flex-wrap justify-between text-xs sm:text-sm text-[#1C1C1C] font-medium border border-[#DFE2E0] py-2 sm:px-4 sm:p-3 rounded-[12px] w-auto sm:w-max'>
          {offer.requests.map((request: string, idx: number) => (
            <li
              key={idx}
              className='text-start sm:text-center px-6 list-disc list-inside w-max'
            >
              {request}
            </li>
          ))}
        </ul>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px] bg-accent'>
        <DialogHeader className='flex flex-row items-center gap-3'>
          <img
            src='/cna.svg'
            alt='cna'
            className='md:size-[58px] size-[40px]'
          />
          <div className='flex flex-col gap-1 items-start'>
            <DialogTitle className='md:text-lg text-base font-normal'>
              Dun & Bradstreet{' '}
              <span className='md:text-xs text-[10px] bg-[#FAB607] px-2 py-1 rounded-full ml-1'>
                1 week ago
              </span>
            </DialogTitle>
            <DialogDescription className='md:text-sm text-[12px]'>
              Company Industry
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className='flex flex-col gap-6 my-8'>
          <p className='md:text-base text-sm text-[#1C1C1C] flex items-center gap-2'>
            <FileClock className='md:w-6 md:h-6 w-4 h-4 text-[#6C6C6C]' />
            The client is requesting:
          </p>
          <div className='bg-white rounded-[12px] py-5 px-3 flex items-center gap-4'>
            <div className='flex flex-col sm:flex-row gap-4 justify-between w-full'>
              <div className='flex items-center gap-4'>
                <Check className='md:size-6 size-4 text-[#D2D2D2]' />
                <div>
                  <h2 className='md:text-base text-sm text-[#1C1C1C]'>
                    Proof letter of a certain experience
                  </h2>
                  <span className='text-[10px] text-[#6C6C6C]'>
                    doc or pdf formats, up to 5mb.
                  </span>
                </div>
              </div>

              <Button
                variant='outline'
                className='rounded-[12px] text-sm text-primary'
              >
                <CloudUploadIcon className='w-6 h-6 mr-2' />
                Upload
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className='flex flex-row gap-4 '>
          <DialogClose asChild>
            <Button
              variant='outline'
              className='w-full md:h-[60px] rounded-[12px]'
            >
              Cancel
            </Button>
          </DialogClose>
          <Button className='w-full md:h-[60px] rounded-[12px]'>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
