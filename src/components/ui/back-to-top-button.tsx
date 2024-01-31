'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const onScroll = () => {
    setShowButton(window.scrollY > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 right-0 p-6 transition-opacity duration-500 ease-in-out ${
          showButton ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ transition: 'opacity 0.5s ease-in-out' }}
      >
        <Button size="icon" variant={'default'} onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp />
        </Button>
      </div>
    </>
  );
}

export { BackToTopButton };
