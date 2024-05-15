import { format, parseISO } from 'date-fns';

interface DateProps {
  dateString: string;
  dateType?: 'long' | 'medium' | 'short';
}

export default function FormattedDate({ dateString, dateType = 'long' }: DateProps) {
  if (!dateString) return null;

  const date = parseISO(dateString);

  const formatDate = (date: Date, type: 'long' | 'medium' | 'short') => {
    switch (type) {
      case 'short':
        // 'MMM d' format for short type (e.g., 'Jan 01')
        return format(date, 'MMM d');
      case 'medium':
        // 'MMM d, yyyy' format for medium type (e.g., 'Jan 01, 2023')
        return format(date, 'MMM d, yyyy');
      case 'long':
      default:
        // 'LLLL d, yyyy' format for long type (e.g., 'January 01, 2023')
        return format(date, 'LLLL d, yyyy');
    }
  };

  const formattedDate = formatDate(date, dateType);

  return <time dateTime={dateString}>{formattedDate}</time>;
}
