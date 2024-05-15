import { useCallback } from 'react';

import { Twitter } from 'lucide-react';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

interface ShareOnTwitterProps {
  link: string;
  title: string;
}

export const ShareOnTwitter: React.FC<ShareOnTwitterProps> = ({ link, title }) => {
  const share = useCallback(() => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(
      link
    )}`;
    window.open(tweetUrl, '_blank', 'noopener,noreferrer');
  }, [link, title]);

  return (
    <>
      <DropdownMenuItem className="flex items-center gap-2" onClick={share}>
        <Twitter className="size-4" />
        Share on Twitter
      </DropdownMenuItem>
    </>
  );
};
