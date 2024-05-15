'use client';
import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';

import { AppLayout } from '@/components/layout/AppLayout';
import { Toaster } from '@/components/ui/toaster';

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <AppLayout>
          {children}
          <Analytics />
          <Toaster />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};
