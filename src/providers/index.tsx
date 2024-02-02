'use client';

import { Analytics } from '@vercel/analytics/react';

import { AppLayout } from '@/components/Layout/AppLayout';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const Providers: React.FC<ChildProps> = ({ children }) => {
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
