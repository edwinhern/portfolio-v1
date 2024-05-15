import { Bot, Cpu, Home, LibraryBig, UserSquare2 } from 'lucide-react';

const ICON_SIZE = 18;

export const CONSTANTS = {
  NAVIGATION: [
    {
      description: 'Modern & concise portfolio showcasing projects, blogs, and contact details.',
      href: '/',
      icon: <Home size={ICON_SIZE} />,
      title: 'Home',
    },
    {
      description: 'A collection of my best works and projects.',
      href: '/project',
      icon: <Cpu size={ICON_SIZE} />,
      title: 'Projects',
    },
    {
      description: 'Thoughts, insights, and articles on various topics.',
      href: '/blog',
      icon: <LibraryBig size={ICON_SIZE} />,
      title: 'Blog',
    },
    {
      comingSoon: true,
      description: 'Reach out to me for collaborations, questions, or just to say hi.',
      href: '/contact',
      icon: <UserSquare2 size={ICON_SIZE} />,
      title: 'Contact',
    },
    {
      description: 'Admin panel for managing projects, blogs, and other content.',
      href: '/admin',
      icon: <Bot size={ICON_SIZE} />,
      title: 'Admin',
    },
  ],

  PORTFOLIO: {
    ABOUT_ME: [
      {
        alt: 'Portrait of me',
        description: 'Discover my journey in the tech world',
        src: '/me.png',
        title: 'My Story',
      },
      {
        alt: 'Tesla Icon',
        description: 'Click to explore my internship and full-time experience',
        src: '/jobs/tesla.png',
        title: 'Tesla',
      },
      {
        alt: 'JPMorgan Chase & Co. Icon',
        description: 'Click to see my internship journey at Chase',
        src: '/jobs/jpmorgan-chase.png',
        title: 'JPMorgan Chase & Co.',
      },
      {
        alt: 'SEO Tech Developer Icon',
        description: 'Where my tech journey began',
        src: '/jobs/seo-tech.png',
        title: 'SEO Tech Internship',
      },
    ],
    BLOG: {
      blogs: {
        content: 'Explore my tech thoughts on Medium',
        title: 'Blogs',
      },
      contact: {
        content: "Let's collaborate on the next big thing",
        title: 'Contact Me',
      },
    },
  },
};
