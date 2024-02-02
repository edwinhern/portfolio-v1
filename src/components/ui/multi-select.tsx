import { PlusCircle } from 'lucide-react';
import React, { useCallback, useEffect } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import { Checkbox } from './checkbox';

interface Options {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface MultiSelectProps {
  title?: string;
  options: Options[];
  selectedValues: Set<string>;
  onSelectionChange: (selected: Set<string>) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ title, options, selectedValues, onSelectionChange }) => {
  const [selected, setSelected] = React.useState(new Set(selectedValues));

  const handleSelect = useCallback((value: string) => {
    setSelected((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(value)) {
        newSelected.delete(value);
      } else {
        newSelected.add(value);
      }
      return newSelected;
    });
  }, []);

  const handleClear = React.useCallback(() => {
    setSelected(new Set());
  }, []);

  useEffect(() => {
    onSelectionChange(selected);
  }, [selected, onSelectionChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 size-4" />
          {title}
          {selected?.size > 0 && <SelectedBadges options={options} selected={selected} />}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selected.has(option.value.toLocaleLowerCase());
                return (
                  <CommandItem key={option.value} onSelect={handleSelect}>
                    <div className={cn('mr-2 flex items-center justify-center')}>
                      <Checkbox checked={isSelected} onChange={() => handleSelect(option.value)} />
                    </div>
                    {option.icon && <option.icon className="mr-2 size-4 text-muted-foreground" />}
                    <span>{option.label}</span>
                    {selected?.has(option.value) && (
                      <span className="ml-auto flex size-4 items-center justify-center font-mono text-xs">
                        {selected.has(option.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>

            {selected.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={handleClear} className="justify-center text-center">
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface SelectedBadgesProps {
  options: Options[];
  selected: Set<string>;
}
const SelectedBadges: React.FC<SelectedBadgesProps> = ({ options, selected }) => {
  return (
    <>
      <Separator orientation="vertical" className="mx-2 h-4" />
      <Badge variant="default" className="rounded-sm px-1 font-medium lg:hidden">
        {selected.size}
      </Badge>
      <div className="hidden space-x-1 lg:flex">
        {selected.size > 2 ? (
          <Badge variant="default" className="rounded-sm px-1 font-medium">
            {selected.size} selected
          </Badge>
        ) : (
          options
            .filter((option) => selected.has(option.value.toLocaleLowerCase()))
            .map((option) => (
              <Badge key={option.value} className="rounded-sm px-1 font-medium">
                {option.label}
              </Badge>
            ))
        )}
      </div>
    </>
  );
};

export { MultiSelect };
