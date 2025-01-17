import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { PartnerRequestModal } from './partner-request-modal';
import { useAppContext } from '@/lib/context';
import { cn } from '@/lib/utils';

export function AlertModal({ type }: { type: 'accept' | 'reject' }) {
  const { isOpenAlert, closeAlert } = useAppContext();

  const title =
    type === 'accept' ? 'Accepting the Offer?' : 'Rejecting the Offer?';
  const description =
    type === 'accept'
      ? 'You are about to accept this job offer. The company will be notified by your response. Would your like to proceed?'
      : 'You are about to reject this job offer. The company will be notified by your response. Would your like to proceed?';

  return (
    <AlertDialog open={isOpenAlert} onOpenChange={closeAlert}>
      <AlertDialogContent className='sm:max-w-[600px]'>
        <AlertDialogHeader>
          <AlertDialogTitle className='font-semibold text-base md:text-lg text-center'>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className='text-center text-[#6C6C6C] text-sm md:text-base font-normal !my-0 bg-white px-6 py-2 rounded-sm'>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex flex-row gap-4 w-full'>
          <PartnerRequestModal />

          <Button
            variant={type === 'reject' ? 'outline' : 'default'}
            type='button'
            className={cn('w-full md:h-[60px] rounded-[12px]')}
            onClick={closeAlert}
          >
            Yes
          </Button>
          <Button
            type='button'
            variant={type === 'accept' ? 'outline' : 'destructive'}
            className={cn('w-full md:h-[60px] rounded-[12px]')}
            onClick={closeAlert}
          >
            No
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
