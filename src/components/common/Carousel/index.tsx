import dynamic from "next/dynamic";
import Image from "next/image";
import { FC } from "react";

// import Carousel from "react-multi-carousel";
import { responsive } from "@/data";
import { ChildProp } from "@/types/common";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  loading: () => <p>Loading...</p>,
});

export const CarouselComponent: FC<ChildProp> = ({ children }) => {
  return (
    <div className="md:hidden">
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

export const CustomCard: FC<CustomCardProps> = ({
  src,
  alt,
  title,
  description,
}) => (
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
