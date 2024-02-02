import 'react-multi-carousel/lib/styles.css';

import dynamic from 'next/dynamic';

import CarouselLoadingPlaceholder from '@/components/ui/Carousel/CarouselLoadingPlaceholder';
import responsiveData from '@/data/responsiveData';

const Carousel = dynamic(() => import('react-multi-carousel'), {
  loading: () => <CarouselLoadingPlaceholder />,
  ssr: false,
});

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
