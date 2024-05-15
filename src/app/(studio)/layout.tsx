import type { PropsWithChildren } from 'react';

import '@/app/styles/fonts.css';
import '@/app/styles/globals.css';

export const metadata = {
  description: 'Admin page for Edwin H - using CMS from Sanity.io',
  title: 'Edwin H - Admin Page',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
