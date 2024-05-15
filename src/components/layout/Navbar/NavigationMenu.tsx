import React from 'react';

import { AlignJustify } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import { CONSTANTS } from '@/lib/appConstants';
import { cn } from '@/lib/utils';

export function NavigationMenu() {
  const navigationDetails = CONSTANTS.NAVIGATION;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} variant="ghost">
          <AlignJustify size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="mt-12 grid w-full gap-4">
          {navigationDetails.map((item) => (
            <ListItem
              href={item.href}
              icon={item.icon}
              isComingSoon={item.comingSoon}
              key={item.href}
              title={item.title}
            >
              {item.description}
            </ListItem>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  isComingSoon?: boolean;
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ children, className, icon, isComingSoon, title, ...props }, ref) => {
    const { toast } = useToast();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isComingSoon) {
        e.preventDefault();
        toast({ title: `coming soon!` });
      }
    };

    return (
      <li>
        <Card>
          <a
            className={cn(
              'block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            onClick={handleClick}
            ref={ref}
            {...props}
          >
            <div className="flex items-center gap-2 text-base font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </Card>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
