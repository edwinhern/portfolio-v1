import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CustomCardProps {
  alt: string;
  description: string;
  src: string;
  title: string;
}

const CarouselCard = ({ alt, description, src, title }: CustomCardProps) => (
  <Card className="cardAnimation">
    <Image
      alt={alt}
      className="h-48 w-full rounded-t-lg object-cover"
      draggable={false}
      height={200}
      priority
      src={src}
      width={420}
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
