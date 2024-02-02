'use client';

import CarouselComponent from '@/components/ui/Carousel/Carousel';
import CarouselCard from '@/components/ui/Carousel/CarouselCard';
import { CONSTANTS } from '@/lib/appConstants';

const MobileAboutMeSection = () => {
  const aboutMeDetails = CONSTANTS.PORTFOLIO.ABOUT_ME;

  return (
    <CarouselComponent>
      {aboutMeDetails.map((card) => (
        <CarouselCard
          key={card.title}
          src={card.src}
          alt={card.alt}
          title={card.title}
          description={card.description}
        />
      ))}
    </CarouselComponent>
  );
};

export default MobileAboutMeSection;
