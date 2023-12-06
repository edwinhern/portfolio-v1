import "react-multi-carousel/lib/styles.css";

import dynamic from "next/dynamic";

import CarouselLoadingPlaceholder from "@/components/ui/Carousel/CarouselLoadingPlaceholder";
import responsiveData from "@/data/responsiveData";
import { ChildProp } from "@/types/common";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  loading: () => <CarouselLoadingPlaceholder />,
  ssr: false,
});

const CarouselComponent = ({ children }: ChildProp) => {
  return (
    <div className="md:hidden flex flex-col gap-4">
      <Carousel ssr responsive={responsiveData} swipeable={false}>
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
