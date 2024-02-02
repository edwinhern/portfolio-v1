import { Metadata } from 'next';

import AboutMeSection from '@/components/portfolio/AboutMe';
import BlogSection from '@/components/portfolio/Blog';
import LocationSection from '@/components/portfolio/Location';
import MobileAboutMeSection from '@/components/portfolio/MobileAboutMe';
import ProjectsSection from '@/components/portfolio/Project';
import { seoConfig } from '@/lib/networkUtils';

export const metadata: Metadata = seoConfig;

export default function Home() {
  return (
    <div className="space-y-4 md:animate-slideFromDownAndFade">
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
  );
}
