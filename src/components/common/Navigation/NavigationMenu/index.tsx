import { AlignJustify } from "lucide-react";
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
          <li className="row-span-3">
            <Card className="">
              <Link
                className="flex h-full w-full select-none flex-col justify-end rounded-md  bg-primary bg-gradient-to-b from-muted/10 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  {header.title}
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  {header.description}
                </p>
              </Link>
            </Card>
          </li>
          {items.map((item) => (
            <ListItem key={item.href} href={item.href} title={item.title}>
              {item.description}
            </ListItem>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Card>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </Card>
    </li>
  );
});
ListItem.displayName = "ListItem";
