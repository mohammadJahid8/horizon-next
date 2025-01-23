import { Check, X, Clock, Hourglass } from 'lucide-react';

export const statusColors = {
  pending: 'text-[#FF9500]',
  responded: 'text-[#FF9500]',
  accepted: 'text-[#33B55B]',
  rejected: 'text-[#FF5652]',
};

export const statusTexts = {
  pending: 'PENDING',
  responded: 'PENDING CONFIRMATION',
  accepted: 'ACCEPTED',
  rejected: 'REJECTED',
};

export const statusIcons = {
  pending: <Hourglass className='size-4' />,
  accepted: <Check className='size-4' />,
  rejected: <X className='size-4' />,
  responded: <Clock className='size-4' />,
};
