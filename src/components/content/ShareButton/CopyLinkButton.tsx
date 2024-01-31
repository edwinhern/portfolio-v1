import { Link } from 'lucide-react';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';

type CopyLinkProps = { link: string };

export const CopyLinkButton: React.FC<CopyLinkProps> = ({ link }) => {
  const { toast } = useToast();

  const handleClick = () => {
    const date = new Date();
    const dateString = date.toLocaleString('en-US', {
      weekday: 'long', // "Friday"
      year: 'numeric', // "2023"
      month: 'long', // "February"
      day: 'numeric', // "10"
      hour: 'numeric', // "5"
      minute: 'numeric', // "57"
      hour12: true, // "PM"
    });

    navigator.clipboard.writeText(link);
    toast({
      title: 'Link copied',
      description: dateString,
    });
  };

  return (
    <>
      <DropdownMenuItem className="flex items-center gap-2" onClick={handleClick}>
        <Link className="size-4" />
        Copy Link
      </DropdownMenuItem>
    </>
  );
};
