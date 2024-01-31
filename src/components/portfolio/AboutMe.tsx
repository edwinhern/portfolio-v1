'use client';

import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import aboutMeData from '@/data/aboutMeData';

const AboutMeSection = () => {
  const { toast } = useToast();

  function handleCardClick() {
    toast({ title: `coming soon!` });
  }
  return (
    <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
      {aboutMeData.map((item) => (
        <Card key={item.title} className="cardAnimation" onClick={handleCardClick}>
          <Image
            draggable={false}
            src={item.src}
            alt={item.alt}
            className="h-48 w-full rounded-t-lg object-cover"
            width={420}
            height={200}
            priority
          />
          <CardHeader className="px-4">
            <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-4">
            <div className="text-sm text-muted-foreground">{item.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AboutMeSection;
