import { Metadata } from "next";
import { seoConfig } from "@/config";
import { PortfolioOverview } from "@/components/features/portfolio";

export const metadata: Metadata = seoConfig;

export default function Home() {
  return <PortfolioOverview />;
}
