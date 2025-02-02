import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

export default function AdminAlertModal({
  children,
  open,
  setOpen,
  alertType,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  alertType?: 'block' | 'remove' | 'approve' | 'reject';
  children?: React.ReactNode;
}) {
  const title =
    alertType === 'block'
      ? 'Blocking the user?'
      : alertType === 'remove'
        ? 'Removing the user?'
        : alertType === 'approve'
          ? 'Approving application?'
          : 'Rejecting application?';
  const description =
    alertType === 'block'
      ? 'You are about to block the user from logging to his acacount. The user will be notified through his registered email that his account has been blocked by the admin.'
      : alertType === 'remove'
        ? 'You are about to remove the user from the platform. The user will be notified through his registered email that his account has been deleted by the admin.  Would your like to proceed?'
        : alertType === 'approve'
          ? 'You are about to approve the Pro application. The Pro will be notified by your response. Would your like to proceed?'
          : alertType === 'reject'
            ? 'You are about to reject the Pro application. The Pro will be notified by your response. Would your like to proceed?'
            : '';

  const placeholder =
    alertType === 'block'
      ? 'Explain the reasons for the block. The user will be emailed by those notes..'
      : alertType === 'reject'
        ? 'Explain the reasons for rejecting the application, The user will be emailed by those notes..'
        : '';

  const showTextArea = alertType === 'block' || alertType === 'reject';
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[852px] p-8'>
        <DialogHeader>
          <DialogTitle className='text-center mb-4'>{title}</DialogTitle>
          <DialogDescription className='text-base text-center'>
            {description}
          </DialogDescription>
        </DialogHeader>

        {showTextArea && (
          <Textarea
            placeholder={placeholder}
            className='min-h-[160px] rounded-xl'
          />
        )}
        <div className='flex gap-3 mt-2'>
          <Button
            variant='outline'
            className={cn(
              'flex-1 h-[75px] rounded-xl hover:text-black',
              alertType === 'approve' && 'bg-primary text-white'
            )}
          >
            Yes!
          </Button>
          <Button className='flex-1 h-[75px] rounded-xl bg-red-600 hover:bg-red-600/90'>
            No
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
