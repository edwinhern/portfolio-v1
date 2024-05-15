import { Share } from 'lucide-react';

import { CopyLink } from '@/components/article/ArticleDetails/Share/CopyLink';
import { ShareOnLinkedIn } from '@/components/article/ArticleDetails/Share/LinkedIn';
import { ShareOnTwitter } from '@/components/article/ArticleDetails/Share/Twitter';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ShareDropdownProps {
  link: string;
  title: string;
}

export const ShareDropdown = ({ link, title }: ShareDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'icon'} variant="outline">
          <Share className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48" forceMount>
        <DropdownMenuGroup>
          <CopyLink link={link} />
          <DropdownMenuSeparator />
          <ShareOnTwitter link={link} title={title} />
          <ShareOnLinkedIn link={link} title={title} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
