import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  return (
    <Card href={'/project'} className="cardAnimation col-span-full flex space-x-4 p-4 md:col-span-5">
      <div className="md:flex md:size-full md:flex-col md:justify-center">
        <Image
          draggable={false}
          src="/projects/wildfire-tracker.png"
          alt="Random landscape image from Unsplash"
          className="h-48 w-full rounded-lg object-cover md:h-56 lg:h-64"
          width={420}
          height={200}
          priority
        />
      </div>
      <div className="mt-1 md:flex md:w-1/2 md:flex-col">
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-bold">Recent Projects</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground">Experience the majesty of nature&apos;s vast expanse.</div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectsSection;
