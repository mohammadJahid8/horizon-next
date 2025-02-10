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
import { ScrollArea } from '@/components/ui/scroll-area';
import OnboardPersonalInfo from '../onboard-personal-info';
import OnboardProfessionalInfo from '../onboard-professional-info';
import OnboardDocumentUpload from '../onboard-document-upload';
import { useAppContext } from '@/lib/context';

export function AdminEditUserModal() {
  const {
    handleSavePersonalInfo,
    isOpenEditModal,
    closeEditModal,
    adminEditData,
  } = useAppContext();

  // console.log({ data });

  return (
    <Dialog open={isOpenEditModal} onOpenChange={closeEditModal}>
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
                    unoptimized
                    src={
                      adminEditData?.data?.personalInfo?.image ||
                      '/dummy-profile-pic.jpg'
                    }
                    alt='Profile picture'
                    width={108}
                    height={108}
                    className='rounded-full object-cover size-20'
                  />
                  <div className='flex flex-col gap-3'>
                    <div className='font-semibold text-xl'>
                      {adminEditData?.data?.personalInfo?.firstName}{' '}
                      {adminEditData?.data?.personalInfo?.lastName}
                    </div>

                    {/* <div className='text-muted-foreground'>
                      Latest Job Title
                    </div> */}
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <Button
                    variant='default'
                    className='rounded-lg'
                    onClick={() =>
                      handleSavePersonalInfo(adminEditData?.source)
                    }
                  >
                    Save
                  </Button>

                  <Button
                    variant='outline'
                    className=' rounded-lg'
                    onClick={closeEditModal}
                  >
                    Cancel
                  </Button>
                </div>
              </div>

              <div className='flex flex-col gap-6'>
                <OnboardPersonalInfo
                  // @ts-ignore
                  from='admin'
                  userFromAdmin={adminEditData?.data}
                  source={adminEditData?.source}
                />
                {adminEditData?.source === 'pro' && (
                  <>
                    <OnboardProfessionalInfo
                      // @ts-ignore

                      from='admin'
                      userFromAdmin={adminEditData?.data}
                    />
                    <OnboardDocumentUpload
                      // @ts-ignore
                      from='admin'
                      userFromAdmin={adminEditData?.data}
                      // @ts-ignore
                      // onClose={() => setOpenEditModal(false)}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
