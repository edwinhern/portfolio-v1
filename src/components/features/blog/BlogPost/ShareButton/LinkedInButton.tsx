import { Linkedin } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

type LinkedInShareButtonProps = { link: string; title: string };

export const LinkedInShareButton: React.FC<LinkedInShareButtonProps> = ({
  link,
  title,
}) => {
  const handleShare = () => {
    const url = ` https://www.linkedin.com/feed/?shareActive=true&text=${title} ${encodeURIComponent(
      link,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <DropdownMenuItem className="flex items-center gap-2" onClick={handleShare}>
      <Linkedin className="h-4 w-4" />
      Share on LinkedIn
    </DropdownMenuItem>
  );
};
