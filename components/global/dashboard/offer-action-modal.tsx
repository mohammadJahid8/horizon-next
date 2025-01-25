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
<<<<<<< HEAD
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
=======

  const handleAction = async (status: string) => {
    setIsLoading(true);

    const response = await fetch(`/api/user/offer/update`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: actionData?.id,
        status,
        notes: [
          ...actionData?.notes,
          {
            note: notes,
            role: 'pro',
          },
        ],
      }),
    });

    const responseData = await response.json();
    if (responseData.status === 200) {
      refetchOffers();
      closeOfferAction();
      toast.success(`Offer ${status} successfully!`);
    } else {
      toast.error(`Failed to ${status} offer`);
    }

    setIsLoading(false);
  };

  console.log({ isLoading });
>>>>>>> 25f76388d32b4e1d9731262857a3e8899c632ec1

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
<<<<<<< HEAD
            className='min-h-[150px] resize-none rounded-lg p-4'
=======
            className='min-h-[150px] resize-none p-4 h-40 rounded-[12px]'
>>>>>>> 25f76388d32b4e1d9731262857a3e8899c632ec1
            placeholder='Enter your notes here...'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <Button
<<<<<<< HEAD
            onClick={
              actionData?.type === 'accept' ? handleAccept : handleReject
            }
            className='w-full bg-primary text-white font-medium py-6'
            disabled={isLoading}
          >
            Ok!
=======
            onClick={() =>
              handleAction(
                actionData?.type === 'accept' ? 'accepted' : 'rejected'
              )
            }
            className='w-full bg-primary text-white font-medium py-6 rounded-[12px] h-[50px]'
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Ok!'}
>>>>>>> 25f76388d32b4e1d9731262857a3e8899c632ec1
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
