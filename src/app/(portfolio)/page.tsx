import { Metadata } from "next";

import HomeIndexPage from "@/components/pages/home";
import { seoConfig } from "@/lib/network-utils";

export const metadata: Metadata = seoConfig;

export default function Home() {
  return <HomeIndexPage />;
}
