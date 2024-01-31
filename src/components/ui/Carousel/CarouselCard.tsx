import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CustomCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const CarouselCard = ({ src, alt, title, description }: CustomCardProps) => (
  <Card className="cardAnimation">
    <Image
      draggable={false}
      src={src}
      alt={alt}
      className="h-48 w-full rounded-t-lg object-cover"
      width={420}
      height={200}
      priority
    />
    <CardHeader className="px-4">
      <CardTitle className="text-lg font-bold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="px-4">
      <div className="text-sm text-muted-foreground">{description}</div>
    </CardContent>
  </Card>
);

export default CarouselCard;
