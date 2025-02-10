import { Check, X, Clock, Hourglass } from 'lucide-react';

export const statusColors = {
  pending: '#FF9500',
  responded: '#FF9500',
  accepted: '#33B55B',
  rejected: '#FF5652',
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

export const adminStatusMap = {
  block: 'blocked',
  reject: 'rejected',
  approve: 'approved',
  remove: 'removed',
};
export const adminStatusTexts = {
  blocked: 'Blocked',
  rejected: 'Rejected',
  approved: 'Approved',
  removed: 'Removed',
  pending: 'Pending',
};

export const adminStatusColors = {
  blocked: '#FF5652',
  rejected: '#FF5652',
  approved: '#33B55B',
  removed: '#FF5652',
  pending: '#FF9500',
};
