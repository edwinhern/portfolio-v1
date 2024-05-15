'use client';

import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { CONSTANTS } from '@/lib/appConstants';

const AboutMeSection = () => {
  const { toast } = useToast();
  const aboutMeDetails = CONSTANTS.PORTFOLIO.ABOUT_ME;

  function handleCardClick() {
    toast({ title: `coming soon!` });
  }

  return (
    <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
      {aboutMeDetails.map((item) => (
        <Card className="cardAnimation" key={item.title} onClick={handleCardClick}>
          <Image
            alt={item.alt}
            className="h-48 w-full rounded-t-lg object-cover"
            draggable={false}
            height={200}
            priority
            src={item.src}
            width={420}
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
