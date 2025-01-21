'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useAppContext } from '@/lib/context';
import { toast } from 'sonner';
import { useState } from 'react';

export default function OfferActionModal() {
  const { isOpenOfferAction, closeOfferAction, actionData, refetchOffers } =
    useAppContext();

  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.log({ actionData });

  const handleReject = async () => {
    setIsLoading(true);
    const response = fetch(`/api/user/offer/update`, {
      method: 'PATCH',
      body: JSON.stringify({
        id: actionData?.id,
        status: 'rejected',
        proNotes: notes,
      }),
    });
    toast.promise(response, {
      loading: 'Rejecting offer...',
      success: async (data: any) => {
        refetchOffers();
        closeOfferAction();
        await data.json();
        return 'Offer rejected successfully!';
      },
      error: 'Failed to reject offer',
    });
    setIsLoading(false);
  };

  const handleAccept = () => {
    closeOfferAction();
    // openOfferAction();
  };

  return (
    <Dialog open={isOpenOfferAction} onOpenChange={closeOfferAction}>
      <DialogContent className='sm:max-w-[525px]'>
        <DialogHeader>
          <DialogTitle className='text-center text-xl'>
            Important Notes (optional)
          </DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Textarea
            className='min-h-[150px] resize-none rounded-lg p-4'
            placeholder='Enter your notes here...'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <Button
            onClick={
              actionData?.type === 'accept' ? handleAccept : handleReject
            }
            className='w-full bg-primary text-white font-medium py-6'
            disabled={isLoading}
          >
            Ok!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
