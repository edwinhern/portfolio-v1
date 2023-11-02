import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
const builder = imageUrlBuilder(client);

export const ImageFieldComponent = ({ value }: any) => {
  return (
    <Image
      className="rounded-lg"
      src={builder.image(value).url()}
      width={800}
      height={800}
      alt={value.alt || " "}
      loading="lazy"
    />
  );
};

export default ImageFieldComponent;
