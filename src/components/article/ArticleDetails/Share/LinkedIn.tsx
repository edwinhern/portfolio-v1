import { Linkedin } from 'lucide-react';
import { useCallback } from 'react';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

interface ShareOnLinkedInProps {
  title: string;
  link: string;
}

export const ShareOnLinkedIn: React.FC<ShareOnLinkedInProps> = ({ title, link }) => {
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
