import { AlignJustify } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import navigationData from '@/data/navigationData';
import { cn } from '@/lib/utils';

export function NavigationMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} variant="ghost">
          <AlignJustify size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="mt-12 grid w-full gap-4">
          {navigationData.map((item) => (
            <ListItem
              key={item.href}
              href={item.href}
              title={item.title}
              icon={item.icon}
              isComingSoon={item.comingSoon}
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
  className?: string;
  title: string;
  isComingSoon?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, icon, children, isComingSoon, ...props }, ref) => {
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
            ref={ref}
            onClick={handleClick}
            className={cn(
              'block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-md flex items-center gap-2 font-medium leading-none">
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
