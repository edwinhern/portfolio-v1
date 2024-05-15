import { cn } from '@/lib/utils';

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return <div className={cn('container w-full max-w-screen-xl', className)}>{children}</div>;
};
