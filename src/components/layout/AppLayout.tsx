import type { PropsWithChildren } from 'react';

import { MaxWidthWrapper } from '@/components/layout/MaxWidthWrapper';
import Navbar from '@/components/layout/Navbar/Navbar';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MaxWidthWrapper className="space-y-4 antialiased">
      <Navbar />
      {children}
    </MaxWidthWrapper>
  );
};
