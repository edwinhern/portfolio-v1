import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";

type CopyLinkProps = { link: string };
export const CopyLinkButton: React.FC<CopyLinkProps> = ({ link }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(link);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={onCopy}
          className={buttonVariants({ variant: "outline", size: "icon" })}
        >
          {hasCheckIcon ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
        </TooltipTrigger>
        <TooltipContent className="z-[2000] p-2 transition">
          Copy link
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
