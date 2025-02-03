'use client';

import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

export function MessageModal({ children }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-full w-full p-0 bg-[#F9F9FA] max-h-[90vh] overflow-auto'>
        <DialogHeader className='p-4 md:p-6 pb-0'>
          <DialogTitle className='text-lg md:text-xl font-semibold'>
            Message details
          </DialogTitle>
        </DialogHeader>
        <form className='p-3 md:p-6'>
          <div className='space-y-3 md:space-y-4'>
            <div className='bg-white rounded-lg md:rounded-xl p-3 md:p-6'>
              <label
                htmlFor='message'
                className='text-sm md:text-base font-medium block mb-2'
              >
                Your Message
              </label>
              <Textarea
                id='message'
                className='min-h-[150px] md:min-h-[250px] resize-none border-gray-200'
                placeholder='Write your message and the details here...'
              />
            </div>
            <div className='flex flex-row gap-2 md:gap-3 mt-4 md:mt-6'>
              <Button
                type='submit'
                className='h-[50px] md:h-[75px] rounded-lg md:rounded-xl text-sm md:text-base font-semibold order-1 md:order-none flex-1'
              >
                Submit
              </Button>
              <Button
                type='button'
                variant='outline'
                className='h-[50px] md:h-[75px] rounded-lg md:rounded-xl text-sm md:text-base font-semibold flex-1'
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
