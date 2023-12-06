"use client";

import CarouselComponent from "@/components/ui/Carousel/Carousel";
import CarouselCard from "@/components/ui/Carousel/CarouselCard";
import aboutMeData from "@/data/aboutMeData";

const MobileAboutMeSection = () => {
  return (
    <CarouselComponent>
      {aboutMeData.map((card) => (
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
