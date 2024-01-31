import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const CarouselLoadingPlaceholder = () => (
  <div className="md:hidden">
    <Card className="cardAnimation">
      <Skeleton className="h-48 w-full rounded bg-secondary" />
      <CardHeader className="px-4">
        <Skeleton className="h-4 w-12 bg-secondary" />
      </CardHeader>
      <CardContent className="px-4">
        <Skeleton className="h-4 w-20 bg-secondary" />
      </CardContent>
    </Card>
  </div>
);

export default CarouselLoadingPlaceholder;
