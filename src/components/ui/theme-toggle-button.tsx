import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon" aria-label="Toggle Theme" title="Toggle Theme">
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
};

export { ThemeToggleButton };
