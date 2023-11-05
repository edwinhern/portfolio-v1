import { TwitterLogoIcon } from "@radix-ui/react-icons";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TwitterLinkProps {
  title: string | undefined;
  baseUrl: string | undefined;
  slug: string | undefined;
}

export const TwitterShareButton = ({
  title,
  baseUrl,
  slug,
}: TwitterLinkProps) => {
  const handleClick = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title as string,
    )}&url=${encodeURIComponent(`${baseUrl}/blog/${slug}`)}`;
    window.open(tweetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={`${buttonVariants({
            variant: "ghost",
            size: "icon",
          })}`}
          onClick={handleClick}
        >
          <TwitterLogoIcon className="h-4 w-4 text-black dark:text-white" />
        </TooltipTrigger>
        <TooltipContent className="z-[2000]">Share on Twitter</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
