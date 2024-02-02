import 'react-multi-carousel/lib/styles.css';

import dynamic from 'next/dynamic';

import CarouselLoadingPlaceholder from '@/components/ui/Carousel/CarouselLoadingPlaceholder';

const Carousel = dynamic(() => import('react-multi-carousel'), {
  loading: () => <CarouselLoadingPlaceholder />,
  ssr: false,
});

const responsiveData = {
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
  },
};

const CarouselComponent: React.FC<ChildProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      <Carousel ssr responsive={responsiveData} swipeable={false}>
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
