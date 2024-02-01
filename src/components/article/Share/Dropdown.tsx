import { Share } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { CopyLink } from './CopyLink';
import { ShareOnLinkedIn } from './LinkedIn';
import { ShareOnTwitter } from './Twitter';

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
      <DropdownMenuContent className="w-48" align="end" forceMount>
        <DropdownMenuGroup>
          <CopyLink link={link} />
          <DropdownMenuSeparator />
          <ShareOnTwitter title={title} link={link} />
          <ShareOnLinkedIn title={title} link={link} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
