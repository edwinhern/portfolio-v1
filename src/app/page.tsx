import { Metadata } from "next";

import { PortfolioOverview } from "@/components/features/portfolio";
import { seoConfig } from "@/config";

export const metadata: Metadata = seoConfig;

export default function Home() {
  return <PortfolioOverview />;
}
