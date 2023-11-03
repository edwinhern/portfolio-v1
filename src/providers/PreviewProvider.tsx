"use client";

import dynamic from "next/dynamic";
import { suspend } from "suspend-react";

const LiveQueryProvider = dynamic(() => import("next-sanity/preview"));

const UniqueKey = Symbol("../../sanity/lib/client");
interface PreviewProviderProps {
  children: React.ReactNode;
  token: string;
}

export default function PreviewProvider(props: PreviewProviderProps) {
  const { children, token } = props;
  const { client } = suspend(
    () => import("../../sanity/lib/client"),
    [UniqueKey]
  );

  if (!token) return children;

  return (
    <LiveQueryProvider
      client={client}
      token={token}
      // Uncomment below to see debug reports
      // logger={console}
    >
      {children}
    </LiveQueryProvider>
  );
}
