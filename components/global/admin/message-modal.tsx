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
      <DialogContent className='max-w-[720px] w-full p-0 bg-[#F9F9FA] md:max-h-[90vh] overflow-auto'>
        <DialogHeader className='p-6 pb-0'>
          <DialogTitle className='text-xl font-semibold'>
            Message details
          </DialogTitle>
        </DialogHeader>
        <form className='p-4 md:p-6'>
          <div className='space-y-4'>
            <div className='bg-white rounded-xl p-4 md:p-6'>
              <label
                htmlFor='message'
                className='text-base font-medium block mb-2'
              >
                Your Message
              </label>
              <Textarea
                id='message'
                className='min-h-[200px] md:min-h-[250px] resize-none border-gray-200'
                placeholder='Write your message and the details here...'
              />
            </div>
            <div className='flex flex-col md:flex-row gap-3 mt-6'>
              <Button
                type='submit'
                className='h-[75px] rounded-xl text-base font-semibold order-1 md:order-none md:flex-1'
              >
                Submit
              </Button>
              <Button
                type='button'
                variant='outline'
                className='h-[75px] rounded-xl text-base font-semibold md:flex-1'
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
