import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutMeData } from "@/data";

const AboutMeSection = () => {
  return (
    <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
      {aboutMeData.map((item) => (
        <Card key={item.title} className="cardAnimation">
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
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-4">
            <div className="text-sm text-muted-foreground">
              {item.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AboutMeSection;
