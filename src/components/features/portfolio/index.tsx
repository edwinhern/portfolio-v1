"use client";

import { BlogSection } from "@/components/features/portfolio/Blog";
import { ProjectsSection } from "@/components/features/portfolio/Project";
import { LocationSection } from "@/components/features/portfolio/Location";
import {
  AboutMeSection,
  MobileAboutMeSection,
} from "@/components/features/portfolio/AboutMe";

export const PortfolioOverview = () => {
  return (
    <>
      <div className="animate-slideFromDownAndFade space-y-4">
        {/* About Me */}
        <MobileAboutMeSection />
        <AboutMeSection />

        {/* Blog */}
        <BlogSection />

        {/* Contact and Location */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
          <LocationSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};
