import { Providers } from "@/providers";

import "@/app/styles/globals.css";
import "@/app/styles/fonts.css";
import "react-multi-carousel/lib/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
