import Link from 'next/link';
import React from 'react';

import { NavigationMenu } from '@/components/Layout/Navbar/NavigationMenu';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-[1100] w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between">
        <Link className="text-lg font-semibold hover:underline" href="/">
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
