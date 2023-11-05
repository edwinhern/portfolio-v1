"use client";

import { CarouselComponent, CustomCard } from "@/components/common/Carousel";
import { aboutMeData } from "@/data";

const MobileAboutMeSection = () => {
  return (
    <CarouselComponent>
      {aboutMeData.map((card) => (
        <CustomCard
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
