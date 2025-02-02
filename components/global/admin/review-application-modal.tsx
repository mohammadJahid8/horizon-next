'use client';

import {
  ArrowUpRight,
  Check,
  MoveUpRight,
  Pencil,
  Trash2,
  UserX,
  X,
} from 'lucide-react';
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
import { MessageModal } from './message-modal';
import { AdminEditUserModal } from './admin-edit-user-modal';

export function ReviewApplicationModal({
  open,
  onOpenChange,
  children,
  status,
}: any) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[852px] p-0 '>
        <DialogHeader className='p-8 pb-3'>
          <DialogTitle className='text-xl font-semibold'>
            Application Details
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className='h-[80vh]'>
          <div className='p-8 pt-0'>
            <div className='flex flex-col gap-6'>
              <div className='flex items-start justify-between'>
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
                <div className='flex flex-col gap-4'>
                  {status === 'pending' && (
                    <div className='flex items-center gap-4'>
                      <Button
                        variant='default'
                        className='rounded-lg inline-flex items-center gap-2'
                      >
                        <Check className='size-4' />
                        Approve
                      </Button>

                      <Button
                        variant='outline'
                        className='text-red-600 rounded-lg inline-flex items-center gap-2'
                      >
                        <X className='size-4' />
                        Reject
                      </Button>
                    </div>
                  )}
                  <MessageModal>
                    <Button
                      variant='outline'
                      className='w-full rounded-lg inline-flex items-center gap-2'
                    >
                      Send a message
                      <MoveUpRight className='size-4' />
                    </Button>
                  </MessageModal>
                </div>
              </div>

              {status === 'verified' && (
                <div className='flex items-center gap-4'>
                  <AdminEditUserModal>
                    <Button
                      variant='outline'
                      className='w-full rounded-lg inline-flex items-center gap-2'
                    >
                      <Pencil className='size-4' />
                      Edit
                    </Button>
                  </AdminEditUserModal>

                  <Button
                    variant='outline'
                    className='w-full rounded-lg inline-flex items-center gap-2'
                  >
                    <UserX className='size-4' />
                    Block
                  </Button>

                  <Button
                    variant='outline'
                    className='w-full rounded-lg text-red-600 inline-flex items-center gap-2'
                  >
                    <Trash2 className='size-4' />
                    Remove
                  </Button>
                </div>
              )}

              <PersonalInformation
                source='admin'
                proUser={{
                  personalInfo: {
                    firstName: 'Pro Name',
                    lastName: 'Last Name',
                    dateOfBirth: '1990-01-01',
                    phone: '1234567890',
                    gender: 'Male',
                    address: {
                      country: 'United States',
                      city: 'New York',
                      state: 'NY',
                      street: '123 Main St',
                      zip: '10001',
                    },
                    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                  },
                }}
              />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
