import { Cpu, Home, LibraryBig, UserSquare2 } from 'lucide-react';

const ICON_SIZE = 18;

const navigationData = [
  {
    title: 'Home',
    description: 'Modern & concise portfolio showcasing projects, blogs, and contact details.',
    href: '/',
    icon: <Home size={ICON_SIZE} />,
  },
  {
    title: 'Projects',
    description: 'A collection of my best works and projects.',
    href: '/project',
    icon: <Cpu size={ICON_SIZE} />,
  },
  {
    title: 'Blog',
    description: 'Thoughts, insights, and articles on various topics.',
    href: '/blog',
    icon: <LibraryBig size={ICON_SIZE} />,
  },
  {
    title: 'Contact',
    description: 'Reach out to me for collaborations, questions, or just to say hi.',
    href: '/contact',
    icon: <UserSquare2 size={ICON_SIZE} />,
    comingSoon: true,
  },
];

export default navigationData;
