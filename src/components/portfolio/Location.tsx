import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LocationSection = () => {
  return (
    <Card className="cardAnimation col-span-full md:col-span-2">
      <div className="p-4">
        <Image
          alt="Austin Texas - yeehaw!"
          className="h-40 w-full justify-center rounded-t-lg object-cover md:rounded-lg lg:h-48"
          draggable={false}
          height={200}
          priority
          src="/city/austin-sketch.png"
          width={420}
        />
      </div>
      <CardHeader className="-mb-2 px-4">
        <CardTitle className="text-lg font-bold">Location</CardTitle>
      </CardHeader>
      <CardContent className="-mb-2 px-4">
        <div className="text-sm text-muted-foreground">Austin TX 🤠</div>
      </CardContent>
    </Card>
  );
};

export default LocationSection;
