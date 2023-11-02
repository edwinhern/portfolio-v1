import { PortfolioOverview } from "@/components/PortfolioOverview";
import { seoConfig } from "@/config";
import { Metadata } from "next";

export const metadata: Metadata = seoConfig;

export default function Home() {
  return <PortfolioOverview />;
}
