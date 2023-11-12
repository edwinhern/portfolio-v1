import { AlignJustify, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuData } from "@/data";
import { cn } from "@/lib/utils";

export function Menu() {
  const { header, items } = menuData;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant="ghost">
          <AlignJustify size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="grid gap-4 w-full mt-12">
          <Card>
            <Link
              className="block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              href={header.href}
            >
              <div className="flex items-center gap-2 text-lg font-medium">
                <Home size={18} />
                {header.title}
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                {header.description}
              </p>
            </Link>
          </Card>
          {items.map((item) => (
            <ListItem
              key={item.href}
              href={item.href}
              title={item.title}
              icon={item.icon}
            >
              {item.description}
            </ListItem>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <Card>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-md font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Card>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
