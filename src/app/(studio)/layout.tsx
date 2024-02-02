import '@/app/styles/globals.css';
import '@/app/styles/fonts.css';

export const metadata = {
  title: 'Edwin H - Admin Page',
  description: 'Admin page for Edwin H - using CMS from Sanity.io',
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
