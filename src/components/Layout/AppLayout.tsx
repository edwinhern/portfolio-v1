import { MaxWidthWrapper } from '@/components/Layout/MaxWidthWrapper';
import Navbar from '@/components/Layout/Navbar/Navbar';

export const AppLayout: React.FC<ChildProps> = ({ children }) => {
  return (
    <MaxWidthWrapper className="space-y-4 antialiased">
      <Navbar />
      {children}
    </MaxWidthWrapper>
  );
};
