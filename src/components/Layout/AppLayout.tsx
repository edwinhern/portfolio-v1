import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import Navbar from '@/components/Layout/Navbar/Navbar';
import { ChildProp } from '@/types/common';

export const AppLayout: React.FC<ChildProp> = ({ children }) => {
  return (
    <MaxWidthWrapper className="space-y-4 antialiased">
      <Navbar />
      {children}
    </MaxWidthWrapper>
  );
};
