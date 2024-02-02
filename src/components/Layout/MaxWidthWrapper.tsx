import { cn } from '@/lib/utils';

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return <div className={cn('container w-full max-w-screen-xl', className)}>{children}</div>;
};
