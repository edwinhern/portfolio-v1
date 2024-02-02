import { Link } from 'lucide-react';
import { useCallback } from 'react';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { DATE_FORMAT, formatDateTime } from '@/lib/dateUtils';

interface CopyLinkProps {
  link: string;
}

export const CopyLink: React.FC<CopyLinkProps> = ({ link }) => {
  const { toast } = useToast();

  const handleClick = useCallback(() => {
    const date = new Date();
    const formattedDate = formatDateTime(date, DATE_FORMAT.FULL_DATE_TIME);
    // Copy the link to the user's clipboard
    navigator.clipboard.writeText(link);
    toast({ title: 'Link copied', description: formattedDate });
  }, [link, toast]);

  return (
    <DropdownMenuItem className="flex items-center gap-2" onClick={handleClick}>
      <Link className="size-4" />
      Copy Link
    </DropdownMenuItem>
  );
};
