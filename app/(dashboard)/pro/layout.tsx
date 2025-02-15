'use client';

import { useAppContext } from '@/lib/context';
import { redirect, useParams } from 'next/navigation';

export default function ProLayout({ children }: { children: React.ReactNode }) {
  const { id } = useParams();
  const { user } = useAppContext();

  console.log('id', id);

  if (user && user?.role !== 'pro' && !id) {
    return redirect('/');
  }
  return <div>{children}</div>;
}
