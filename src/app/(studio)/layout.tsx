import '@/app/styles/globals.css';
import '@/app/styles/fonts.css';

export const metadata = {
  description: 'Admin page for Edwin H - using CMS from Sanity.io',
  title: 'Edwin H - Admin Page',
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
