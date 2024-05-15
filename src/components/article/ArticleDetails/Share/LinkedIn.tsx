import { useCallback } from 'react';

import { Linkedin } from 'lucide-react';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

interface ShareOnLinkedInProps {
  link: string;
  title: string;
}

export const ShareOnLinkedIn: React.FC<ShareOnLinkedInProps> = ({ link, title }) => {
  const share = useCallback(() => {
    const shareUrl = ` https://www.linkedin.com/feed/?shareActive=true&text=${title} ${encodeURIComponent(link)}`;
    window.open(shareUrl, '_blank');
  }, [link, title]);

  return (
    <DropdownMenuItem className="flex items-center gap-2" onClick={share}>
      <Linkedin className="-mt-1 size-4" />
      Share on LinkedIn
    </DropdownMenuItem>
  );
};
