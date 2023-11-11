import { Twitter } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

type TwitterLinkProps = {
  link: string;
  title: string;
};

export const TwitterShareButton = ({ link, title }: TwitterLinkProps) => {
  const handleClick = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title as string,
    )}&url=${encodeURIComponent(link)}`;
    window.open(tweetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <DropdownMenuItem
        className="flex items-center gap-2"
        onClick={handleClick}
      >
        <Twitter className="h-4 w-4" />
        Share on Twitter
      </DropdownMenuItem>
    </>
  );
};
