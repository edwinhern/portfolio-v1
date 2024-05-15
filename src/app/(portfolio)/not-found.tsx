'use client';

import { useMemo } from 'react';

import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

const pathMap: Record<string, string> = {
  '/': 'Back to Home',
  '/blog': 'Back to Blog',
  '/project': 'Back to Projects',
};

export default function CustomNotFound() {
  const pathname = usePathname();

  const backPath = useMemo(() => {
    for (const path in pathMap) {
      if (pathname.startsWith(path)) {
        return path;
      }
    }
    return '/';
  }, [pathname]);

  const backLabel = pathMap[backPath];

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1>404 - Page Not Found 🤖</h1>
        <Link href={backPath}>
          <Button>
            <MoveLeft className="mr-2" size={18} />
            {backLabel}
          </Button>
        </Link>
      </div>
    </>
  );
}
