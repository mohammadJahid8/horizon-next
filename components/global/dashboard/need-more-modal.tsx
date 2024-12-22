import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { PartnerRequestModal } from './partner-request-modal';
import { useAppContext } from '@/lib/context';

export function NeedMoreModal() {
  const { isOpenNeedMore, openPartner, closeNeedMore } = useAppContext();

  return (
    <AlertDialog open={isOpenNeedMore} onOpenChange={closeNeedMore}>
      <AlertDialogContent className='sm:max-w-[600px] bg-accent'>
        <AlertDialogHeader>
          <AlertDialogTitle className='font-semibold text-base md:text-lg text-start'>
            Need More Requirements?
          </AlertDialogTitle>
          <AlertDialogDescription className='text-center text-[#6C6C6C] text-sm md:text-base font-normal !my-6 bg-white p-6 rounded-sm'>
            You are about to Send an offer, Would you like to ask for more
            requirements?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex flex-row gap-4 w-full'>
          <PartnerRequestModal />

          <Button
            onClick={async () => {
              await closeNeedMore();
              openPartner();
            }}
            className='w-full md:h-[60px] rounded-[12px]'
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              closeNeedMore();
            }}
            variant='outline'
            className='w-full md:h-[60px] rounded-[12px]'
          >
            No
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
