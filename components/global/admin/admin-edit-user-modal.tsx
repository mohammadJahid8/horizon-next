'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PersonalInformation from '../dashboard/personal-information';
import { ScrollArea } from '@/components/ui/scroll-area';
import OnboardPersonalInfo from '../onboard-personal-info';
import OnboardProfessionalInfo from '../onboard-professional-info';
import OnboardDocumentUpload from '../onboard-document-upload';

export function AdminEditUserModal({ open, onOpenChange, children }: any) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-full sm:max-w-[852px] p-4 sm:p-8'>
        <DialogHeader className='py-3'>
          <DialogTitle className='text-start text-xl font-semibold'>
            User Profile
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className='h-[70vh] sm:h-[80vh]'>
          <div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-start justify-between'>
                <div className='flex gap-3 items-center'>
                  <Image
                    src='/dummy-profile-pic.jpg'
                    alt='Profile picture'
                    width={108}
                    height={108}
                    className='rounded-full'
                  />
                  <div className='flex flex-col gap-3'>
                    <div className='font-semibold text-xl'>Pro Name</div>
                    <div className='text-muted-foreground'>
                      Latest Job Title
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <Button variant='default' className='rounded-lg'>
                    Save
                  </Button>

                  <Button variant='outline' className=' rounded-lg'>
                    Cancel
                  </Button>
                </div>
              </div>

              <div className='flex flex-col gap-6'>
                <OnboardPersonalInfo from='admin' />
                <OnboardProfessionalInfo from='admin' />
                <OnboardDocumentUpload from='admin' />
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
