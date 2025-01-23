'use client';
import OfferLists from '@/components/global/dashboard/offer-lists';
import { useAppContext } from '@/lib/context';

const Jobs = () => {
  const { offers, jobOffers } = useAppContext();

  return (
    <div>
      <OfferLists offers={jobOffers} source='jobs' />
    </div>
  );
};

export default Jobs;
