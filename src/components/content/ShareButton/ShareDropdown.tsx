import { Share } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { CopyLinkButton } from './CopyLinkButton';
import { LinkedInShareButton } from './LinkedInButton';
import { TwitterShareButton } from './TwitterShareButton';

type ShareDropdownProps = { link: string; title: string };
const ShareDropdown = ({ link, title }: ShareDropdownProps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={'icon'} variant="outline">
            <Share className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end" forceMount>
          <DropdownMenuGroup>
            <CopyLinkButton link={link} />
            <DropdownMenuSeparator />
            <TwitterShareButton title={title} link={link} />
            <LinkedInShareButton title={title} link={link} />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ShareDropdown;
