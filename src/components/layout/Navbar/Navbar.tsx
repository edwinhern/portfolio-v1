import React from 'react';

import Link from 'next/link';

import { NavigationMenu } from '@/components/layout/Navbar/NavigationMenu';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[1100] size-full border-b bg-background">
      <div className="flex h-16 items-center justify-between">
        <Link className="mt-1.5 text-lg font-semibold hover:underline" href="/">
          Edwin H
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <NavigationMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
