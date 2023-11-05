import AboutMeSection from "@/components/features/portfolio/AboutMe";
import BlogSection from "@/components/features/portfolio/Blog";
import LocationSection from "@/components/features/portfolio/Location";
import MobileAboutMeSection from "@/components/features/portfolio/MobileAboutMe";
import ProjectsSection from "@/components/features/portfolio/Project";

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
