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
          alt={card.alt}
          description={card.description}
          key={card.title}
          src={card.src}
          title={card.title}
        />
      ))}
    </CarouselComponent>
  );
};

export default MobileAboutMeSection;
