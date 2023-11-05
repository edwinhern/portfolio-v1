import "react-multi-carousel/lib/styles.css";

import dynamic from "next/dynamic";
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { responsive } from "@/data";
import { ChildProp } from "@/types/common";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

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

const Carousel = dynamic(() => import("react-multi-carousel"), {
  loading: () => <CarouselLoadingPlaceholder />,
  ssr: false,
});

export const CarouselComponent = ({ children }: ChildProp) => {
  return (
    <div className="md:hidden flex flex-col gap-4">
      <Carousel ssr responsive={responsive} swipeable={false}>
        {children}
      </Carousel>
    </div>
  );
};

interface CustomCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const CustomCard = ({
  src,
  alt,
  title,
  description,
}: CustomCardProps) => (
  <Card className="cardAnimation">
    <Image
      draggable={false}
      src={src}
      alt={alt}
      className="h-48 w-full rounded-t-lg object-cover"
      width={420}
      height={200}
    />
    <CardHeader className="px-4">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent className="px-4">
      <div className="text-sm text-muted-foreground">{description}</div>
    </CardContent>
  </Card>
);
