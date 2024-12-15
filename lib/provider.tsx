'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import ContextProvider from './context';

export const queryClient = new QueryClient();
export default function Provider({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        {children}

        <Toaster />
      </ContextProvider>
    </QueryClientProvider>
  );
}
