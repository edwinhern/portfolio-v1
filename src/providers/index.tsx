"use client";

import { Analytics } from "@vercel/analytics/react";

import { AppLayout } from "@/components/Layout/AppLayout";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ChildProp } from "@/types/common";

export const Providers: React.FC<ChildProp> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <AppLayout>
          {children}
          <Analytics />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};
