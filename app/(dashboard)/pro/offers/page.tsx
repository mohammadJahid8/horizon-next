'use client';
import OfferLists from '@/components/global/dashboard/offer-lists';
import { useAppContext } from '@/lib/context';

export default function Offers() {
  const { pendingOffers } = useAppContext();
  return (
    <div>
      <OfferLists offers={pendingOffers} source='offers' />
    </div>
  );
}
